import React from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';

export default function SidePanel() {
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
      <List dense>
        {['Obuwie', 'Spodnie', 'Koszulki'].map((text) => (
          <ListItem disablePadding key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
