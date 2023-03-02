import * as React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

export default function AppBar() {
  return (
    <div>
      <Typography
        align="center"
        variant="h1"
        sx={{
          background: "red",
          color: "white",
          fontSize: "12px"
        }}
      >
        h1.Heading
      </Typography>
    </div>
  );
}
