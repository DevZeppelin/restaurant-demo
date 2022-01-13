import Head from "next/head";
import MainCard from "../components/MainCard";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Restaurant QR Demo</title>
        <meta name="description" content="Restaurant QR Carta Demo " />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-slate-100 flex flex-col justify-center mx-0">
        <h1 className=" text-center text-2xl font-bold pt-6 uppercase font-mono">
          ¡Bienvenido a <span className="text-blue-600 hover:underline">Restaurant</span> Demo!
        </h1>

        <Link href="breakfast">
          <a>
            <MainCard
              src={"/breakfast.png"}
              alt={"desayuno restaurant"}
              title={"Desayuno"}
            />
          </a>
        </Link>
        <Link href="lunch">
          <a>
            <MainCard
              src={"/lunch.png"}
              alt={"desayuno restaurant"}
              title={"Almuerzo"}
            />
          </a>
        </Link>
        <Link href="cake">
          <a>
            <MainCard
              src={"/cake.png"}
              alt={"desayuno restaurant"}
              title={"Postres"}
            />
          </a>
        </Link>
        <Link href="drink">
          <a>
            <MainCard
              src={"/drink.png"}
              alt={"desayuno restaurant"}
              title={"Bebidas"}
            />
          </a>
        </Link>
      </main>
    </div>
  );
}
