import React from "react";
import Link from "next/link";
import { Materials } from "../../interfaces";
import Material from "./Material";

type Props = {
  data: Materials;
};

const MaterialItem = ({ data }: Props) => (
  <div>
    <Material props={data} />
  </div>
);

export default MaterialItem;
