
const SectionCard = ({ productName, productDescription, productImgSrc, price }) => {
 
   return (
    <div className="text-center">      

      <div className="pt-6 p-4 border-2 border-gray-500 my-4 space-y-4 w-3/4 mx-auto rounded-md bg-slate-200">
        <h2 className="uppercase text-base font-bold"> {productName}</h2>
        <p className="text-sm">{productDescription}</p>
        <img src={productImgSrc} alt="imagen comida" className="mx-auto m-2 border-2 border-black" />
        <p className="text-xl font-extrabold pb-2">${price}</p>
      </div>    
     
    </div>
  );
};

export default SectionCard;
