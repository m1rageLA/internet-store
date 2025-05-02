import React from 'react';
import { Box, Typography, Chip, Stack } from '@mui/material';

export default function SidePanel() {
  const categories = ['Obuwie', 'Spodnie', 'Koszulki', 'Akcesoria', 'Dom', 'Audio'];
  
  return (
    <Box
      component="aside"
      sx={{
        position: 'fixed',
        top: '50%',
        left: 24, // отступ от левого края (можно изменить)
        transform: 'translateY(-50%)',
        width: 200,
        // backgroundColor: 'grey.100',
        p: 2,
        borderRadius: 2,
        boxShadow: 2,
        color: 'text.primary',
        zIndex: 1100, // чтобы не перекрывался другим контентом
      }}
    >
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        Kategorie
      </Typography>
      <Stack direction="row" spacing={1} flexWrap="wrap">
        {categories.map(category => (
          <Chip
            key={category}
            label={category}
            clickable
            // color={selectedCategories.includes(category) ? 'primary' : 'default'}
            // onClick={() => toggleCategory(category)}
          />
        ))}
      </Stack>
    </Box>
  );
}
