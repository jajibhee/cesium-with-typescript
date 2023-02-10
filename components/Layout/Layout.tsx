import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";
import SidePane from "./SidePane";
import Button from "../Button";
import { Materials } from "../../interfaces";

type Props = {
  children?: ReactNode;
  title?: string;
  items: Materials[];
};

const Layout = ({
  items,
  children,
  title = "Cesium Sample Project",
}: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <main>
      <h1 className="text-2xl text-white my-8 font-bold">Materials</h1>
      {/* <div className="flex my-4">
        <Button name="Add" color="bg-blue-500" />
        <Button name="Delete" color="bg-red-500" />
      </div> */}
      <div className="layout">
        <SidePane items={items} />
        <div className="content">{children}</div>
      </div>
    </main>

    <footer>
      <hr />
      {/* TODO: add something here maybe... */}
    </footer>
  </div>
);

export default Layout;
