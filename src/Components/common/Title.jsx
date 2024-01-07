import React from 'react'

const Title = ({ frontText, backgroundText }) => {
    return (
        <div>
            <span>{frontText}</span>
            <span>{backgroundText}</span>
        </div>
    )
}

export default Title
