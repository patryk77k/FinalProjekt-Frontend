import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <nav>
        <NavLink to="/workers">Link to AllWorkers --</NavLink>
        <br />
        <NavLink to="/login">Login</NavLink>
        <br />
        <NavLink to="/contact">Contact</NavLink>
        <br />
        <NavLink to="/about-us">AboutUs</NavLink>
      </nav>
    </div>
  );
}
