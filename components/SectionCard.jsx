const SectionCard = ({
  productName,
  productDescription,
  productImgSrc,
  price,
}) => {
  return (
    <div className="text-center">
      <div className="pt-6 p-4 mx-4 border-2 border-blue my-4 space-y-4 rounded-md bg-slate-200">
        <h2 className="uppercase text-base font-black"> {productName}</h2>
        <div className="flex gap-4">
          <p className="text-sm my-auto">{productDescription}</p>
          <img
            src={productImgSrc}
            alt="imagen comida"
            className="mx-auto m-2 border-2 border-grey w-32 h-32"
          />
        </div>
        <p className="text-xl font-extrabold pb-2 text-black">${price}</p>
      </div>
    </div>
  );
};

export default SectionCard;
