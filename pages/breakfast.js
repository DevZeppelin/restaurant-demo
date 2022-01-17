import Prismic from "prismic-javascript";
import { Client } from "../prismic-configuration";
import { useRouter } from "next/router";
import SectionCard from "../components/SectionCard";

const Breakfast = ({ desayunos }) => {
  const router = useRouter();

  console.log(desayunos.results);
  const data = desayunos.results;

  return (
    <div className="text-center min-h-screen">
      <div>
        <img className="mx-auto my-4 mt-10" src="/breakfast.png" alt="desayuno" />
        <h1 className="text-2xl uppercase font-bold pb-6 text-gray-700">
          Menú de desayuno
        </h1>
      </div>

      {data.map((desayuno, index = 0) => (
        <SectionCard
          key={Math.random()}
          productName={desayuno.data.titulo[0].text}
          productDescription={desayuno.data.descripcion[0].text}
          productImgSrc={desayuno.data.imagen.url}
          price={desayuno.data.precio[0].text}
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

export default Breakfast;

//this function is called everytime a request/refresh is made
export async function getServerSideProps() {
  const desayunos = await Client().query(
    Prismic.Predicates.at("document.type", "desayuno")
  );

  return {
    props: {
      desayunos: desayunos,
    },
  };
}
