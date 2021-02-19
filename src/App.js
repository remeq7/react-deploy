import React, { useState, useEffect } from "react";

import "./index.css";

const url = "https://course-api.com/react-tours-project";

function App() {
  const [person, setPerson] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    const response = await fetch(url);
    const data = await response.json();
    const item = data[2];
    setPerson(item);
    setLoading(false);
  }, []);

  fetch("https://course-api.com/react-tours-project")
    .then((response) => response.json())
    .then((data) => console.log(data));

  return (
    <div>{loading ? <div>Loading...</div> : <div>{person.name}</div>}</div>
  );
}

export default App;
