import React from 'react'

const MainButton = ({text, src}) => {
    return (
        <div className="flex m-2 p-2 border-2 border-black rounded-md mx-8 bg-yellow mt-12">
            <div className="w-1/4">
              <img src={src} alt="botón funcional main" className='m-2'/>  
            </div> 
            <div className="w-3/4  my-0 flex justify-center">
              <button className="font-bold text-xl">
                {text}
              </button>
            </div>
          </div>
    )
}

export default MainButton
