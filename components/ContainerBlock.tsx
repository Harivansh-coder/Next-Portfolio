import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Navbar from "./Navbar";
import Footer from "./Footer";
import userData from "../constants/data";

export default function ContainerBlock({ children, ...customMeta }: any) {
  const router = useRouter();

  const meta = {
    title: "Harivansh Thakur - Developer, Writer, Programmer and Developer",
    description: `I've been developing software such as mobile apps, web apps, RESTAPI and lot more for more than 4 years.`,
    image: "/avatar.png",
    type: "website",
    ...customMeta,
  };
  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta property="og:url" content={userData.websiteURL} />
        <meta lang="en" />

        <meta
          property="og:url"
          content={`https://www.harivansht.tech${router.asPath}`}
        />

        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />

        <link
          rel="canonical"
          href={`https://www.harivansht.tech${router.asPath}`}
        />

        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Harivansh Thakur" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <main className="dark:bg-gray-800 w-full">
        <Navbar />
        <div>{children}</div>
        <Footer />
      </main>
    </div>
  );
}
