import React from 'react';
import { Grid, Container } from '@mui/material';
import ProductCard from './ProductCard';

const ProductGrid = ({ products }) => {
  return (
    <Container sx={{ mt: 4, maxWidth: '1200px' }}>
      <Grid container spacing={1}>  {}
        {products.map((product, index) => (
            <ProductCard {...product} />
        ))}
      </Grid>
    </Container>
  );
};

export default ProductGrid;
