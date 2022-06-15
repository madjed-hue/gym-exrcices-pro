import React from "react";
import { Link } from "react-router-dom";
import { Stack, IconButton } from "@mui/material";
import Logo from "../assets/images/logo.png";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const Navbar = ({ changeTheme, isDarkTheme }) => {
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      alignItems="center"
      sx={{
        gap: { sm: "123px", xs: "40px" },
        mt: { sm: "32px", xs: "20px" },
        justifyContent: "none",
      }}
      px="20px"
    >
      <Link to="/">
        <img
          src={Logo}
          alt="gym-logo"
          style={{ width: "70px", height: "70px", margin: "0px 20px" }}
        />
      </Link>
      <Stack
        direction="row"
        gap="40px"
        fontFamily="Alegreya"
        fontSize="24px"
        alignItems="flex-end"
      >
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#d74646ad",
            borderBottom: "3px solid #FF2625",
          }}
        >
          Home
        </Link>
        <a
          href="#exercises"
          style={{ textDecoration: "none", color: "#d74646" }}
        >
          Exercises
        </a>
        <IconButton sx={{ ml: 1 }} onClick={changeTheme} color="inherit">
          {isDarkTheme ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default Navbar;
