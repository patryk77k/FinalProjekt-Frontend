import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Login from "./Login";
import { Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Date({ backend }) {
  const navigate = useNavigate();
  const { id } = useParams();
  let thisHandwerker =
    backend.length && backend.find((handwerker) => handwerker._id === id);
  console.log("this handwerker", thisHandwerker.availibility);

  const [createTermin, setCreateTermin] = useState([]);

  // const handleChange = (e) => {
  //   setCreateTermin({ ...createTermin, [e.target.name]: e.target.value });
  // };

  const handleClick = (e) => {
    console.log(e.value);
    e.preventDefault();
    setCreateTermin((pre) => [...pre, e.target.value]);
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
        {/* <h3>{thisHandwerker.availibility}</h3> */}
        <h3>
          {thisHandwerker?.availibility.map((e) => (
            <Link
              to={"/"}
              onClick={(e) => {
                // navigate("/confirmation");
                handleClick(e);
              }}
            >
              <p>{e}</p>
            </Link>
          ))}
        </h3>

        <form>
          {/* <input
            name="gebuchte_termine"
            type="text"
            placeholder="choose a termin.."
            value={createTermin.gebuchte_termine} */}
          {/* // onChange={handleChange} */}
        </form>
      </Box>
    </div>
  );
}
