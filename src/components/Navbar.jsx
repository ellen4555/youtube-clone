import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";
import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  InputBase,
  IconButton,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Navbar = ({ searchTerm, setSearchTerm }) => {
  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "#0f0f0f",
        boxShadow: "none",
        borderBottom: "1px solid #303030",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>

        {/* Left */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <MenuIcon sx={{ color: "white", cursor: "pointer" }} />

          <Box
  sx={{
    display: "flex",
    alignItems: "center",
    gap: 1,
    cursor: "pointer",
  }}
>
  <SmartDisplayIcon
    sx={{
      color: "#FF0000",
      fontSize: 40,
    }}
  />

  <Typography
    sx={{
      color: "white",
      fontSize: "24px",
      fontWeight: "bold",
      fontFamily: "Roboto, sans-serif",
      letterSpacing: "-1px",
    }}
  >
    YouTube
  </Typography>
</Box>
        </Box>

        {/* Search */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            background: "#212121",
            borderRadius: "30px",
            width: "40%",
            px: 2,
          }}
        >
          <InputBase
  placeholder="Search"
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
  sx={{
    color: "white",
    flex: 1,
  }}
/>
          <IconButton>
            <SearchIcon sx={{ color: "white" }} />
          </IconButton>
        </Box>

        {/* Right */}
        <AccountCircleIcon sx={{ fontSize: 40, color: "white" }} />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;