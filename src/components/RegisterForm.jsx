import React, { useState } from 'react';
import { Box, TextField, Button } from '@mui/material';

function RegisterForm() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords dont match");
      return;
    }
    // Logic for registration !!!!
    console.log('Registering with:', fullName, email, password);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ width: '100%', maxWidth: 400 }}>
      <TextField
        label="Full Name"
        fullWidth
        margin="normal"
        required
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
      />
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
      <TextField
        label="Confirm Password"
        type="password"
        fullWidth
        margin="normal"
        required
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
        Register
      </Button>
    </Box>
  );
}

export default RegisterForm;
