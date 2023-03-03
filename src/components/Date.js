import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
export default function Date({ backend }) {
  const { id } = useParams();
  console.log(id);
  let thisHandwerker =
    backend.length && backend.find((handwerker) => handwerker._id === id);
  console.log("this handwerker", thisHandwerker);

  const [createTermin, setCreateTermin] = useState({
    gebuchte_termine: "",
  });
  const handleChange = (e) => {
    setCreateTermin({ ...createTermin, [e.target.name]: e.target.value });
  };
  const handleClick = (e) => {
    e.preventDefault();
    console.log("state", createTermin);

    axios
      .post(`https://finalprojekt-backend.onrender.com/workers`, createTermin)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    console.log("termin created");
  };

  return (
    <div>
      <h2>Vereinbare ein Termin</h2>
      <h3>
        {/* <button onClick={handleChange}>{thisHandwerker.availibility}</button> */}
        {thisHandwerker.availibility}
      </h3>
      <form>
        <input
          name="gebuchte_termine"
          type="text"
          placeholder="choose a termin.."
          value={createTermin.gebuchte_termine}
          onChange={handleChange}
        />
        <button onClick={handleClick}>Select a termin</button>
      </form>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </div>
  );
}
