import { NavLink, Link } from "react-router-dom";

export default function Workers({ backend, searchResult }) {
  console.log(backend);
  return (
    <div>
      <h2>Select a Handwerker!</h2>
      {searchResult.length &&
        searchResult.map((handwerker) => (
          <div key={handwerker._id}>
            <p>
              <Link to={`http://localhost:3000/workers/${handwerker._id}`}>
                {handwerker.profession} {handwerker.first_name}{" "}
                {handwerker.last_name}, {handwerker.address} {handwerker.plz}
              </Link>
            </p>
          </div>
        ))}

      <nav>
        <NavLink to="/">Home</NavLink>
        <br />
        <NavLink to="/workers/:id">WorkerDetails</NavLink>
      </nav>
    </div>
  );
}
