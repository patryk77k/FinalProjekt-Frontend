import React from "react";
import { Box, Typography } from "@mui/material";
import TischlerImage from "../static/Tischler.jpg";

export const Hero = () => {
  return (
    <Box>
      <Typography align="center" variant="h3" sx={{ fontWeight: 900 }}>
        Handwerker<b style={{ color: "red" }}>App</b>
      </Typography>
      <Typography align="center" variant="body2" sx={{ fontWeight: 100 }}>
        Blablablabla
      </Typography>
      <Box
        sx={{
          backgroundImage: `url(${TischlerImage})`,
          backgroundRepeat: "no-repeat",
          backgroundColor: "black",
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: 600,
          width: "100%",
        }}
      >
        <Box sx={{ background: "white", opacity: "0.8" }}>
          <Typography variant="h6" color="tomato" align="center" pt={6}>
            Lorem ipsum Lorem ipsum
          </Typography>
          <Typography variant="h4" color="primary" align="center">
            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
          </Typography>
          <Typography variant="body1" color="primary" align="center" pb={6}>
            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
