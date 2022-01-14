import Prismic from "prismic-javascript";
import { Client } from "../prismic-configuration";
import { RichText } from "prismic-reactjs";
import { useRouter } from "next/router";
import SectionCard from "../components/SectionCard";

const Breakfast = ({ desayunos }) => {
  const router = useRouter();

  console.log(desayunos.results[0].data.titulo[0].text);
  console.log(desayunos.results);
  console.log(desayunos.results[0].data.imagen.url);

  return (
    <div className="text-center">
      <div>
        <img className="mx-auto my-4 mt-10" src="/breakfast.png" alt="desayuno" />
        <h1 className="text-2xl uppercase font-bold pb-6 text-gray-700">
          Menú de Desayuno
        </h1>
      </div>

      <SectionCard
        productName={desayunos.results[0].data.titulo[0].text}
        productDescription={desayunos.results[0].data.descripcion[0].text}
        productImgSrc={desayunos.results[0].data.imagen.url}
        price={desayunos.results[0].data.precio[0].text}
      />

      <SectionCard
        imgSrc={"/lunch.png"}
        title={"Almuerzo"}
        productName={desayunos.results[1].data.titulo[0].text}
        productDescription={desayunos.results[1].data.descripcion[0].text}
        productImgSrc={desayunos.results[1].data.imagen.url}
        price={desayunos.results[1].data.precio[0].text}
      />

      <div className="flex justify-center">
        <button
          className="py-3 px-10 my-4 text-lg uppercase rounded-md border-2 bg-slate-300 border-black font-bold"
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
