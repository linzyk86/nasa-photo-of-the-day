import React, { useState, useEffect } from "react";
import axios from "axios";
import Info from "./Info.js";

export default function Card() {
  const [pic, setPic] = useState([]);
  const [title, setTitle] = useState([]);
  const [para, setPara] = useState([]);
  const [date, setDate] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=95KYxZgmR5wqHqQsTfGiRnt4kmRpgfDetDl0PLE1"
      )
      .then((response) => {
        console.log(response);
        setPic(response.data.url);
        setTitle(response.data.title);
        setPara(response.data.explanation);
        setDate(response.data.date);
      })
      .catch((response) => {
        console.log("error");
      });
  }, []);

  return <Info photo={pic} date={date} title={title} para={para} />;
}
