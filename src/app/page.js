// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, CssBaseline } from "@mui/material";
import Theme from "./styles/theme";
console.log(Theme);
import HomePage from "./pages/homepage"; // Import HomePage
import Login from "./components/Login"; // Import Login
import DashboardPage from "./pages/DashboardPage"; // Import DashboardPage

const App = () => (
    <ThemeProvider theme={Theme}>
        <CssBaseline />
        <Router>
            <Routes>
                {/* Define routes for pages */}
                <Route path="/" element={<HomePage />} /> {/* Homepage */}
                <Route path="/login" element={<Login />} /> {/* Login page */}
                <Route path="/dashboard" element={<DashboardPage />} /> {/* Dashboard */}
            </Routes>
        </Router>
    </ThemeProvider>
);

export default App;



