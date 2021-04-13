import React, { useState, useEffect } from "react";
import "./App.css";
import Card from "./components/Card.js";
import axios from "axios";

function App() {
  return (
    <div className="App">
      <div>
        <Card />
      </div>
    </div>
  );
}

export default App;
