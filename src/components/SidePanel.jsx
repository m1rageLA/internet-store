import React, { useState } from 'react';
import {
  Box,
  Typography,
  Slider,
  FormGroup,
  FormControlLabel,
  Checkbox
} from '@mui/material';

export default function SidePanel() {
  const [priceRange, setPriceRange] = useState([0, 100]);

  const updateRange = (e, data) => {
    setPriceRange(data);
  };

  const MAX = 200;
  const MIN = 0;

  const marks = [
    { value: MIN, label: '' },
    { value: MAX, label: '' },
  ];

  const categories = ['Obuwie', 'Spodnie', 'Koszulki', 'Akcesoria', 'Dom', 'Audio'];

  return (
    <Box
      component="aside"
      sx={{
        position: 'fixed',
        top: '50%',
        left: 24,
        transform: 'translateY(-50%)',
        width: 240,
        p: 2,
        borderRadius: 2,
        boxShadow: 2,
        bgcolor: 'background.paper',
        color: 'text.primary',
        zIndex: 1100,
      }}
    >
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        Kategorie
      </Typography>
      <FormGroup>
        {categories.map(category => (
          <FormControlLabel
            key={category}
            control={<Checkbox />}
            label={category}
          />
        ))}
      </FormGroup>

      <Box mt={4}>
        <Typography variant="subtitle1" gutterBottom>
          Zakres cenowy
        </Typography>
        <Slider
          marks={marks}
          value={priceRange}
          onChange={updateRange}
          valueLabelDisplay="on"
          min={MIN}
          max={MAX}
        />
      </Box>
    </Box>
  );
}
