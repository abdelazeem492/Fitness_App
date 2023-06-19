import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import Details from "../components/Details";
import ExerciseVideos from "../components/ExerciseVideos";
import SimilarExercises from "../components/SimilarExercises";
import { useParams } from "react-router-dom";
import {
  fetchData,
  exercisesOptions,
  youtubeOptions,
} from "../utils/fetchData";

const ExerciseDetails = () => {
  const [exerciseDetails, setExerciseDetails] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const fetchExercisesData = async () => {
      const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";
      const youtubeSearchUrl =
        "https://youtube-search-and-download.p.rapidapi.com";

      const exerciseDetailsData = await fetchData(
        `${exerciseDbUrl}/exercises/exercise/${id}`,
        exercisesOptions
      );
      setExerciseDetails(exerciseDetailsData);

      const exerciseVideosData = await fetchData(
        `${youtubeSearchUrl}/search?query=${
          exerciseDetailsData.name + " exercise"
        }`,
        youtubeOptions
      );
      setExerciseVideos(exerciseVideosData.contents);

      const targetMuscleExercisesData = await fetchData(
        `${exerciseDbUrl}/exercises/target/${exerciseDetailsData.target}`,
        exercisesOptions
      );
      setTargetMuscleExercises(targetMuscleExercisesData);

      const equipmentExercisesData = await fetchData(
        `${exerciseDbUrl}/exercises/equipment/${exerciseDetailsData.equipment}`,
        exercisesOptions
      );
      setEquipmentExercises(equipmentExercisesData);
    };
    fetchExercisesData();
  }, [id]);

  return (
    <Box>
      <Details exerciseDetails={exerciseDetails} />
      <ExerciseVideos
        exerciseVideos={exerciseVideos}
        name={exerciseDetails.name}
      />
      <SimilarExercises
        targetMuscleExercises={targetMuscleExercises}
        equipmentExercises={equipmentExercises}
      />
    </Box>
  );
};

export default ExerciseDetails;
