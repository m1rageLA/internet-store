import React, { useState } from 'react';
import { Box, TextField, Button } from '@mui/material';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Додайте логіку логування, наприклад, виклик API
    console.log('Logging in with:', email, password);
  };

  return (
    <Box component="form" onSubmit={handleLogin} sx={{ width: '100%', maxWidth: 400 }}>
      <TextField
        label="Email"
        type="email"
        fullWidth
        margin="normal"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        label="Password"
        type="password"
        fullWidth
        margin="normal"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
        Log In
      </Button>
    </Box>
  );
}

export default LoginForm;
// This code defines a simple login form using React and Material-UI.