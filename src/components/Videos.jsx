import React from "react";
import { Box } from "@mui/material";
import VideoCard from "./VideoCard";
import { demoVideos } from "../utils/constants";

const Videos = ({ searchTerm }) => {

  const filteredVideos = demoVideos.filter((video) =>
    video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    video.channel.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 3,
        justifyContent: "center",
      }}
    >
      {filteredVideos.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </Box>
  );
};

export default Videos;