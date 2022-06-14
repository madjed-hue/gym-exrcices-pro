import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import ExerciseDetail from "./pages/ExerciseDetail.js";
import Home from "./pages/Home.js";
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";
import "./App.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function App() {
  return (
    <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
