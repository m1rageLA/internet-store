import React from 'react';
import { Grid, Typography, Container } from '@mui/material';
import ProductCard from './ProductCard';
import { useProducts } from '../hooks/useProducts';


export default function ProductsSection() {
  const { products } = useProducts();

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography color='#2e2e2e' variant="h4" fontWeight="bold" gutterBottom>
        Produkty
      </Typography>
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.title}>
            <ProductCard {...product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
