import { useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Login from "./Login";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/material";
import Tischler from "../static/Tischler.jpg";


// CREATE NEW HANDWERKER

export default function Form() {
  const navigate = useNavigate();
  const [createWorker, setCreateWorker] = useState({
    first_name: "",
    last_name: "",
    login: "",
    password: "",
    profession: "",
    experience: "",
    availibility: "",
    price: "",
    address: "",
    plz: "",
    city: "",
  });

  const handleChange = (e) => {
    setCreateWorker({ ...createWorker, [e.target.name]: e.target.value });
  };

  const handleClick = (e) => {
    e.preventDefault();
    console.log("state", createWorker);

    axios
      .post("https://finalprojekt-backend.onrender.com/workers", createWorker)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    navigate("created");
  };

  return (
    <div>
      <Login />
      <Box
        sx={{
          backgroundImage: `url(${Tischler})`,
          backgroundRepeat: "repeat",
          backgroundColor: "black",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: 500,
          width: "100%",
          display: "flex",
          justifyContent: "left",
        }}
      ></Box>
      <nav>
        <form>
          <h2>
            <center>Create your Handwerker Profil</center>
          </h2>
          <nav
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              alignItems: "center",
              gap: 5,
            }}
          >
            <TextField
              name="first_name"
              type="text"
              id="outlined-basic"
              variant="outlined"
              disabled={false}
              size="md"
              placeholder="First Name"
              value={createWorker.first_name}
              onChange={handleChange}
            />
            <TextField
              name="last_name"
              type="text"
              placeholder="Last Name"
              value={createWorker.last_name}
              onChange={handleChange}
            />
            <TextField
              name="login"
              type="text"
              placeholder="Login"
              value={createWorker.login}
              onChange={handleChange}
            />
            <TextField
              name="password"
              type="text"
              placeholder="Password"
              value={createWorker.password}
              onChange={handleChange}
            />
            <TextField
              name="profession"
              type="text"
              placeholder="Profession"
              value={createWorker.profession}
              onChange={handleChange}
            />
            <TextField
              name="experience"
              type="text"
              placeholder="Experience"
              value={createWorker.experience}
              onChange={handleChange}
            />
            <TextField
              name="availibility"
              type="text"
              placeholder="Availibility"
              value={createWorker.availibility}
              onChange={handleChange}
            />
            <TextField
              name="price"
              type="text"
              placeholder="Price"
              value={createWorker.price}
              onChange={handleChange}
            />
            <TextField
              name="plz"
              type="text"
              placeholder="PLZ"
              value={createWorker.plz}
              onChange={handleChange}
            />
            <TextField
              name="address"
              type="text"
              placeholder="Address"
              value={createWorker.address}
              onChange={handleChange}
            />
            <TextField
              name="city"
              type="text"
              placeholder="Stadt"
              value={createWorker.city}
              onChange={handleChange}
            />
            <button onClick={handleClick} style={{ marginBottom: 5 }}>
              Create new!
            </button>
          </nav>
        </form>
      </nav>
      <Footer />
    </div>
  );
}
