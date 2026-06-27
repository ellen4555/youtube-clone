import React from "react";
import { Box, Typography } from "@mui/material";
import Videos from "./Videos";

const Feed = ({ searchTerm }) => {
  return (
    <Box p={2}>
      <Typography variant="h4" color="white" mb={3}>
        Recommended Videos
      </Typography>

      <Videos searchTerm={searchTerm} />
    </Box>
  );
};

export default Feed;