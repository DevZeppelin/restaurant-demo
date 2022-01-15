import Prismic from "prismic-javascript";
import { Client } from "../prismic-configuration";
import { RichText } from "prismic-reactjs";
import { useRouter } from "next/router";
import SectionCard from "../components/SectionCard";

const Lunch = ({ almuerzos }) => {
  const router = useRouter();

  console.log(almuerzos.results[0].data.titulo[0].text);
  console.log(almuerzos.results);
  console.log(almuerzos.results[0].data.imagen.url);

  return (
    <div className="text-center">
      <div>
        <img className="mx-auto my-4 mt-10" src="/lunch.png" alt="almuerzo" />
        <h1 className="text-2xl uppercase font-bold pb-6 text-gray-700">
          Menú de Almuerzo
        </h1>
      </div>

      <SectionCard
        productName={almuerzos.results[0].data.titulo[0].text}
        productDescription={almuerzos.results[0].data.descripcion[0].text}
        productImgSrc={almuerzos.results[0].data.imagen.url}
        price={almuerzos.results[0].data.precio[0].text}
      />

      <SectionCard
        imgSrc={"/lunch.png"}
        title={"Almuerzo"}
        productName={almuerzos.results[1].data.titulo[0].text}
        productDescription={almuerzos.results[1].data.descripcion[0].text}
        productImgSrc={almuerzos.results[1].data.imagen.url}
        price={almuerzos.results[1].data.precio[0].text}
      />

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
