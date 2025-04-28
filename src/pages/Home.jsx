import React from 'react';
import { Box } from '@mui/material';
import ProductsSection from '../components/ProductsSection';
import SidePanel from '../components/SidePanel';

export default function Home() {
  return (
    <Box sx={{ display: 'flex', gap: 4, px: 4, pt: 4 }}>
      {/* Боковая панель */}
      <Box sx={{ width: 250, flexShrink: 0 }}>
        <SidePanel />
      </Box>

      {/* Секция товаров */}
      <Box sx={{ flexGrow: 1 }}>
        <ProductsSection />
      </Box>
    </Box>
  );
}
