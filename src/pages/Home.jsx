import React from 'react';
import { Box } from '@mui/material';
import ProductsSection from '../components/ProductsSection';
import SidePanel from '../components/SidePanel';
import { CategoryProvider } from '../components/CategoryContext';

export default function Home() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4, px: 4, pt: 4 }}>
      <h1>O nas</h1> {/* <<< добавляем сюда */}
      <CategoryProvider>
        <Box sx={{ display: 'flex', gap: 4 }}>
          <Box sx={{ width: 250, flexShrink: 0 }}>
            <SidePanel />
          </Box>
          <Box sx={{ flexGrow: 1 }}>
            <ProductsSection />
          </Box>
        </Box>
      </CategoryProvider>
    </Box>
  );
}

