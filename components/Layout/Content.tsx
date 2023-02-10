import React from "react";

const Content = () => {
  // render content based on ID...
  return (
    <div className="content-materials">
      <div className="label-input">
        <div className="flex flex-col">
          <label>Name</label>
          <input type="name" />
        </div>
        <div>
          <label className="flex ">Color</label>
          <div className={`material-color bg-green-500`}></div>
        </div>
      </div>
      <div className="label-input">
        <div className="flex flex-col">
          <label>Volume (m3)</label>
          <input type="number" />
        </div>
        <div className="flex flex-col">
          <label>Cost (USD per m3)</label>
          <input type="number" />
        </div>
      </div>
      <div className="label-input">
        <div className="flex flex-col">
          <label>Delivery Date</label>
          <input type="date" placeholder="" />
        </div>
      </div>
    </div>
  );
};

export default Content;
