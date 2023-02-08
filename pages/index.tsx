import Link from "next/link";
import Layout from "../components/Layout/Layout";
import Material from "../components/Materials/Material";
import MaterialsPage from "./materials";
import { GetStaticProps } from "next";
import { sampleMaterialsData } from "../utils/sample-data";
import { Materials } from "../interfaces";

type MaterialsProps = {
  items: Materials[];
};

const IndexPage = ({ items }: MaterialsProps) => (
  <Layout title="Home | Next.js + TypeScript Example">
    <MaterialsPage items={items} />
  </Layout>
);

export default IndexPage;

export const getStaticProps: GetStaticProps = async () => {
  const items: Materials[] = sampleMaterialsData;
  return { props: { items } };
};
