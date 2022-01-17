import React from 'react'

const MainCard = ({src, alt, title}) => {
    return (
        <div className='m-2 py-2 mx-0 text-center'>
            <div className='mx-2'>
                <img className='mx-auto h-12 w-12' src={src} alt={alt} />
                <p className=' text-center text-lg font-semibold mt-2 mx-auto'>{title}</p>
            </div>
        </div>
    )
}

export default MainCard
