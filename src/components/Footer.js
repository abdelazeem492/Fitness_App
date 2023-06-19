import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Logo from "../assets/images/Logo-1.png";

function Footer() {
  return (
    <Box mt={"80px"} bgcolor={"#fff3f3"}>
      <Stack gap={"20px"} alignItems={"center"} px={"40px"} pt={"24px"}>
        <img src={Logo} alt="logo" width={"200px"} height={"40px"} />
        <Typography pb={2}>
          Made With ❤️ by{" "}
          <a
            href="https://abdelazimhassan.com"
            target="_blank"
            rel={"noreferrer"}
            style={{
              color: "#ff2625",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            @Abdelazim Hassan
          </a>
        </Typography>
      </Stack>
    </Box>
  );
}

export default Footer;
