import React from "react";
import Link from "next/link";
import { Materials } from "../../interfaces";
import Material from "./Material";

type Props = {
  data: Materials;
};

const MaterialItem = ({ data }: Props) => (
  <Link href={`/materials/${data.id}`} as={`/users/${data.id}`}>
    <Material />
  </Link>
);

export default MaterialItem;
