import React from 'react';
import { Grid, Container } from '@mui/material';
import ProductCard from './ProductCard';

const ProductGrid = ({ products }) => {
  return (
    <Container sx={{ mt: 4 }} maxWidth="xl">
      <Grid container spacing={2}>
        {products.map((product, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            xl={2}
            key={product.id || index}
          >
            <ProductCard {...product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ProductGrid;
