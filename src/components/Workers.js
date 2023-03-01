import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Workers({ handwerker }) {
  console.log(handwerker);
  return (
    <div>
      <h2>Select a Handwerker!</h2>

      <nav>
        <NavLink to="/">Home</NavLink>
        <br />
        <NavLink to="/workers/:id">WorkerDetails</NavLink>
      </nav>
    </div>
  );
}
