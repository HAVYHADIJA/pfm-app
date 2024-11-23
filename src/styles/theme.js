// src/styles/theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1E90FF", // Customize your primary color
    },
    secondary: {
      main: "#FF4500", // Customize your secondary color
    },
  },
  typography: {
    fontFamily: "Trebuchet MS",
  },
});

export default theme;
