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
  }, []);
  console.log(selectPLZ);
  console.log(
    backend.filter((singleWorker) =>
      singleWorker.first_name.toLowerCase().includes(selectHandwerker)
    )
  );

  return (
    <div className="app">
      <h2>Home</h2>
      <div className="navlink">
        <nav>
          <NavLink to="login">Login</NavLink>
          <br />
          <NavLink to="sign-up">SignUp</NavLink>
          <br />
          <NavLink to="about-us">AboutUs</NavLink>
          <br />
          <NavLink to="contact">Contact</NavLink>
        </nav>
      </div>
      <br />
      <div className="suchfeld">
        <input
          type="text"
          placeholder="Select Handwerker"
          value={selectHandwerker}
          onChange={(e) => setSelectHandwerker(e.target.value)}
        ></input>
        <input
          type="text"
          placeholder="Select Address"
          value={selectAddress}
          onChange={(e) => setSelectAddress(e.target.value)}
        ></input>
        <input
          type="text"
          placeholder="Select PLZ"
          value={selectPLZ}
          onChange={(e) => setSelectPLZ(e.target.value)}
        ></input>
        <NavLink to="workers">
          <button>Suche Handwerker!</button>
        </NavLink>
      </div>

      {backend.length
        ? backend
            .filter((singleWorker) =>
              singleWorker.profession.toLowerCase().includes(selectHandwerker)
            )
            .map((singleWorker) => <p>{singleWorker.profession}</p>)
        : "...loading"}
      <br />
      {backend.length
        ? backend
            .filter((singleWorker) =>
              singleWorker.address.toLowerCase().includes(selectAddress)
            )
            .map((singleWorker) => <p>{singleWorker.address}</p>)
        : "...loading"}
      <br />
      {/* {backend.length
        ? backend
            .filter((singleWorker) => singleWorker.plz.includes(selectPLZ))
            .map((singleWorker) => <p>{singleWorker.plz}</p>)
        : "...loading"} */}
    </div>
  );
}
