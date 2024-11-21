// src/components/IncomeTracker.js
import React, { useState } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";

const IncomeTracker = () => {
  const [income, setIncome] = useState("");
  const [source, setSource] = useState("");

  const handleAddIncome = () => {
    console.log("Adding Income:", { income, source });
    // Logic to add income
  };

  return (
    <Box mt={4} px={4}>
      <Typography variant="h5" gutterBottom>
        Log Income
      </Typography>
      <TextField
        label="Income Amount"
        value={income}
        onChange={(e) => setIncome(e.target.value)}
        margin="normal"
        fullWidth
      />
      <TextField
        label="Source"
        value={source}
        onChange={(e) => setSource(e.target.value)}
        margin="normal"
        fullWidth
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleAddIncome}
        sx={{ mt: 2 }}
      >
        Add Income
      </Button>
    </Box>
  );
};

export default IncomeTracker;
