import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  InputBase,
  IconButton,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";

const Navbar = ({ searchTerm, setSearchTerm, handleDrawerToggle }) => {
  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "#0f0f0f",
        boxShadow: "none",
        borderBottom: "1px solid #303030",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Left */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <IconButton
            onClick={handleDrawerToggle}
            sx={{
              color: "white",
              display: { xs: "block", sm: "none" },
            }}
          >
            <MenuIcon />
          </IconButton>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <SmartDisplayIcon
              sx={{
                color: "red",
                fontSize: 38,
              }}
            />

            <Typography
              sx={{
                fontSize: 24,
                fontWeight: "bold",
                color: "white",
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
            width: {
              xs: "45%",
              sm: "55%",
              md: "40%",
            },
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

          <SearchIcon sx={{ color: "white" }} />
        </Box>

        {/* Right */}
        <AccountCircleIcon
          sx={{
            color: "white",
            fontSize: 38,
          }}
        />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;