import React, { useState } from 'react';
import { Grid, Typography, Container, TextField } from '@mui/material';
import ProductCard from './ProductCard';
import { products } from '../data/products';
import { useProducts } from '../hooks/useProducts';

export default function ProductsSection() {
  const { products } = useProducts();
  const { selected } = useCategory();
  const [search, setSearch] = useState('');

  const categoryFiltered = selected.length === 0
    ? products // Show all if none selected
    : products.filter((p) => selected.includes(p.category));

  // Apply search filter
  const filtered = categoryFiltered.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography color='#2e2e2e' variant="h4" fontWeight="bold" gutterBottom>
        Produkty
      </Typography>
      <TextField id="search" 
        label="Wyszukaj produkt" 
        type="search" 
        size="small"
        fullWidth
        margin="normal" onChange={(e) => setSearch(e.target.value)} />
      <Grid container spacing={3}>
        {filtered.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <ProductCard {...product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
