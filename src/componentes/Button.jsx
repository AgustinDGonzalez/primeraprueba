import React from 'react'

const Button = ({caballo, push}) => {
    
    return <button onClick={push} >{caballo}</button>
}

export default Button