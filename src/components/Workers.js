import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import { Typography, Box, Stack } from "@mui/material";
import avatar from "../static/avatar.jpg";
import Login from "./Login";
import Map from "./Map";
import Footer from "./Footer";
export default function Workers({ searchResult }) {
  const [url, setUrl] = useState("http://localhost:3000");

  useEffect(() => {
    return () => {
      console.log(window.location)
      if (window.location.host !== "localhost:3000") {
        setUrl("https://finalprojekt-frontend.onrender.com");
      }
    };
  }, []);

  return (
    <div>
      <Login />
      <br />
      <Map />
      <br />
      <Typography align="center" variant="h3" sx={{ fontWeight: 900 }}>
        Hier kannst du dein Handweker auswählen
      </Typography>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        {searchResult.length &&
          searchResult.map((handwerker) => (
            <div key={handwerker._id}>
              <p>
                <Card variant="outlined" sx={{ width: 320 }}>
                  <Typography level="h2" fontSize="md" sx={{ mb: 0.5 }}>
                    <div>
                      {handwerker.first_name} {handwerker.last_name},{" "}
                      {handwerker.profession}
                    </div>
                    <div>
                      Ort: {handwerker.address}, {handwerker.plz}
                    </div>
                    <div>
                      Handwerker Erfahrung: {handwerker.experience} Jahre
                    </div>
                  </Typography>

                  <AspectRatio
                    minHeight="120px"
                    maxHeight="200px"
                    sx={{ my: 2 }}
                  >
                    <img src={avatar} loading="lazy" alt="avatar" />
                  </AspectRatio>
                  <Box sx={{ display: "flex" }}>
                    <div>
                      <Typography level="body2">
                        <div>Preis pro Std: {handwerker.price}€</div>
                      </Typography>
                      <Typography fontSize="lg" fontWeight="lg"></Typography>
                    </div>
                  </Box>

                  <Button
                    variant="contained"
                    size="sm"
                    sx={{ ml: "auto", fontWeight: 600 }}
                  >
                    {" "}
                    <Link to={`${url}/workers/${handwerker._id}/date`}>
                      Select!
                    </Link>
                  </Button>
                </Card>
              </p>
            </div>
          ))}
      </Stack>
      <Footer />
    </div>
  );
}
