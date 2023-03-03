import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Login from "./Login";
import { Hero } from "./Hero";

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

  return (
    <div className="app">
      <Login />
      <Hero />

      <h2>Home</h2>

      <div className="navlink">
        <nav></nav>
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
    </div>
  );
}
