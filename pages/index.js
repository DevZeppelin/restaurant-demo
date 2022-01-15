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

      <main className="bg-slate-100 mx-auto pb-6">
        <img src="/logo.png" alt="logo restaurant qr demo" className="mx-auto w-50 h-60 py-4" />

        <div className="flex">
          <div className=" w-1/5">

            <img src="/heineken.png" alt="heineken" className="p-2" />
          </div>
          <div className="w-4/5">
            <Link href="/breakfast">
              <a>
                <MainCard
                  src={"/breakfast.png"}
                  alt={"desayuno restaurant"}
                  title={"Desayuno"}
                />
              </a>
            </Link>
            <Link href="/lunch">
              <a>
                <MainCard
                  src={"/lunch.png"}
                  alt={"desayuno restaurant"}
                  title={"Almuerzo/Cena"}
                />
              </a>
            </Link>
            <a>
              <MainCard
                src={"/drink.png"}
                alt={"desayuno restaurant"}
                title={"Bebidas"}
              />
            </a>
            <a>
              <MainCard
                src={"/cake.png"}
                alt={"desayuno restaurant"}
                title={"Postres"}
              />
            </a>
            <a>
              <MainCard
                src={"/cake.png"}
                alt={"promociones restaurant"}
                title={"Promociones"}
              />
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
