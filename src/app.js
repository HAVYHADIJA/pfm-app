// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./styles/theme";
import HomePage from "./pages/homepage";
import Login from "./components/Login";
import DashboardPage from "./pages/DashboardPage";

const App = () => (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/" element={<Login />} />
                <Route path="/dashboard" element={<DashboardPage />} />
            </Routes>
        </Router>
    </ThemeProvider>
);

export default App;
