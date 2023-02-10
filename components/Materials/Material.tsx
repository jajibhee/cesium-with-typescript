import React from "react";
import { Materials } from "../../interfaces";

const Material = (props) => {
  return (
    // <div key={props?.id} className="material-content flex justify-center">
    //   <div className={`material-color ${props?.color}`}></div>
    //   <div className="material-content__child flex flex-col">
    //     <p>{props?.name}</p>
    //     <p>{props?.volume} (m3)</p>
    //   </div>
    // </div>
    <div key={props?.id} className="material-content">
      <div className={`material-color bg-yellow-500`}></div>
      <div className="material-content__child flex flex-col">
        <p>Sand</p>
        <p>101,223 (m3)</p>
      </div>
    </div>
  );
};

export default Material;
