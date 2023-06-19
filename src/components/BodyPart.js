import { Stack, Typography } from "@mui/material";
import React from "react";

function BodyPart({ item, setBodyPart, bodyPart }) {
  return (
    <Stack
      type="button"
      alignItems={"center"}
      justifyContent={"center"}
      className="bodyPart-card"
      sx={{
        borderTop: bodyPart === item ? "4px solid #FF2625" : "",
        backgroundColor: "#fff",
        borderBottomLeftRadius: "20px",
        width: "220px",
        height: "220px",
        cursor: "pointer",
        gap: "47px",
        textTransform: "capitalize",
      }}
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
      }}
    >
      <Typography fontSize={26} color={"#FF2625"} fontWeight={600}>
        {item}
      </Typography>
    </Stack>
  );
}

export default BodyPart;
