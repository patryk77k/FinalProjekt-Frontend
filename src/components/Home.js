import React from "react";
import { useNavigate } from "react-router-dom";
import Login from "./Login";
import Hero from "./Hero";
import { Box, styled } from "@mui/material";
import Footer from "./Footer";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

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
          <TextField
            id="outlined-basic"
            variant="outlined"
            disabled={false}
            size="md"
            name="selectHandwerker"
            type="text"
            placeholder="select a handwerker.."
            value={form.selectHandwerker}
            onChange={handleChange}
          />
          <TextField
            id="outlined-basic"
            name="selectAddress"
            size="md"
            variant="outlined"
            type="text"
            placeholder="select a address.."
            value={form.selectAddress}
            onChange={handleChange}
          />
          <TextField
            id="outlined-basic"
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
      <br />
      <br />
      <Footer />
    </div>
  );
}
