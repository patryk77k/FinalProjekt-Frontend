import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
export default function Date({ backend }) {
  const { id } = useParams();
  console.log(id);
  let thisHandwerker =
    backend.length && backend.find((handwerker) => handwerker._id === id);
  console.log("this handwerker", thisHandwerker);

  return (
    <div>
      <h2>Vereinbare ein Termin</h2>
      <h3>
        <button>{thisHandwerker.availibility}</button>
      </h3>

      <nav>
        <Link to="/">Home</Link>
      </nav>
    </div>
  );
}
