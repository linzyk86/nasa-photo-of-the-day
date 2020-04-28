import React, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios";





function App() {
const [pic, setPic] = useState([]);

axios.get("https://api.nasa.gov/planetary/apod?api_key=Hy7B5wdzR0118ZD3T5r5rXNNDkqb0N0zfLuUQKSp")
  .then(response => {
    console.log(response);
    setPic(response.data.url);
  })
  .catch(response => {
    console.log( "error");
  })

  return (
    <div className="App">
      <p>
        <div>
          <img src = {pic}></img>


        </div>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
