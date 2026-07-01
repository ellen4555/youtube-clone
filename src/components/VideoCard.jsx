import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const VideoCard = ({ video }) => {
  console.log(video);
  return (
    <Card
      component={Link}
      to={`/video/${video.id}`}
      sx={{
        width: 320,
        textDecoration: "none",
        backgroundColor: "#181818",
        color: "white",
        borderRadius: 3,
        transition: "0.3s",
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

        <Typography color="#aaa">
          {video.channel}
        </Typography>

        <Typography color="#aaa" fontSize={13}>
          {video.views} • {video.published}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default VideoCard;