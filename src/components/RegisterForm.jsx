import React, { useState } from "react";
import { Box, TextField, Button, Alert } from "@mui/material";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

export default function RegisterForm() {
  const [fullName, setFullName]           = useState("");
  const [email, setEmail]                 = useState("");
  const [password, setPassword]           = useState("");
  const [confirmPassword, setConfirmPass] = useState("");
  const [error, setError]                 = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Hasła nie są takie same");
      return;
    }

    try {
      const cred = await createUserWithEmailAndPassword(auth, email, password);

      // 👉 устанавливаем displayName
      await updateProfile(cred.user, { displayName: fullName });
      await auth.currentUser.getIdToken(true);

      // 🔁 обновляем текущего пользователя, чтобы в Header появилось имя
      await auth.currentUser.reload();

      alert("Rejestracja przebiegła pomyślnie!");
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ width: "100%", maxWidth: 400, mx: "auto", mt: 4 }}>
      {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}

      <TextField
        label="Pełne imię"
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
        label="Hasło"
        type="password"
        fullWidth
        margin="normal"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <TextField
        label="Potwierdź hasło"
        type="password"
        fullWidth
        margin="normal"
        required
        value={confirmPassword}
        onChange={(e) => setConfirmPass(e.target.value)}
      />

      <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
        Zarejestruj się
      </Button>
    </Box>
  );
}
