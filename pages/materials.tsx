import React from "react";
import Link from "next/link";
import { Materials } from "../interfaces";

import MaterialItem from "../components/Materials/MaterialItem";
import Content from "../components/Layout/Content";

type MaterialsProps = {
  items: Materials[];
};
const MaterialsPage: React.FC<MaterialsProps> = ({ items }) => {
  return (
    <div>
      <Content />
    </div>
  );
};

export default MaterialsPage;
