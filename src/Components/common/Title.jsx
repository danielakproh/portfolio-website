import React from 'react'

const Title = ({ frontText, backgroundText }) => {
    return (
        <>
            <div>
                <span></span>
                <span></span>
            </div>
            <div className="m-7 inter-family flex justify-center items-center relative">
                <h2 className="text-xl text-black font-bold pt-2 z-10">{frontText}</h2>
                <p className="absolute font-extrabold text-6xl background-title z-0">{backgroundText}</p>
            </div>
        </>
    )
}

export default Title
