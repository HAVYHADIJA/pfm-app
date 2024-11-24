"use client";
import React, { useState } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Logging in:", { email, password });
    // API Call to authenticate user
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" mt={5}>
      <Typography variant="h4" gutterBottom>
        Login
      </Typography>
      <TextField
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        margin="small"
        fullWidth
      />
      <TextField
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        margin="small"
        fullWidth
      />
      <Button variant="contained" color="primary" onClick={handleLogin} sx={{ mt: 2 }}>
        Login
      </Button>
    </Box>
  );
};

export default Login;
