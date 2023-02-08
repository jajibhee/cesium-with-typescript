import React from "react";
import Link from "next/link";
import { Materials } from "../interfaces";

import MaterialItem from "../components/Materials/MaterialItem";

type MaterialsProps = {
  items: Materials[];
};
const MaterialsPage: React.FC<MaterialsProps> = ({ items }) => {
  return (
    <div>
      {items?.map((item) => (
        <MaterialItem key={item.id} data={item} />
      ))}
    </div>
  );
};

export default MaterialsPage;
