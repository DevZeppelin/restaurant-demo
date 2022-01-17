import Prismic from "prismic-javascript";
import { Client } from "../prismic-configuration";
import { useRouter } from "next/router";
import SectionCard from "../components/SectionCard";

const Lunch = ({ almuerzos }) => {
  const router = useRouter();

  console.log(almuerzos.results);
  const data = almuerzos.results;

  return (
    <div className="text-center min-h-screen">
      <div>
        <img className="mx-auto my-4 mt-10" src="/lunch.png" alt="almuerzo" />
        <h1 className="text-2xl uppercase font-bold pb-6 text-gray-700">
          Menú de Almuerzo
        </h1>
      </div>

      {data.map((almuerzo, index = 0) => (
        <SectionCard
          key={Math.random()}
          productName={almuerzo.data.titulo[0].text}
          productDescription={almuerzo.data.descripcion[0].text}
          productImgSrc={almuerzo.data.imagen.url}
          price={almuerzo.data.precio[0].text}
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

export default Lunch;

//this function is called everytime a request/refresh is made
export async function getServerSideProps() {
  const almuerzos = await Client().query(
    Prismic.Predicates.at("document.type", "almuerzo")
  );

  return {
    props: {
      almuerzos: almuerzos,
    },
  };
}
