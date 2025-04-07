import React from 'react';
import { Grid, Container } from '@mui/material';
import ProductCard from './productCard';

const ProductGrid = ({ products }) => {
  return (
    <Container sx={{ mt: 4, maxWidth: '1200px' }}>
      <Grid container spacing={1}>  {}
        {products.map((product, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ProductCard {...product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ProductGrid;
