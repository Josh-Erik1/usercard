import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);

  const [users, setUsers] = useState([]);

  const fetchUserData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      });
  };

  return (
    <div className="App bg-slate-200 flex items-center justify-center p-10">
      <Card />
    </div>
  );
}

export default App;
