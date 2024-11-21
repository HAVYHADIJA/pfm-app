// src/components/Dashboard.js
import React from "react";
import { Box, Typography, Grid, Card, CardContent } from "@mui/material";

const stats = [
  { label: "Total Income", value: "$1500" },
  { label: "Total Expenses", value: "$800" },
  { label: "Remaining Budget", value: "$700" },
];

const Dashboard = () => {
  return (
    <Box mt={4} px={4}>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <Grid container spacing={3}>
        {stats.map((stat) => (
          <Grid item xs={12} sm={4} key={stat.label}>
            <Card>
              <CardContent>
                <Typography variant="h6">{stat.label}</Typography>
                <Typography variant="h5" color="primary">
                  {stat.value}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Dashboard;