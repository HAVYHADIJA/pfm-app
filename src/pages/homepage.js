// src/pages/HomePage.js
import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
    const navigate = useNavigate();

    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            minHeight="100vh"
            bgcolor="#f5f5f5"
            textAlign="center"
            px={3}
        >
            <Typography variant="h3" gutterBottom>
                Welcome to the Student Finance App
            </Typography>
            <Typography variant="h6" color="textSecondary" gutterBottom>
                Take control of your finances, track your expenses, set budgets, and stay stress-free!
            </Typography>
            <Box mt={4}>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => navigate("/login")}
                    sx={{ mx: 2 }}
                >
                    Login
                </Button>
                <Button
                    variant="outlined"
                    color="primary"
                    onClick={() => navigate("/dashboard")}
                    sx={{ mx: 2 }}
                >
                    Explore as Guest
                </Button>
            </Box>
        </Box>
    );
};

export default HomePage;
