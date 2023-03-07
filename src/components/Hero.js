import React from "react";
import { Box, Typography } from "@mui/material";
import Tischler from "../static/Tischler.jpg";

const Hero = () => {
  return (
    <Box>
      <Typography align="center" variant="h3" pt={5} sx={{ fontWeight: 900 }}>
        Handwerker<b style={{ color: "red" }}>App</b>
      </Typography>
      <Typography
        align="center"
        variant="body1"
        pb={5}
        sx={{ fontWeight: 100 }}
      >
        Erleichterung für deinen Alltag!
      </Typography>
      <Box
        sx={{
          backgroundImage: `url(${Tischler})`,
          backgroundRepeat: "no-repeat",
          backgroundColor: "black",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: 700,
          width: "100%",
          display: "flex",
          justifyContent: "left",
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", sm: "50%", md: "40%" },
            padding: { xs: 3, sm: 2, md: 20 },
          }}
        >
          <Box sx={{ background: "white", opacity: "0.9" }}>
            <Typography variant={"h5"} color="tomato" align="center" pt={8}>
              
            </Typography>
            <Typography variant="body1" align="center">
              Du kannst es selbst aufbauen.
            </Typography>
            <Typography variant="h4" color="tomato" align="center" pb={8}>
              Aber du musst nicht.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
