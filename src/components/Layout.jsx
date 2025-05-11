import React from 'react';
import { Box } from '@mui/material';
import Header from './Header';
import SidePanel from './SidePanel';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Header />

      {/* Контентная область */}
      <Box sx={{ flex: 1, display: 'flex', gap: 4, px: 4, py: 4 }}>

        {/* Основной контент */}
        <Box sx={{ flexGrow: 1 }}>
          {children}
        </Box>
      </Box>

      <Footer />
    </Box>
  );
}
