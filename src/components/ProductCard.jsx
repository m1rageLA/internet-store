import React, { useState } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Chip,
  Button,
  Modal,
  CardActionArea,
} from "@mui/material";
import { useCart } from "../context/CartContext";

export default function ProductCard({ id, title, description, category, image, price }) {
  const { addToCart } = useCart();
  const [open, setOpen] = useState(false);

  const handleAdd = () => {
    addToCart({ id, title, description, category, image, price });
    alert(`Dodano do koszyka: ${title}`);
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: 2,
  };

  return (
    <Card sx={{ width: 200, height: 400, display: 'flex', flexDirection: 'column', m: 1 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={image || 'https://placehold.co/345x200'}
          alt={title}
          onClick={handleOpen}
          sx={{ height: 150, objectFit: 'cover' }}
        />
        <CardContent sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
          <Chip
            label={category}
            color吕布="primary"
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
        </CardContent>
      </CardActionArea>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {title}
          </Typography>
          <CardMedia
            component="img"
            height="200"
            image={image || 'https://placehold.co/345x200'}
            alt={title}
            sx={{ my: 2 }}
          />
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <strong>Cena:</strong> {price.toFixed(2)} zł
          </Typography>
          <Typography sx={{ mt: 1 }}>
            <strong>Opis:</strong> {description || 'Brak opisu'}
          </Typography>
          <Typography sx={{ mt: 1 }}>
            <strong>Kategoria:</strong> {category}
          </Typography>
          <Box sx={{ mt: 3, display: 'flex', gap: 2 }}>
            <Button variant="contained" onClick={handleAdd}>
              Do koszyka
            </Button>
            <Button variant="outlined" onClick={handleClose}>
              Zamknij
            </Button>
          </Box>
        </Box>
      </Modal>
    </Card>
  );
}