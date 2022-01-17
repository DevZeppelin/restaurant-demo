import Head from "next/head";
import MainCard from "../components/MainCard";
import Link from "next/link";
import MainButton from "../components/MainButton";
import { useState } from "react";
import MainCardMother from "../components/MainCardMother";

export default function Home() {
  /*VIDEO INTRO
  
  const [cargando, setCargando] = useState(true);
  useEffect(() => {
    const initFunction = () => {
      window.scrollTo(0,0)
      setTimeout(() => {
        setCargando(!cargando);
      }, 4000);
    };
    initFunction();
  }, []);
  console.log(cargando); */

  const [openEat, setOpenEat] = useState(false);
  const [openDrink, setOpenDrink] = useState(false);

  return (
    <div>
      <Head>
        <title>Restaurant QR Demo</title>
        <meta name="description" content="Restaurant QR Carta Demo " />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="background mx-auto pb-6">
        {/* {cargando ? (
          <video autoPlay muted>
            <source src="/init.mp4" type="video/mp4" />
          </video>
        ) : null} */}

        <img
          src="/logo.png"
          alt="logo restaurant qr demo"
          className="logo-animation mx-auto   w-40 h-50 py-4 p-4"
        />

        <div className="flex">
          <div className=" w-1/5">
            <img src="/heineken.png" alt="heineken" className={openEat ? ("p-5 md:p-10 mt-6 pt-96") : ("p-5 md:p-10 pt-48")} />
          </div>
          <div className="w-3/5 md:grid md:grid-cols-2 flex flex-col justify-center">
            <button onClick={() => setOpenEat(!openEat)}>
              <MainCardMother src="/lunch.png" title="Para comer" />
            </button>
            {openEat ? (
              <div className="grid grid-cols-2">
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
                      src={"/lunch2.png"}
                      alt={"desayuno restaurant"}
                      title={"Principal"}
                    />
                  </a>
                </Link>
                <Link href="/cake">
                  <a>
                    <MainCard
                      src={"/cake.png"}
                      alt={"desayuno restaurant"}
                      title={"Postres"}
                    />
                  </a>
                </Link>
              </div>
            ) : null}

            <button onClick={() => setOpenDrink(!openDrink)}>
              <MainCardMother src="/drink.png" title="Bebidas" />
            </button>
            {openDrink ? (
              <div className="grid grid-cols-2">
                <Link href="/drink">
                  <a>
                    <MainCard
                      src={"/drink2.png"}
                      alt={"desayuno restaurant"}
                      title={"Refrescos"}
                    />
                  </a>
                </Link>
                <Link href="/drink">
                  <a>
                    <MainCard
                      src={"/wine.png"}
                      alt={"desayuno restaurant"}
                      title={"Vinos"}
                    />
                  </a>
                </Link>
                <Link href="/drink">
                  <a>
                    <MainCard
                      src={"/beer.png"}
                      alt={"desayuno restaurant"}
                      title={"Cervezas"}
                    />
                  </a>
                </Link>
                <Link href="/drink">
                  <a>
                    <MainCard
                      src={"/licor.png"}
                      alt={"desayuno restaurant"}
                      title={"Tragos"}
                    />
                  </a>
                </Link>
              </div>
            ) : null}

            <Link href="/promo">
              <a>
                <MainCardMother
                  src={"/promos.png"}
                  alt={"promociones restaurant"}
                  title={"Promociones"}
                />
              </a>
            </Link>
          </div>
          <div className="w-1/5"></div>
        </div>
        <div className="flex flex-col space-y-1">
          <MainButton text="Agregar Reseña" src="./google.png" />
          <MainButton text="Pagar" src="./pay.png" />
        </div>
      </main>
    </div>
  );
}
