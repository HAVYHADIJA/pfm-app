// src/components/Reports.js
import React from "react";
import { Box, Typography } from "@mui/material";
import { PieChart, Pie, Cell, Legend, Tooltip } from "recharts";

const data = [
  { name: "Rent", value: 500 },
  { name: "Groceries", value: 200 },
  { name: "Transport", value: 100 },
  { name: "Entertainment", value: 150 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const Reports = () => (
  <Box mt={4} px={4}>
    <Typography variant="h5" gutterBottom>
      Financial Reports
    </Typography>
    <PieChart width={400} height={400}>
      <Pie
        data={data}
        cx={200}
        cy={200}
        labelLine={false}
        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
        outerRadius={150}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  </Box>
);

export default Reports;
