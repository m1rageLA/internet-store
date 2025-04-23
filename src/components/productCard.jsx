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
    <Card sx={{ maxWidth: 345, m: 1, display: "flex", flexDirection: "column" }}>
      <CardMedia
        component="img"
        height="180"
        image={image || 'https://placehold.co/150x200'}
        alt={title}
      />
      <CardContent sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
        {/* Чип с категорией, размер и отступы как прежде */}
        <Chip 
          label={category} 
          color="primary" 
          size="small" 
          sx={{ mb: 1, alignSelf: 'flex-start' }} 
        />

        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" sx={{ mb: 2, flexGrow: 1 }}>
          {description}
        </Typography>

        {/* Цена */}
        <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
          {price.toFixed(2)} zł
        </Typography>

        {/* Кнопка под ценой */}
        <Box sx={{ mt: 1 }}>
          <Button
            fullWidth
            variant="contained"
            onClick={handleAdd}
          >
            Do koszyka
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}
