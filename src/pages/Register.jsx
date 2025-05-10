import React from 'react';
import { Box, Typography } from '@mui/material';
import RegisterForm from '../components/RegisterForm';

function Register() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        mt: 4,
      }}
    >
      <Typography variant="h4" gutterBottom color='primary'>
        Registration Page
      </Typography>
      <RegisterForm />
    </Box>
  );
}

export default Register;