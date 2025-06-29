import React from 'react';
import {
  Box,
  Typography,
  Slider,
  FormGroup,
  FormControlLabel,
  Checkbox,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useCategory } from './CategoryContext';

export default function SidePanel() {
  const { selected, setSelected, priceRange, setPriceRange } = useCategory();
  const categories = ['pants', 'footwear', 'shirts', 'Akcesoria', 'Dom', 'Audio'];

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  
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
        position: { md: 'fixed', xs: 'static' },
        top: { md: '50%', xs: 'auto' },
        left: { md: 24, xs: 'auto' },
        transform: { md: 'translateY(-50%)', xs: 'none' },
        width: { xs: '100%', md: 240, xl: 300 },
        p: 4,
        borderRadius: 2,
        boxShadow: 2,
        bgcolor: '#ffffff',
        color: '#2e2e2e',
        zIndex: isMobile ? 'auto' : 1100,
        mb: { xs: 2, md: 0 },
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
