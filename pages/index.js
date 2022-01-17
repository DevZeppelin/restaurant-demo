import Head from "next/head";
import MainCard from "../components/MainCard";
import Link from "next/link";
import MainButton from "../components/MainButton";

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
          className="mx-auto w-50 h-60 py-4 p-4"
        />

        <div className="flex">
          <div className=" w-1/5">
            <img src="/heineken.png" alt="heineken" className="p-5 md:p-10" />
          </div>
          <div className="w-3/5 md:grid md:grid-cols-2">
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
            <Link href="/drink">
              <a>
                <MainCard
                  src={"/drink.png"}
                  alt={"desayuno restaurant"}
                  title={"Bebidas"}
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

            <Link href="/promo">
              <a>
                <MainCard
                  src={"/promos.png"}
                  alt={"promociones restaurant"}
                  title={"Promociones"}
                />
              </a>
            </Link>
          </div>
          <div className="w-1/5"></div>
        </div>
        <div className="flex flex-col space-y-4">
          <MainButton text="Agregar Reseña" src="./google.png"/>
          <MainButton text="Pagar" src="./pay.png"/>
         
        </div>
      </main>
    </div>
  );
}
