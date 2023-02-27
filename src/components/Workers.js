import { NavLink } from "react-router-dom";
export default function Workers() {
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
