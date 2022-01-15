import React from 'react'

const MainCard = ({src, alt, title}) => {
    return (
        <div className='m-2 py-6 pr-16  text-center bg-slate-200'>
            <div className='mx-2'>
                <img className='mx-auto' src={src} alt={alt} />
                <p className='text-2xl font-semibold mt-2'>{title}</p>
            </div>
        </div>
    )
}

export default MainCard
