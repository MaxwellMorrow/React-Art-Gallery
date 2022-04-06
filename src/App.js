import "./App.css";

import { useState, useEffect } from "react";
import Gallery from "./components/Gallery";
import ButtonBar from "./components/ButtonBar";
function App() {
  // Defining usestate here
  let [artId, setArtId] = useState(12720);
  let [data, setData] = useState({});

  // defining use effect here
  useEffect(() => {
    document.title = "Welcome to Artworld";
    // feeding in our artID into the fetch request to change data 
    fetch(
      `https://collectionapi.metmuseum.org/public/collection/v1/objects/${artId}`
    )
    // processing the fetch request response (Parsing the data, massaging the data)
      .then((response) => response.json())
      .then((resData) => setData(resData));
  }, 
  // this is the dependency array whatever we put in will cause the useeffect to re-render upon its change of state
  [artId]);

  // we pass this function to our ButtonBar.js as a prop 
  const handleIterate = (e) => {
    setArtId(artId + Number(e.target.value));
  };

  /* Return JSX down here... */
  return (
    <div className="App">
      <Gallery
      // this connects data from passing our props in from our fetch request make sure to pass (props) into Gallery.js
        objectImg={data.primaryImage}
        artist={data.artistDisplayName}
        title={data.title}
      />
      
      <ButtonBar 
      // this passes our handleiterate function into our ButtonBar.js so we can use it as a prop
      handleIterate={handleIterate} />
    </div>
  );
}

export default App;
