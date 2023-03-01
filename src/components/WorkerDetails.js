import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function WorkerDetails({ backend }) {
  console.log(backend);
  const { id } = useParams();

  let thisHandwerker =
    backend.length && backend.find((handwerker) => handwerker._id === id);
  console.log("this handwerker", thisHandwerker);
  return (
    <div>
      <h2>Select Handwerker from a list</h2>
      <nav>
        <NavLink to="/workers/:id/date">Link to Date --</NavLink>
      </nav>
      <div>{thisHandwerker.first_name}</div>
    </div>
  );
}
