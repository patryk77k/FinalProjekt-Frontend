import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import AppBar from "./AppBar";
import axios from "axios";
import Photo from "./Photo";

export default function Home({ backend, form, setForm, setSearchResult }) {
  const navigate = useNavigate();
  // const [backend, setBackend] = useState([]);
  // const [selectHandwerker, setSelectHandwerker] = useState("");
  // const [selectAddress, setSelectAddress] = useState("");
  // const [selectPLZ, setSelectPLZ] = useState("");
  // const [listOfFriends, setListOfFriends] = useState([]);

  //SEARCH BAR

  // useEffect(() => {
  //   fetch("https://finalprojekt-backend.onrender.com/workers")
  //     .then((res) => res.json())
  //     .then((data) => setBackend(data))
  //     .catch((err) => console.log(err.message));
  // }, [selectAddress, selectHandwerker, selectPLZ]);

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
  //DELETE HANDWERKER
  // const deletePost = (id) => {
  //   axios
  //     .delete(`https://finalprojekt-backend.onrender.com/workers/${id}`)
  //     .then((res) => console.log(res))
  //     .catch((err) => console.log(err));
  //   window.location.reload();
  // };
  // //UPDATE HANDWERKER
  // const updatePost = (id) => {
  //   const first_name = prompt("Enter a new first_name:");
  //   const last_name = prompt("Enter a last_name:");
  //   const login = prompt("Enter a login:");
  //   const password = prompt("Enter a password:");
  //   const profession = prompt("Enter a profession:");
  //   const experience = prompt("Enter a experience:");
  //   const availibility = prompt("Enter a availibility:");
  //   const price = prompt("Enter a price:");
  //   const address = prompt("Enter a address:");
  //   const plz = prompt("Enter a plz:");

  //   axios
  //     .put(`https://finalprojekt-backend.onrender.com/workers/${id}`, {
  //       first_name: first_name,
  //       last_name: last_name,
  //       login: login,
  //       password: password,
  //       profession: profession,
  //       experience: experience,
  //       availibility: availibility,
  //       price: price,
  //       address: address,
  //       plz: plz,
  //     })
  //     .then(() => {
  //       setListOfFriends(
  //         listOfFriends.map((handwerker) => {
  //           return handwerker._id == id
  //             ? {
  //                 first_name: first_name,
  //                 last_name: last_name,
  //                 login: login,
  //                 password: password,
  //                 profession: profession,
  //                 experience: experience,
  //                 availibility: availibility,
  //                 price: price,
  //                 address: address,
  //                 plz: plz,
  //               }
  //             : handwerker;
  //         })
  //       );
  //     });
  //}
  return (
    <div className="app">
      <AppBar />

      <h2>Home</h2>
      <Photo />
      <div className="navlink">
        <nav>
          <p>
            <NavLink to="login">Login</NavLink>
          </p>
          <p>
            <NavLink to="sign-up">SignUp</NavLink>
          </p>
          <p>
            <NavLink to="profil">Profil</NavLink>
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
        <form onSubmit={handleSubmit}>
          <input
            name="selectHandwerker"
            type="text"
            placeholder="select a handwerker.."
            value={form.selectHandwerker}
            onChange={handleChange}
          />
          <input
            name="selectAddress"
            type="text"
            placeholder="select a address.."
            value={form.selectAddress}
            onChange={handleChange}
          />
          <input
            name="selectPLZ"
            type="text"
            placeholder="select a PLZ.."
            value={form.selectPLZ}
            onChange={handleChange}
          />

          <button>Search</button>
        </form>
      </div>

      {backend.length &&
        backend.map((handwerker) => (
          <div key={handwerker._id}>
            <p>
              <Link to={`http://localhost:3000/workers/${handwerker._id}`}>
                {handwerker.profession} {handwerker.first_name}{" "}
                {handwerker.last_name}, {handwerker.address} {handwerker.plz}
              </Link>
              {/* <button onClick={() => deletePost(handwerker._id)}>Delete</button>
              <button onClick={() => updatePost(handwerker._id)}>Update</button> */}
            </p>
          </div>
        ))}
    </div>
  );
}
