import React from 'react'
import "./styles.css"

const Button = ({caballo, push}) => {
    
    return <button onClick={push} >{caballo}</button>
}

export default Button