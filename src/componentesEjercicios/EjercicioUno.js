import React, { useState } from "react";

export default function EjercicioUno() {
  const [elementos, setElementos] = useState([]);
  console.log(elementos)

  const addElement = (elemento) => {
    setElementos([...elementos, elemento]);
  };

  const deleteElement = (index) => {
    const newElementos = [...elementos];
    newElementos.splice(index, 1);
    setElementos(newElementos);
  };

  return (
    <>
      <h2>Ejercicio 1: Lista de elementos</h2>
      <ul>
        {elementos.map((elemento, index) => (
          <li key={index}>
            {elemento} <button onClick={() => deleteElement(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
      <div>
        <label>
          Nuevo elemento:
          <input type="text" id="nuevoElemento" />
        </label>
        <button onClick={() => addElement(document.getElementById("nuevoElemento").value)}>Agregar</button>
      </div>
    </>
  );
}