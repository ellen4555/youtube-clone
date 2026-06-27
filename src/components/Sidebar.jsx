import React from "react";
import { Box, Typography } from "@mui/material";

import HomeIcon from "@mui/icons-material/Home";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import MovieIcon from "@mui/icons-material/Movie";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import SchoolIcon from "@mui/icons-material/School";
import LiveTvIcon from "@mui/icons-material/LiveTv";

const categories = [
  { name: "Home", icon: <HomeIcon /> },
  { name: "Music", icon: <MusicNoteIcon /> },
  { name: "Gaming", icon: <SportsEsportsIcon /> },
  { name: "Movies", icon: <MovieIcon /> },
  { name: "Sports", icon: <SportsSoccerIcon /> },
  { name: "News", icon: <NewspaperIcon /> },
  { name: "Learning", icon: <SchoolIcon /> },
  { name: "Live", icon: <LiveTvIcon /> },
];

const Sidebar = () => {
  return (
    <Box
      sx={{
        width: "220px",
        backgroundColor: "#0f0f0f",
        color: "white",
        minHeight: "100vh",
        p: 2,
      }}
    >
      {categories.map((item) => (
        <Box
          key={item.name}
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            p: 1.5,
            borderRadius: 2,
            cursor: "pointer",
            "&:hover": {
              backgroundColor: "#272727",
            },
          }}
        >
          {item.icon}
          <Typography>{item.name}</Typography>
        </Box>
      ))}
    </Box>
  );
};

export default Sidebar;