import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { Box } from "@mui/material";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import VideoPlayer from "./components/VideoPlayer";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <BrowserRouter basename="/youtube-clone">
      <Navbar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <Box sx={{ display: "flex" }}>
        <Sidebar />

        <Box sx={{ flex: 1, p: 3 }}>
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