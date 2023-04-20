import Head from "next/head";
import { PropsWithChildren } from "react";
import { Navbar } from "../Navbar";

export const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Head>
        <title>MealMate</title>
        <meta
          name="description"
          content="MealMate es una aplicación que te ayudará a crear combinaciones aleatorias de comidas de manera sencilla. Solo tienes que crear dos listas con tus comidas favoritas: una lista para ti y otra para tu pareja. La aplicación se encargará de generar combinaciones al azar a partir de estas listas para ayudarte a planificar tus comidas de manera sencilla."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="flex flex-col items-center justify-around w-full h-full bg-yellow-600">
        {children}
      </main>
    </>
  );
};
