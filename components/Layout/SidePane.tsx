import React from "react";
import MaterialsPage from "../../pages/materials";
import Material from "../Materials/Material";
import MaterialItem from "../Materials/MaterialItem";

const SidePane = ({ items }) => {
  return (
    <div className="sidepane">
      {items?.map((item) => (
        <MaterialItem key={item?.id} data={item} />
      ))}
    </div>
  );
};

export default SidePane;
