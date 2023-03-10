import React, { useState } from "react";

export default function EjercicioDos() {
    const [contador, setContador] = useState(0);

    const aumentar = ()=> {
        setContador(contador + 1)
    }

    const restar = ()=> {
        setContador(contador - 1)
    }
    
    return(
        <>
            <h2>Ejercicio 2: Contador</h2>
            <button onClick={aumentar}>Aumentar</button>
            <button onClick={restar}>Restar</button>
            <p>CONTADOR: {contador}</p>
        </>

    )
}