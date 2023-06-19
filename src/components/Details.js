import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import BodyPartImage from "../assets/icons/body-part.png";
import TargetImage from "../assets/icons/target.png";
import EquipmentImage from "../assets/icons/equipment.png";

const Details = ({ exerciseDetails }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetails;

  const extraDetails = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];

  return (
    <Stack
      gap={"60px"}
      sx={{
        flexDirection: { lg: "row" },
        p: "20px",
        alignItems: "center",
        mt: "30px",
      }}
    >
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
      <Stack sx={{ gap: { lg: "35px", xs: "20px" } }}>
        <Typography
          variant="h3"
          fontWeight={"bold"}
          textTransform={"capitalize"}
        >
          {name}
        </Typography>
        <Typography variant="h6">
          Exercise keep you strong.
          <span style={{ fontWeight: "bold" }}>{name}</span>is one of the best
          exercises to target your{" "}
          <span style={{ fontWeight: "bold" }}>{target}</span>. it will help you
          to improve your mood and gain energy.
        </Typography>
        {extraDetails.map((item, idx) => (
          <Stack key={idx} direction={"row"} gap="24px" alignItems={"center"}>
            <Button
              sx={{
                backgroundColor: "#fff2db",
                borderRadius: "50%",
                width: "100px",
                height: "100px",
              }}
            >
              <img
                src={item.icon}
                alt={item.name}
                style={{ width: "50px", height: "50px" }}
              />
            </Button>
            <Typography textTransform={"capitalize"} variant="h5">
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Details;
