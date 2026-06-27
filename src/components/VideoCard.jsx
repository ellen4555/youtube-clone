import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";

const VideoCard = ({ video }) => {
  return (
    <Card
      sx={{
        width: 320,
        backgroundColor: "#181818",
        color: "white",
        borderRadius: 3,
        boxShadow: "none",
        transition: "0.3s",
        cursor: "pointer",
        "&:hover": {
          transform: "scale(1.03)",
        },
      }}
    >
      <CardMedia
        component="img"
        height="180"
        image={video.thumbnail}
        alt={video.title}
      />

      <CardContent>
        <Typography
          variant="subtitle1"
          fontWeight="bold"
          sx={{
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {video.title}
        </Typography>

        <Typography
          variant="body2"
          sx={{
            color: "#AAAAAA",
            mt: 1,
          }}
        >
          {video.channel}
        </Typography>

        <Typography
          variant="body2"
          sx={{
            color: "#AAAAAA",
            fontSize: "13px",
          }}
        >
          {video.views} • {video.published}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default VideoCard;