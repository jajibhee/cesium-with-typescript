import React from "react";

type MaterialProps = {
  colorName?: string;
  materialName?: string;
  volume?: number;
};
const Material: React.FC<MaterialProps> = ({
  colorName = "red",
  materialName,
  volume,
}) => {
  return (
    <div className="flex justify-center">
      <div className={`material-color ${colorName}`}></div>
      <div className="flex flex-col">
        <p>{materialName}</p>
        <p>{volume} (m3)</p>
      </div>
    </div>
  );
};

export default Material;
