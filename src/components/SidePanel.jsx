import React from 'react';
import {
  Box,
  Typography,
  Slider,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from '@mui/material';
import { useCategory } from './CategoryContext';

export default function SidePanel() {
  const { selected, setSelected, priceRange, setPriceRange } = useCategory();
  const categories = ['pants', 'footwear', 'shirts', 'Akcesoria', 'Dom', 'Audio'];
  
  
  const MIN = 0, MAX = 200;
  const marks = [
    { value: MIN, label: `${MIN}` },
    { value: MAX, label: `${MAX}` },
  ];

  const handleRangeChange = (_, newValue) => {
    setPriceRange(newValue);
  };

  const handleToggle = (cat) => (e) => {
    if (e.target.checked) {
      setSelected([...selected, cat]);
    } else {
      setSelected(selected.filter(c => c !== cat));
    }
  };

  return (
    <Box
      component="aside"
      sx={{
        position: 'fixed',
        top: '50%',
        left: 24,
        transform: 'translateY(-50%)',
        width: 240,
        p: 4,
        borderRadius: 2,
        boxShadow: 2,
        bgcolor: '#ffffff',   
        color: '#2e2e2e',      
        zIndex: 1100,
      }}
    >
      {/* Price Slider */}
      <Typography mb={5} variant="h6" fontWeight="bold" gutterBottom>
        Zakres cenowy
      </Typography>
      <Slider
        marks={marks}
        value={priceRange}
        onChange={handleRangeChange}
        valueLabelDisplay="on"
        min={MIN}
        max={MAX}
      />

      {/* Categories */}
      <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ mt: 3 }}>
        Kategorie
      </Typography>
      <FormGroup>
        {categories.map(cat => (
          <FormControlLabel
            key={cat}
            control={
              <Checkbox
                checked={selected.includes(cat)}
                onChange={handleToggle(cat)}
              />
            }
            label={cat}
            sx={{ color: '#2e2e2e' }}
          />
        ))}
      </FormGroup>
    </Box>
  );
}
