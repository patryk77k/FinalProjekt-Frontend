import { NavLink } from "react-router-dom";
export default function WorkerDetails() {
  return (
    <div>
      <h2>Select Handwerker from a list</h2>
      <nav>
        <NavLink to="/workers/:id/date">Link to Date --</NavLink>
      </nav>
    </div>
  );
}
