import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function WorkerDetails({ backend }) {
  console.log(backend);
  const { id } = useParams();
  console.log(id);

  let thisHandwerker =
    backend.length && backend.find((handwerker) => handwerker._id === id);
  console.log("this handwerker", thisHandwerker);
  return (
    <div>
      <h2>Click to select a Termins</h2>
      <nav></nav>
      <div>
        {" "}
        <NavLink to={`http://localhost:3000/workers/${id}/date`}>
          {thisHandwerker.first_name}
        </NavLink>
      </div>
    </div>
  );
}
