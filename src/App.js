import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Date from "./components/Date";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Profil from "./components/Profil";
import Workers from "./components/Workers";
import WorkerDetails from "./components/WorkerDetails";
import Created from "./components/Created";
import { useNavigate } from "react-router-dom";

function App() {
  const [backend, setBackend] = useState([]);
  const [selectHandwerker, setSelectHandwerker] = useState("");
  const [selectAddress, setSelectAddress] = useState("");
  const [selectPLZ, setSelectPLZ] = useState("");

  useEffect(() => {
    fetch("https://finalprojekt-backend.onrender.com/workers")
      .then((res) => res.json())
      .then((data) => setBackend(data))
      .catch((err) => console.log(err.message));
  }, [selectAddress, selectHandwerker, selectPLZ]);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(
      `http://localhost:8080/workers?address=${selectAddress}&plz=${selectPLZ}&profession=${selectHandwerker}`
    )
      .then((res) => res.json())
      .then((data) => setBackend(data))
      .catch((err) => console.log(err));
    
  };
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home backend={backend} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/profil/created" element={<Created />} />
        <Route path="/workers" element={<Workers backend={backend} />} />
        <Route
          path="/workers/:id"
          element={<WorkerDetails backend={backend} />}
        />
        <Route path="/workers/:id/date" element={<Date />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />

        <Route />
      </Routes>
    </div>
  );
}

export default App;
