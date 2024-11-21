// src/components/Budgeting.js
import React, { useState } from "react";
import { TextField, Button, Typography, Box, LinearProgress } from "@mui/material";

const Budgeting = () => {
  const [budget, setBudget] = useState("");
  const [spent, setSpent] = useState(0);

  const handleSetBudget = () => {
    console.log("Setting Budget:", budget);
    // Logic to set budget
  };

  return (
    <Box mt={4} px={4}>
      <Typography variant="h5" gutterBottom>
        Budget Management
      </Typography>
      <TextField
        label="Budget Amount"
        value={budget}
        onChange={(e) => setBudget(e.target.value)}
        margin="normal"
        fullWidth
      />
      <Button
        variant="contained"
        color="secondary"
        onClick={handleSetBudget}
        sx={{ mt: 2 }}
      >
        Set Budget
      </Button>

      <Typography variant="h6" mt={4}>
        Spending Progress
      </Typography>
      <LinearProgress
        variant="determinate"
        value={(spent / budget) * 100}
        sx={{ mt: 2 }}
      />
      <Typography mt={1}>
        {spent} of {budget} spent
      </Typography>
    </Box>
  );
};

export default Budgeting;
