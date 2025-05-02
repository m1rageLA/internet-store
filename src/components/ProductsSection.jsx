import React from 'react';
import { Grid, Typography, Container } from '@mui/material';
import ProductCard from './ProductCard';
import { products } from '../data/products';
import { useCategory } from './CategoryContext';

export default function ProductsSection() {

  const { selected } = useCategory();

  const filtered = selected.length === 0
    ? products // Show all if none selected
    : products.filter((p) => selected.includes(p.category));

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography color='#2e2e2e' variant="h4" fontWeight="bold" gutterBottom>
        Produkty
      </Typography>
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
