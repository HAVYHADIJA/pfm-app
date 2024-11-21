// src/components/ExpenseTracker.js
import React, { useState } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";

const ExpenseTracker = () => {
  const [expense, setExpense] = useState("");
  const [category, setCategory] = useState("");

  const handleAddExpense = () => {
    console.log("Adding Expense:", { expense, category });
    // Logic to add expense
  };

  return (
    <Box mt={4} px={4}>
      <Typography variant="h5" gutterBottom>
        Log Expense
      </Typography>
      <TextField
        label="Expense Amount"
        value={expense}
        onChange={(e) => setExpense(e.target.value)}
        margin="normal"
        fullWidth
      />
      <TextField
        label="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        margin="normal"
        fullWidth
      />
      <Button
        variant="contained"
        color="secondary"
        onClick={handleAddExpense}
        sx={{ mt: 2 }}
      >
        Add Expense
      </Button>
    </Box>
  );
};

export default ExpenseTracker;
