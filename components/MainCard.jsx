import React from 'react'

const MainCard = ({src, alt, title}) => {
    return (
        <div className='m-4 mx-16 p-6 border-2 border-black rounded-md text-center bg-slate-200 w-64'>
            <img className='mx-auto' src={src} alt={alt} />
            <p className='text-2xl mt-2'>{title}</p>
        </div>
    )
}

export default MainCard
