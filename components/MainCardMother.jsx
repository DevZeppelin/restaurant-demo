import React from 'react'

const MainCardMother = ({src, alt, title}) => {
    return (
        <div className='m-2 pt-6 text-center bg-slate-200' >
            <div className='mx-2'>
                <img className='mx-auto' src={src} alt={alt} />
                <p className='text-xl font-bold mt-2'>{title}</p>
            </div>
        </div>
    )
}

export default MainCardMother
