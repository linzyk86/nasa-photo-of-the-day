import React from "react";





const Info = props =>{
    return(
        <div className = "container">
            <div>
                <img src = {props.photo}></img>
          </div>
          <div>
            <h1>{props.date}</h1>
          </div>
          <div>
            <h1>{props.title}</h1>
          </div>
          <div>
            <h2>{props.para}</h2>
          </div>
        </div>
    );
};

export default Info;