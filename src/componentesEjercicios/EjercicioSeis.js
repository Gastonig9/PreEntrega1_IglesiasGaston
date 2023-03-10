import React, { useState } from "react";

export default function EjercicioSeis() {
    const [tareas, setTareas] = useState([
        {
            id: 1,
            tarea: "Salir a correr",
            completada: "Si"
        },
        {
            id: 2,
            tarea: "Estudiar durante 1 hora",
            completada: "Si"
        },
        {
            id: 3,
            tarea: "Hacer las compras",
            completada: "No"
        },

    ]);

    const agregarTarea = (nuevaTarea, confirmacion) => {
        let agregarNueva = { tarea: nuevaTarea, completada: confirmacion }
        setTareas([...tareas, agregarNueva])
    }

    const lista = [];

    for (const elemento of tareas) {
        lista.push(
            <li key={elemento.id}>
                <h2>Tarea: {elemento.tarea}</h2>
                <p>Completada: {elemento.completada}</p>
            </li>
        );
    }
    return (
        <>
            <h2>Ejercicio Seis: Otra lista de tareas</h2>
            <ul>{lista}</ul>
            <button className="btn btn-success" onClick={()=> {agregarTarea("comer", "Si")}}>Agregar nueva</button>
        </>

    )
}