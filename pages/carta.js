import Prismic from "prismic-javascript";
import { Client } from "../prismic-configuration";
import { useRouter } from "next/router";
import SectionCard from "../components/SectionCard";

const Carta = ({ desayunos,almuerzos, bebidas, postres, promos }) => {
  const router = useRouter();

  const dataBreakfast = desayunos.results;
  const dataLunch = almuerzos.results;
  const dataDrink = bebidas.results;
  const dataCake = postres.results;
  const dataPromo = promos.results;

  return (
    <div>
     <div className="min-h-screen text-center">

     <div>
        <img className="mx-auto my-4 mt-10" src="/breakfast.png" alt="desayuno" />
        <h1 className="text-2xl uppercase font-bold pb-6 text-gray-700">
          Menú de desayuno
        </h1>
      </div>

      {dataBreakfast.map((desayuno, index = 0) => (
        <SectionCard
          key={Math.random()}
          productName={desayuno.data.titulo[0].text}
          productDescription={desayuno.data.descripcion[0].text}
          productImgSrc={desayuno.data.imagen.url}
          price={desayuno.data.precio[0].text}
        />
      ))}

<div>
        <img className="mx-auto my-4 mt-10" src="/lunch.png" alt="almuerzo" />
        <h1 className="text-2xl uppercase font-bold pb-6 text-gray-700">
          Menú de Almuerzo
        </h1>
      </div>

      {dataLunch.map((almuerzo, index = 0) => (
        <SectionCard
          key={Math.random()}
          productName={almuerzo.data.titulo[0].text}
          productDescription={almuerzo.data.descripcion[0].text}
          productImgSrc={almuerzo.data.imagen.url}
          price={almuerzo.data.precio[0].text}
        />
      ))}

<div>
        <img className="mx-auto my-4 mt-10" src="/drink.png" alt="bebida" />
        <h1 className="text-2xl uppercase font-bold pb-6 text-gray-700">
          Menú de bebida
        </h1>
      </div>
      <div className="flex">
        <div className="w-1/6">
        <img src="/heineken.png" alt="heineken" className="p-2 md:p-6" />

        </div>
        <div className="w-5/6">
          {dataDrink.map((bebida) => (
            <SectionCard
              key={Math.random()}
              productName={bebida.data.titulo[0].text}
              productDescription={bebida.data.descripcion[0].text}
              productImgSrc={bebida.data.imagen.url}
              price={bebida.data.precio[0].text}
            />
          ))}
        </div>
      </div>

      <div>
        <img className="mx-auto my-4 mt-10" src="/cake.png" alt="postre" />
        <h1 className="text-2xl uppercase font-bold pb-6 text-gray-700">
          Menú de postre
        </h1>
      </div>

      {dataCake.map((postre, index = 0) => (
        <SectionCard
          key={Math.random()}
          productName={postre.data.titulo[0].text}
          productDescription={postre.data.descripcion[0].text}
          productImgSrc={postre.data.imagen.url}
          price={postre.data.precio[0].text}
        />
      ))}

<div>
        <img className="mx-auto my-4 mt-10" src="/promos.png" alt="promo" />
        <h1 className="text-2xl uppercase font-bold pb-6 text-gray-700">
          Menú de promo
        </h1>
      </div>

      {dataPromo.map((promo, index = 0) => (
        <SectionCard
          key={Math.random()}
          productName={promo.data.titulo[0].text}
          productDescription={promo.data.descripcion[0].text}
          productImgSrc={promo.data.imagen.url}
          price={promo.data.precio[0].text}
        />
      ))}




    </div>
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

export default Carta;

export async function getServerSideProps() {
    const desayunos = await Client().query(
      Prismic.Predicates.at("document.type", "desayuno")
    );

    const almuerzos = await Client().query(
        Prismic.Predicates.at("document.type", "almuerzo")
      );

      const bebidas = await Client().query(
        Prismic.Predicates.at("document.type", "bebidas")
      );

      const postres = await Client().query(
        Prismic.Predicates.at("document.type", "postres")
      );

      const promos = await Client().query(
        Prismic.Predicates.at("document.type", "promo")
      );
  
    return {
      props: {
        desayunos: desayunos,
        almuerzos: almuerzos,
        bebidas: bebidas,
        postres: postres,
        promos: promos
      },
    };
  }
  