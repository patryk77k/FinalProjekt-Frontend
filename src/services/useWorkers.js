import { useState, useEffect } from "react";

export default function useWorkers() {
  const [backend, setBackend] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/workers")
      .then((res) => res.json())
      .then((data) => setBackend(data))
      .catch((err) => console.log(err));
  }, []);

  return backend;
}
