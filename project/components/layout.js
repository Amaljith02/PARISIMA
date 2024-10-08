import React from "react";
import Head from "next/head";
import Header from "@/components/header/index";
import Footer from "@/components/footer/index";

export default function RootLayout({ children }) {
  return (
    <React.Fragment>
      <div>
        <Header>
          <Head>
            <title>Parisima</title>
            <meta name="description" content="" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <link rel="icon" href="/favicon.ico" />
          </Head>
        </Header>
        <main> {children}</main>

        <Footer></Footer>
      </div>
    </React.Fragment>
  );
}
