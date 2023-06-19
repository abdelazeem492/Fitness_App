import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const ExerciseVideos = ({ exerciseVideos, name }) => {
  return (
    <Box sx={{ mt: { lg: "150px", xs: "20px" } }} p={"30px"}>
      <Typography
        variant="h4"
        fontWeight={"bold"}
        mb={"33px"}
        textAlign={"center"}
        width={"90%"}
        mx={"auto"}
      >
        Watch{" "}
        <span style={{ color: "#ff2625", textTransform: "capitalize" }}>
          {name}
        </span>{" "}
        Exercise Videos
      </Typography>
      <Stack
        mt={"80px"}
        justifyContent={"center"}
        flexWrap={"wrap"}
        alignItems={"center"}
        sx={{
          flexDirection: { lg: "row", md: "row" },
          gap: { lg: "80px", xs: "40px" },
        }}
      >
        {exerciseVideos?.slice(0, 6).map((exerciseVideo, idx) => (
          <a
            key={idx}
            href={`https://www.youtube.com/watch?v=${exerciseVideo.video.videoId}`}
            target="_blank"
            rel="noreferrer"
            className="exercise-video"
          >
            <img
              width={"100%"}
              src={exerciseVideo.video.thumbnails[0].url}
              alt={exerciseVideo.video.title}
            />
            <Typography
              lineHeight={1.2}
              variant="h6"
              px={"10px"}
              color={"#000"}
            >
              {exerciseVideo.video.title.length < 60
                ? exerciseVideo.video.title
                : exerciseVideo.video.title.slice(0, 50) + "..."}{" "}
            </Typography>
            <Typography px={"10px"} color={"#ff2625"}>
              {exerciseVideo.video.channelName.length < 60
                ? exerciseVideo.video.channelName
                : exerciseVideo.video.channelName.slice(0, 50) + "..."}{" "}
            </Typography>
          </a>
        ))}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;
