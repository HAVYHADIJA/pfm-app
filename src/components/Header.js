// src/components/Header.js
import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

const Header = () => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        Student Finance App
      </Typography>
      <Box>
        <Button color="inherit">Dashboard</Button>
        <Button color="inherit">Expenses</Button>
        <Button color="inherit">Income</Button>
        <Button color="inherit">Reports</Button>
        <Button color="inherit">Logout</Button>
      </Box>
    </Toolbar>
  </AppBar>
);

export default Header;
