import { useEffect, useState } from "react";
import { NavLink, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Date from "./components/Date";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Workers from "./components/Wokers";
import WorkerDetails from "./components/WorkerDetails";

function App() {
  const [backend, setBackend] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/workers")
      .then((res) => res.json())
      .then((data) => setBackend(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      {backend.length
        ? backend.map((simpleWorker) => <p>{simpleWorker.first_name}</p>)
        : "...loading"}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/workers" element={<Workers />} />
        <Route path="/workers/:id" element={<WorkerDetails />} />
        <Route path="/workers/:id/date" element={<Date />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />

        <Route />
      </Routes>
    </div>
  );
}

export default App;
