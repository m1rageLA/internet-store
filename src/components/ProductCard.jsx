// src/components/ProductCard.jsx
import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Chip,
  Button
} from "@mui/material";
import { useCart } from "../context/CartContext";

//changed the name of the component

export default function ProductCard({ id, title, description, category, image, price }) {
  const { addToCart } = useCart();

  const handleAdd = () => {
    addToCart({ id, title, description, category, image, price });
    alert(`Dodano do koszyka: ${title}`);
  };

  return (
    <Card sx={{ width: 200, height: 400, display: 'flex', flexDirection: 'column', m: 1 }}>
      <CardMedia
        component="img"
        image={image || 'https://placehold.co/345x200'}
        alt={title}
        sx={{ height: 150, objectFit: 'cover' }}
      />
      <CardContent sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
        <Chip
          label={category}
          color="primary"
          size="small"
          sx={{ mb: 1, alignSelf: 'flex-start' }}
        />

        <Typography variant="h6" gutterBottom noWrap>
          {title}
        </Typography>
        <Typography variant="body2" sx={{ mb: 2, flexGrow: 1, overflow: 'hidden' }}>
          {description}
        </Typography>

        <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
          {price.toFixed(2)} zł
        </Typography>

        <Box sx={{ mt: 'auto' }}>
          <Button fullWidth variant="contained" onClick={handleAdd}>
            Do koszyka
          </Button>
        </Box>
      </CardContent>
    </Card>

  );
}
