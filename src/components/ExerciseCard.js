import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const ExerciseCard = ({ exercise }) => {
  return (
    <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
      <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
      <Stack direction={"row"}>
        <Typography
          sx={{
            ml: "21px",
            color: "#fff",
            backgroundColor: "#ffa9a9",
            fontWeight: "bold",
            borderRadius: "20px",
            textTransform: "capitalize",
            cursor: "revert",
            p: "5px 10px",
          }}
        >
          {exercise.bodyPart}
        </Typography>
        <Typography
          sx={{
            ml: "21px",
            color: "#fff",
            backgroundColor: "#fcc757",
            fontSize: "14px",
            fontWeight: "bold",
            borderRadius: "20px",
            textTransform: "capitalize",
            cursor: "revert",
            p: "5px 10px",
          }}
        >
          {exercise.target}
        </Typography>
      </Stack>
      <Typography
        ml={"21px"}
        color="#000"
        fontWeight={"bold"}
        mt={"11px"}
        pb="10px"
        textTransform={"capitalize"}
        fontSize={"20px"}
      >
        <span style={{ color: "#ff2625" }}>#_</span> {exercise.name}
      </Typography>
    </Link>
  );
};

export default ExerciseCard;
