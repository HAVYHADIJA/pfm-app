// src/pages/DashboardPage.js
import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/footer";

const DashboardPage = () => {
    const navigate = useNavigate();

    return (
        <Box>
            <Header />
            <Box textAlign="center" mt={5}>
                <Typography variant="h4" gutterBottom>
                    Welcome to Your Dashboard
                </Typography>
                <Button
                    variant="contained"
                    color="primary"
                    sx={{ m: 1 }}
                    onClick={() => navigate("/expenses")}
                >
                    Manage Expenses
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    sx={{ m: 1 }}
                    onClick={() => navigate("/income")}
                >
                    Manage Income
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    sx={{ m: 1 }}
                    onClick={() => navigate("/budget")}
                >
                    Set Budget
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    sx={{ m: 1 }}
                    onClick={() => navigate("/reports")}
                >
                    View Reports
                </Button>
            </Box>
            <Footer />
        </Box>
    );
};

export default DashboardPage;
