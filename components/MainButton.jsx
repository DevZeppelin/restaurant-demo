import React from 'react'

const MainButton = ({text, src}) => {
    return (
        <div className="flex p-2 mx-8 mt-12">
            <div className="w-1/4">
              <img src={src} alt="botón funcional main" className='m-2 h-12 w-12'/>  
            </div> 
            <div className="w-3/4 my-0 flex ml-4">
              <button className="font-bold text-xl">
                {text}
              </button>
            </div>
          </div>
    )
}

export default MainButton
