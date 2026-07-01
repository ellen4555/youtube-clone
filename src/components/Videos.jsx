import React, { useEffect, useState } from "react";
import { Box, CircularProgress, Typography } from "@mui/material";
import VideoCard from "./VideoCard";
import API from "../services/api";

const Videos = ({ searchTerm }) => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await API.get("/videos");
        setVideos(response.data);
      } catch (error) {
        console.error("Error fetching videos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  const filteredVideos = videos.filter(
    (video) =>
      video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      video.channel.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: 5,
        }}
      >
        <CircularProgress color="error" />
      </Box>
    );
  }

  if (filteredVideos.length === 0) {
    return (
      <Typography
        color="white"
        textAlign="center"
        mt={5}
      >
        No videos found.
      </Typography>
    );
  }

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