import { useState } from "react";
import Feed from "./components/Feed";
import { BrowserRouter } from "react-router-dom";
import { Box } from "@mui/material";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

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
          <Feed searchTerm={searchTerm} />
        </Box>
      </Box>
    </BrowserRouter>
  );
}

export default App;