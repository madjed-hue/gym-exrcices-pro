import { Route, Routes } from "react-router-dom";
import { Box, CssBaseline } from "@mui/material";
import ExerciseDetail from "./pages/ExerciseDetail.js";
import Home from "./pages/Home.js";
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";
import "./App.css";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
import { createContext, useState } from "react";

const light = {
  palette: {
    mode: "light",
  },
};

const dark = {
  palette: {
    mode: "dark",
  },
};

const ColorModeContext = createContext({ toggleColorMode: () => {} });

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const changeTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <ThemeProvider theme={isDarkTheme ? createTheme(dark) : createTheme(light)}>
      <CssBaseline />
      <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
        <Navbar changeTheme={changeTheme} isDarkTheme={isDarkTheme} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exercise/:id" element={<ExerciseDetail />} />
        </Routes>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
