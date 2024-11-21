// src/components/Notifications.js
import React from "react";
import { Box, Typography, List, ListItem, ListItemText, Alert } from "@mui/material";

const notifications = [
  { type: "warning", message: "You are close to exceeding your budget for this month." },
  { type: "info", message: "Your rent is due in 3 days." },
  { type: "success", message: "You’ve successfully logged your scholarship income!" },
];

const Notifications = () => (
  <Box mt={4} px={4}>
    <Typography variant="h5" gutterBottom>
      Notifications
    </Typography>
    <List>
      {notifications.map((notification, index) => (
        <ListItem key={index}>
          <Alert severity={notification.type}>{notification.message}</Alert>
        </ListItem>
      ))}
    </List>
  </Box>
);

export default Notifications;
