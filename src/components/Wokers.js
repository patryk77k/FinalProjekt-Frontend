import { NavLink } from "react-router-dom";
export default function Workers() {
  return (
    <div>
      <nav>
        <NavLink to="/">-- Link to Home</NavLink>
        <br />
        <NavLink to="/workers/:id">Link to WorkerDetails --</NavLink>
      </nav>
    </div>
  );
}
