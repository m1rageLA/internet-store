import React from 'react';
import { Box, Typography } from '@mui/material';
import LoginForm from '../components/LoginForm';

function Login() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        mt: 4,
      }}
    >
      <Typography variant="h4" gutterBottom>
        Login Page
      </Typography>
      <LoginForm />
    </Box>
  );
}

export default Login;
