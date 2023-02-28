import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function Home() {
  const [backend, setBackend] = useState([]);
  const [selectHandwerker, setSelectHandwerker] = useState("");
  const [selectAddress, setSelectAddress] = useState("");
  const [selectPLZ, setSelectPLZ] = useState("");

  useEffect(() => {
    fetch("http://localhost:8080/workers")
      .then((res) => res.json())
      .then((data) => setBackend(data))
      .catch((err) => console.log(err));
  }, [selectAddress, selectHandwerker, selectPLZ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(
      `http://localhost:8080/workers?address=${selectAddress}&plz=${selectPLZ}&profession=${selectHandwerker}`
    )
      .then((res) => res.json())
      .then((data) => setBackend(data))
      .catch((err) => console.log(err));
  };

  return (
    <div className="app">
      <h2>Home</h2>
      <div className="navlink">
        <nav>
          <p>
            <NavLink to="login">Login</NavLink>
          </p>
          <p>
            <NavLink to="sign-up">SignUp</NavLink>
          </p>
          <p>
            <NavLink to="form">Form</NavLink>
          </p>
          <p>
            <NavLink to="about-us">AboutUs</NavLink>
          </p>
          <p>
            <NavLink to="contact">Contact</NavLink>
          </p>
        </nav>
      </div>
      <br />
      <div className="suchfeld">
        <form>
          <input
            type="text"
            placeholder="select a handwerker.."
            value={selectHandwerker}
            onChange={(e) => setSelectHandwerker(e.target.value)}
          />
          <input
            type="text"
            placeholder="select a address.."
            value={selectAddress}
            onChange={(e) => setSelectAddress(e.target.value)}
          />
          <input
            type="text"
            placeholder="select a PLZ.."
            value={selectPLZ}
            onChange={(e) => setSelectPLZ(e.target.value)}
          />

          <button onClick={handleSubmit}>Search</button>
        </form>
      </div>

      {backend.length &&
        backend.map((handwerker) => (
          <div key={handwerker._id}>
            <p>
              {handwerker.profession} {handwerker.first_name}{" "}
              {handwerker.last_name}, {handwerker.address} {handwerker.plz}
            </p>
          </div>
        ))}
    </div>
  );
}
