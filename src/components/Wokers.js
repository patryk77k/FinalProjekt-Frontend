import { NavLink } from "react-router-dom";
import useWorkers from "../services/useWorkers";

export default function Workers() {
  const workers = useWorkers();
  console.log(workers);
  return (
    <div>
      {workers.length
        ? workers.map((simpleWorker) => <p>{simpleWorker.first_name}</p>)
        : "...loading"}
      <nav>
        <NavLink to="/">-- Link to Home</NavLink>
        <br />
        <NavLink to="/workers/:id">Link to WorkerDetails --</NavLink>
      </nav>
    </div>
  );
}
