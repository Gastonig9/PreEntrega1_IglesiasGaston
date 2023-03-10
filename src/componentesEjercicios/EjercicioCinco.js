import React, { useState } from "react";


export default function EjercicioCinco() {
    const [nombre, setNombre] = useState("Mundo");

    const changeState = ()=> {
        setNombre("Gente Linda")
    }
    return(
        <>
        <h2>Ejercicio Cinco: Hola Mundo (Basico)</h2>
        <h1>{nombre}</h1>
        <button onClick={changeState}>Cambiar</button>
        </>
    )

}