import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import {
  Box,
  Drawer,
} from "@mui/material";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import VideoPlayer from "./components/VideoPlayer";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <BrowserRouter basename="/youtube-clone">
      <Navbar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleDrawerToggle={handleDrawerToggle}
      />

      <Box sx={{ display: "flex" }}>
        {/* Desktop Sidebar */}
        <Box
          sx={{
            display: {
              xs: "none",
              sm: "block",
            },
          }}
        >
          <Sidebar />
        </Box>

        {/* Mobile Drawer */}
        <Drawer
          open={mobileOpen}
          onClose={handleDrawerToggle}
          sx={{
            display: {
              xs: "block",
              sm: "none",
            },
            "& .MuiDrawer-paper": {
              width: 220,
              background: "#0f0f0f",
            },
          }}
        >
          <Sidebar />
        </Drawer>

        <Box
          sx={{
            flex: 1,
            p: 3,
          }}
        >
          <Routes>
            <Route
              path="/"
              element={<Feed searchTerm={searchTerm} />}
            />

            <Route
              path="/video/:id"
              element={<VideoPlayer />}
            />
          </Routes>
        </Box>
      </Box>
    </BrowserRouter>
  );
}

export default App;