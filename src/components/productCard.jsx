import React from 'react';
import { Card, CardMedia, CardContent, Typography, Box, Chip } from '@mui/material';

const ProductCard = ({ price, title, description, category, image }) => {
  return (
    <Card sx={{ maxWidth: 300, m: 1 }}>
      <CardMedia
        component="img"
        height="180"
        image={image || 'https://placehold.co/150x200'}
        alt={title}
      />
      <CardContent>
        <Chip label={category} color="primary" size="small" sx={{ mb: 1}} />
        <Typography align="left" variant="h6" component="div" gutterBottom>
          {title}
        </Typography>
        <Typography align="left" variant="body2"  sx={{ mb: 1 }}>
          {description}
        </Typography>
        <Typography align="left" variant="subtitle1" color="text.primary" fontWeight="bold">
          {price} zł
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductCard; 