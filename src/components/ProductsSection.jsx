import React, { useMemo, useState } from 'react';
import { Grid, Typography, Container, TextField } from '@mui/material';
import ProductCard from './ProductCard';
import { useProducts } from '../hooks/useProducts';
import { useCategory } from './CategoryContext';

export default function ProductsSection() {
  const { products } = useProducts();
  const { selected, priceRange } = useCategory();
  const [search, setSearch] = useState('');

  // 🧠 even if products is empty — memo still runs safely
  const categoryFiltered = useMemo(() => {
    if (!products?.length) return [];
    return selected.length === 0
      ? products
      : products.filter(p => selected.includes(String(p.category)));
  }, [products, selected]);

  const priceFiltered = useMemo(() => {
    const [min, max] = priceRange;
    return categoryFiltered.filter(p => {
      const priceNum = typeof p.price === 'string'
        ? parseFloat(p.price)
        : p.price;
      return priceNum >= min && priceNum <= max;
    });
  }, [categoryFiltered, priceRange]);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return !q
      ? priceFiltered
      : priceFiltered.filter(p =>
          p.title.toLowerCase().includes(q)
        );
  }, [priceFiltered, search]);

  // ✅ тут уже безопасно
  if (!products?.length) {
    return <Typography>Ładowanie produktów…</Typography>;
  }

  return (
    <Container maxWidth="xl" sx={{ mt: 4 }}>
      <Typography color='#2e2e2e' variant="h4" fontWeight="bold" gutterBottom sx={{ ml: "10px" }}>
        Produkty
      </Typography>
      <TextField
        label="Wyszukaj produkt"
        type="search"
        size="small"
        fullWidth
        margin="normal"
        value={search}
        onChange={e => setSearch(e.target.value)}
        sx={{ width: { xs: '100%', sm: '30%' }, ml: { xs: 0, sm: '10px' } }}
      />
      <Grid container spacing={{ xs: 2, md: 3 }}>
        {filtered.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={product.id}>
            <ProductCard {...product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
