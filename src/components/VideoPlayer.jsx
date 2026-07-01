import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Box, Typography } from "@mui/material";
import API from "../services/api";

const VideoPlayer = () => {
  const { id } = useParams();
  const [video, setVideo] = useState(null);

  useEffect(() => {
    API.get(`/videos/${id}`)
      .then((res) => setVideo(res.data))
      .catch(console.error);
  }, [id]);

  if (!video) {
    return (
      <Typography color="white" p={3}>
        Loading...
      </Typography>
    );
  }

  return (
    <Box
      sx={{
        p: { xs: 1, sm: 2, md: 3 },
        maxWidth: "1200px",
        mx: "auto",
      }}
    >
      <Box
        sx={{
          position: "relative",
          paddingTop: "56.25%",
          borderRadius: 2,
          overflow: "hidden",
        }}
      >
        <ReactPlayer
          url={video.videoUrl}
          controls
          width="100%"
          height="100%"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
          }}
        />
      </Box>

      <Typography
        variant="h5"
        mt={3}
        color="white"
        fontWeight="bold"
      >
        {video.title}
      </Typography>

      <Typography mt={1} color="#AAAAAA">
        {video.channel}
      </Typography>

      <Typography color="#AAAAAA">
        {video.views} • {video.published}
      </Typography>
    </Box>
  );
};

export default VideoPlayer;