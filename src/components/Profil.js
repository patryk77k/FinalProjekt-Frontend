import { useState} from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
    <dev>
      <nav>
        <NavLink to="/">Home</NavLink>
        <form>
          <input
            name="first_name"
            type="text"
            placeholder="first name"
            value={createWorker.first_name}
            onChange={handleChange}
          />
          <input
            name="last_name"
            type="text"
            placeholder="last name"
            value={createWorker.last_name}
            onChange={handleChange}
          />
          <input
            name="login"
            type="text"
            placeholder="login"
            value={createWorker.login}
            onChange={handleChange}
          />
          <input
            name="password"
            type="text"
            placeholder="password"
            value={createWorker.password}
            onChange={handleChange}
          />
          <input
            name="profession"
            type="text"
            placeholder="profession"
            value={createWorker.profession}
            onChange={handleChange}
          />
          <input
            name="experience"
            type="text"
            placeholder="experience"
            value={createWorker.experience}
            onChange={handleChange}
          />
          <input
            name="availibility"
            type="text"
            placeholder="availibility"
            value={createWorker.availibility}
            onChange={handleChange}
          />
          <input
            name="price"
            type="text"
            placeholder="price"
            value={createWorker.price}
            onChange={handleChange}
          />
          <input
            name="plz"
            type="text"
            placeholder="plz"
            value={createWorker.plz}
            onChange={handleChange}
          />
          <input
            name="address"
            type="text"
            placeholder="address"
            value={createWorker.address}
            onChange={handleChange}
          />
          <input
            name="city"
            type="text"
            placeholder="city"
            value={createWorker.city}
            onChange={handleChange}
          />
          <button onClick={handleClick}>Create new</button>
        </form>
      </nav>
    </dev>
  );
}
