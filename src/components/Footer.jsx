import React from 'react';
import { Box, Typography } from '@mui/material';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 2,
        textAlign: 'center',
        backgroundColor: 'slategray',
        color: 'white',
      }}
    >
      <Typography variant="body2">&copy; {new Date().getFullYear()}</Typography>
    </Box>
  );
}
