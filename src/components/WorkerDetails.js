import { NavLink } from "react-router-dom";
export default function WorkerDetails() {
  return (
    <div>
      <nav>
        <NavLink to="/workers/:id/date">Link to Date --</NavLink>
      </nav>
    </div>
  );
}
