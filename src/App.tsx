import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import { C1, C2, C3, C4, C5 } from "./Astradot";
import "./App.css";

function App() {
  const [data2, setData2] = useState(2);
  useEffect(() => {
    setInterval(() => {
      setData2(Math.round(Math.random() * 10) + 10);
    }, 3000);
  }, []);
  return (
    <div className="App">
      <C1 timeRange="" id={1} />
      <C2 timeRange="" id={data2} />
      <C3 timeRange="" id={3} />
      <C4 timeRange="" id={4} />
      <C5 timeRange="" id={5} />
    </div>
  );
}

export default App;
