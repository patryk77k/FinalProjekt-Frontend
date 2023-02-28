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

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/profil/created" element={<Created />} />
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
