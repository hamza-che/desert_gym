import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
// Images
import Logo from "../assets/images/Logo.png";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      px="20px"
      sx={{
        pt: { sm: "2rem", xs: "2.2rem" },
        gap: { sm: "122px", xs: "40px" },
      }}
    >
      <Link to="/">
        <img
          src={Logo}
          alt="Logo"
          style={{ width: "48px", height: "48px", margin: "0 20px" }}
        />
      </Link>
      <Stack direction="row" gap="2.5rem" alignItems="center" fontSize="1.5rem">
        <Link to="/" style={{ borderBottom: "2px solid #ff2625" }}>
          Home
        </Link>
        <a href="#exrecises">Exercises</a>
      </Stack>
    </Stack>
  );
};

export default Navbar;
