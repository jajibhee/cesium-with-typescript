import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";
import SidePane from "./SidePane";
import Button from "../Button";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "Cesium Sample Project" }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <main>
      <h2>Materials</h2>
      <div>
        <Button name="Add" />
      </div>
      <div className="layout">
        <SidePane />
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
