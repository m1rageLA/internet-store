import React from 'react';
import { Box, Typography, Chip, Stack } from '@mui/material';
import { useCategory } from './CategoryContext';

const categories = ['Obuwie', 'Spodnie', 'Koszulki', 'Akcesoria', 'Dom', 'Audio'];

export const Categories = () => { 
  const { selected, toggleCategory } = useCategory();
  
  return (
    <Stack direction="row" spacing={1} flexWrap="wrap">
        {categories.map(cat => (
            <Chip
            key={cat}
            label={cat}
            clickable
            color={selected.includes(cat) ? 'primary' : 'default'}
            variant={selected.includes(cat) ? 'filled' : 'outlined'}
            onClick={() => toggleCategory(cat)}
            />
        ))}
    </Stack>
  );
}
