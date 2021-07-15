import React, {useState} from 'react'
import Button from './Button'

const Contador = () => {
    let [counter, setCounter] = useState(0)
    return (
    <div>{counter}
        <Button push={() => (counter++) } caballo="Sumar Contador"/>
        <Button push={() => {setCounter(counter - 1)} } caballo="restar Contador"/>
        <Button push={() => {setCounter(0)} } caballo="reset Contador"/>
    </div>
    );
}

export default Contador