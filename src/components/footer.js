// src/components/Footer.js
import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => (
  <Box
    component="footer"
    py={2}
    textAlign="center"
    bgcolor="#f8f8f8"
    position="static"
    mt={4}
  >
    <Typography variant="body2" color="textSecondary">
      © 2024 Student Finance App. All rights reserved.
    </Typography>
  </Box>
);

export default Footer;
