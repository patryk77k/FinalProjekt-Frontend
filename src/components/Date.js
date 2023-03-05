import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Login from "./Login";
import { Typography, Box } from "@mui/material";

export default function Date({ backend }) {
  const { id } = useParams();
  console.log(id);
  let thisHandwerker =
    backend.length && backend.find((handwerker) => handwerker._id === id);
  console.log("this handwerker", thisHandwerker);

  const [createTermin, setCreateTermin] = useState({
    gebuchte_termine: "",
  });

  const handleChange = (e) => {
    setCreateTermin({ ...createTermin, [e.target.name]: e.target.value });
  };

  const handleClick = (e) => {
    console.log(e.value);
    e.preventDefault();
    console.log("state", createTermin);

    axios
      .put(
        `https://finalprojekt-backend.onrender.com/workers/${id}`,
        createTermin
      )
      .then((res) => {
        console.log(res);
        //setCreateTermin({ gebuchte_termine: "" });
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Login />
      <Typography align="center" variant="h4" sx={{ fontWeight: 900 }}>
        <h2>Hier kannst du Termin vereinbaren</h2>
      </Typography>
      <Box align="center">
        <h3>{thisHandwerker.availibility}</h3>
        <form>
          <input
            name="gebuchte_termine"
            type="text"
            placeholder="choose a termin.."
            value={createTermin.gebuchte_termine}
            onChange={handleChange}
          />
          <button
            onClick={(e) => {
              handleClick(e);
            }}
          >
            Select a termin
          </button>
        </form>
      </Box>
    </div>
  );
}
