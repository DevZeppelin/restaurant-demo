import React from 'react'

const MainCard = ({src, alt, title}) => {
    return (
        <div className='m-2  p-6 text-center bg-slate-200 ml-2'>
            <div className='mx-2'>
                <img className='mx-auto' src={src} alt={alt} />
                <p className='text-2xl mt-2'>{title}</p>
            </div>
        </div>
    )
}

export default MainCard
