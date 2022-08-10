import React from "react";
import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
// CSS
import "./App.css";
// Components
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import ExerciseDetail from "./pages/ExerciseDetail";

const App = () => {
  return (
    <Box width="400px" m="auto" sx={{ width: { xl: "1488px" } }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exrecise/:id" element={<ExerciseDetail />} />
      </Routes>
      <Footer />
    </Box>
  );
};

export default App;
