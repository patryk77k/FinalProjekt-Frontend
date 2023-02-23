import { useEffect, useState } from "react";

function App() {
  const [backend, setBackend] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:8080/workers")
  //     .then((res) => res.json())
  //     .then((data) => setBackend(data))
  //     .catch((err) => console.log(err));
  // }, []);

  return (
    <div className="App">
      {/* {backend.length
        ? backend.map((simpleWorker) => <p>{simpleWorker.first_name}</p>)
        : "...loading"} */}
    </div>
  );
}

export default App;
