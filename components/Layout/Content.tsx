import React from "react";

const Content = () => {
  // render content based on ID...
  return (
    <div className="content">
      <div className="flex">
        <label>
          {" "}
          Name
          <input type="name" />
        </label>
        <p>Color</p>
      </div>
      <div className="flex">
        <label>
          {" "}
          Volume (m3)
          <input type="number" />
        </label>
        <label>
          {" "}
          Cost (USD per m3)
          <input type="number" />
        </label>
      </div>
      <div className="flex">
        <label>
          {" "}
          Delivery Date
          <input type="number" />
        </label>
      </div>
    </div>
  );
};

export default Content;
