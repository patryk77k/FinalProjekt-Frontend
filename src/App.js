import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Date from "./components/Date";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Profil from "./components/Profil";
import Workers from "./components/Workers";
import Created from "./components/Created";
import Confirmation from "./components/Confirmation";

function App() {
  const [backend, setBackend] = useState([]);
  const [form, setForm] = useState({
    selectHandwerker: "",
    selectAddress: "",
    selectPLZ: "",
  });
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    fetch("https://finalprojekt-backend.onrender.com/workers")
      .then((res) => res.json())
      .then((data) => setBackend(data))
      .catch((err) => console.log(err.message));
  }, []);

  const navigate = useNavigate();

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Home
              backend={backend}
              form={form}
              setForm={setForm}
              setSearchResult={setSearchResult}
            />
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/profil/created" element={<Created />} />
        <Route
          path="/workers"
          element={<Workers backend={backend} searchResult={searchResult} />}
        />

        <Route
          path="/workers/:id/date"
          element={<Date backend={backend} searchResult={searchResult} />}
        />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/confirmation" element={<Confirmation />} />

        <Route />
      </Routes>
    </div>
  );
}

export default App;
