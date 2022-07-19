// create your App component here
import React, { useEffect, useState } from "react";

function App() {
  const [picture, setDogPic] = useState(null);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        setDogPic(data.message);
      });
  }, []);

  if (!dogPic) return <p>Loading...</p>;

  return <img src={picture} alt="A Random Dog" />;
}

export default App; 