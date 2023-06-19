import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Loader from "./Loader";
import HorizontalScrollbar from "./HorizontalScrollBar";

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  return (
    <Box sx={{ mt: { lg: "100px", xs: "0" } }}>
      <Typography textAlign={"center"} variant="h4" fontWeight={"bold"} mb={5}>
        Exercises That Target The Same Muscle Groupe
      </Typography>
      <Stack direction={"row"} sx={{ p: 2, position: "relative" }}>
        {targetMuscleExercises ? (
          <HorizontalScrollbar data={targetMuscleExercises} />
        ) : (
          <Loader />
        )}
      </Stack>
      <Typography
        textAlign={"center"}
        variant="h4"
        fontWeight={"bold"}
        mb={5}
        mt={20}
      >
        Exercises That Target The Same equipment Groupe
      </Typography>
      <Stack direction={"row"} sx={{ p: 2, position: "relative" }}>
        {equipmentExercises ? (
          <HorizontalScrollbar data={equipmentExercises} />
        ) : (
          <Loader />
        )}
      </Stack>
    </Box>
  );
};

export default SimilarExercises;
