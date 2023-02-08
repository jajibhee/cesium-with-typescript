import React from "react";
import { GetStaticProps } from "next";
import Link from "next/link";
import { Materials } from "../interfaces";
import { sampleMaterialsData } from "../utils/sample-data";
import MaterialItem from "../components/Materials/MaterialItem";

type MaterialsProps = {
  items: Materials[];
};
const MaterialsPage: React.FC<MaterialsProps> = ({ items }) => {
  console.log("items");
  return (
    <div>
      {items?.map((item) => (
        <MaterialItem key={item.id} data={item} />
      ))}
    </div>
  );
};

export default MaterialsPage;
