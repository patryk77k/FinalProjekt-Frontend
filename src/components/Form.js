import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

export default function Form() {
  const [createWorker, setCreateWorker] = useState("");
  const [backend, setBackend] = useState({
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
  });
  //   useEffect(() => {
  //     fetch("http://localhost:8080/workers")
  //       .then((res) => res.json())
  //       .then((data) => console.log(data))
  //       .catch((err) => console.log(err));
  //   }, []);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCreateWorker((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleClick = (e) => {
    e.preventDefault();

    axios
      .post("/workers", createWorker)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
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
          v<button onClick={handleClick}>Create new</button>
        </form>
      </nav>
    </dev>
  );
}
