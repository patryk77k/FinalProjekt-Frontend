import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Login from "./Login";
import { Hero } from "./Hero";
import { Box, styled, Button } from "@mui/material";
import Input from "@mui/joy/Input";

export default function Home({ form, setForm, setSearchResult }) {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(
      `http://localhost:8080/workers?address=${form.selectAddress}&plz=${form.selectPLZ}&profession=${form.selectHandwerker}`
    )
      .then((res) => res.json())
      .then((data) => {
        setSearchResult(data);
        navigate("/workers");
      })

      .catch((err) => console.log(err));
  };
  const handleChange = (e) => {
    setForm((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const StyledBox = styled(Box)({
    display: "flex",
    flexDirection: "rows",
    justifyContent: "center",
    gap: 20,
  });

  return (
    <div className="app">
      <Login />
      <Hero />

      <form onSubmit={handleSubmit}>
        <StyledBox pt={6}>
          <Input
            color="neutral"
            disabled={false}
            size="md"
            variant="outlined"
            name="selectHandwerker"
            type="text"
            placeholder="select a handwerker.."
            value={form.selectHandwerker}
            onChange={handleChange}
          />
          <Input
            name="selectAddress"
            color="neutral"
            disabled={false}
            size="md"
            variant="outlined"
            type="text"
            placeholder="select a address.."
            value={form.selectAddress}
            onChange={handleChange}
          />
          <Input
            color="neutral"
            disabled={false}
            size="md"
            variant="outlined"
            name="selectPLZ"
            type="text"
            placeholder="select a PLZ.."
            value={form.selectPLZ}
            onChange={handleChange}
          />
        </StyledBox>
        <Box align="center" pt={6}>
          <button>Search</button>
        </Box>
      </form>
    </div>
  );
}
