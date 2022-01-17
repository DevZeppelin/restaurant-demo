import Prismic from "prismic-javascript";
import { Client } from "../prismic-configuration";
import { useRouter } from "next/router";
import SectionCard from "../components/SectionCard";

const Cake = ({ bebidas }) => {
  const router = useRouter();

  console.log(bebidas.results);
  const data = bebidas.results;

  return (
    <div className="text-center min-h-screen">
      <div>
        <img className="mx-auto my-4 mt-10" src="/cake.png" alt="postre" />
        <h1 className="text-2xl uppercase font-bold pb-6 text-gray-700">
          Menú de postre
        </h1>
      </div>

      {data.map((postre, index = 0) => (
        <SectionCard
          key={Math.random()}
          productName={postre.data.titulo[0].text}
          productDescription={postre.data.descripcion[0].text}
          productImgSrc={postre.data.imagen.url}
          price={postre.data.precio[0].text}
        />
      ))}

      <div className="flex justify-center">
        <button
          className="py-3 px-10 my-4 text-lg uppercase font-bold"
          onClick={() => router.back()}
        >
          Volver 👈
        </button>
      </div>
    </div>
  );
};

export default Cake;

//this function is called everytime a request/refresh is made
export async function getServerSideProps() {
  const bebidas = await Client().query(
    Prismic.Predicates.at("document.type", "postre")
  );

  return {
    props: {
      bebidas: bebidas,
    },
  };
}
