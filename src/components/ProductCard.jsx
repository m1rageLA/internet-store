import React, { useState } from 'react';
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
} from '@mui/material';
import { useCart } from '../context/CartContext';

/**
 * Карточка товара с модальным окном подробностей
 * ✅ Тёмный цвет текста по всему компоненту
 * ✅ Исправлена ошибка с prop Chip (color="primary")
 * ✅ Открытие модалки на весь CardActionArea
 * ✅ Закрытие модалки при добавлении в корзину
 * ✅ Безопасные значения по умолчанию и line‑clamp для описания
 */
export default function ProductCard({
  id,
  title,
  description = 'Brak opisu',
  category,
  image,
  price = 0,
}) {
  const { addToCart } = useCart();
  const [open, setOpen] = useState(false);

  /** Helpers */
  const handleAdd = () => {
    addToCart({ id, title, description, category, image, price });
    alert(`Dodano do koszyka: ${title}`);
    handleClose();
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  /** Styles */
  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    color: 'text.primary',
    boxShadow: 24,
    p: 4,
    borderRadius: 2,
    outline: 0,
  };

  return (
    <>
      <Card
        sx={{
          width: 240,
          display: 'flex',
          flexDirection: 'column',
          m: 1,
          color: 'text.primary',
        }}
      >
        {/* Весь CardActionArea кликабельный для открытия модалки */}
        <CardActionArea onClick={handleOpen} sx={{ flexGrow: 1 }}>
          <CardMedia
            component="img"
            image={image || 'https://placehold.co/345x200'}
            alt={title}
            sx={{ height: 160, objectFit: 'cover' }}
          />

          <CardContent sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
            <Chip
              label={category}
              color="primary"
              size="small"
              sx={{ mb: 1, alignSelf: 'flex-start' }}
            />

            <Typography variant="h6" gutterBottom noWrap>
              {title}
            </Typography>

            <Typography
              variant="body2"
              sx={{
                mb: 2,
                flexGrow: 1,
                overflow: 'hidden',
                display: '-webkit-box',
                WebkitLineClamp: 3,
                WebkitBoxOrient: 'vertical',
              }}
            >
              {description}
            </Typography>

            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              {Number(price).toFixed(2)} zł
            </Typography>
          </CardContent>
        </CardActionArea>

        {/* Кнопка корзины вне CardActionArea, чтобы не открывать модалку */}
        <Button variant="contained" onClick={handleAdd} sx={{ m: 1 }}>
          Do koszyka
        </Button>
      </Card>

      {/* Модальное окно с подробной информацией */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="product-details-title"
        aria-describedby="product-details-description"
      >
        <Box sx={modalStyle}>
          <Typography id="product-details-title" variant="h6">
            {title}
          </Typography>

          <CardMedia
            component="img"
            height="200"
            image={image || 'https://placehold.co/345x200'}
            alt={title}
            sx={{ my: 2 }}
          />

          <Typography sx={{ mt: 2 }}>
            <strong>Cena:</strong> {Number(price).toFixed(2)} zł
          </Typography>
          <Typography sx={{ mt: 1 }}>
            <strong>Opis:</strong> {description}
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
    </>
  );
}
