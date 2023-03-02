import React from "react";
import Box from "@mui/material/Box";
import Image from "./img/Tischler.jpg";

export default function Photo() {
  return (
    <Box
      component="img"
      sx={{
        height: 600,
        width: "100%",
        // maxHeight: { xs: 233, md: 167 },
        // maxWidth: { xs: 600, md: 800 },
      }}
      alt="The house from the offer."
      src="https://www.igmetall-nrw.de/fileadmin/user_upload/Tischler.jpg"
    />
  );
}
