import React, { useState } from "react";

export default function EjercicioTres() {
  const [valorDolar, setValorDolar] = useState(1);
  const [valores, setValores] = useState({
    peso: 0,
    franco: 0,
    rial: 0,
    libra: 0,
  });

  const calcular = () => {
    const nuevoValores = {
      peso: (valorDolar * 195).toFixed(2),
      franco: (valorDolar * 1102).toFixed(2),
      rial: (valorDolar * 250).toFixed(2),
      libra: (valorDolar * 18).toFixed(2),
    };
    setValores(nuevoValores);
  };

  return (
    <div className="container mt-3">
      <h2>Ejercicio 3: Convertor de monedas</h2>
      <div className="row mt-3">
        <div className="col-md-6">
          <h4>Dólar a Peso Argentino</h4>
          <div className="form-group">
            <label htmlFor="valorDolar">Ingrese un valor en dólares</label>
            <br></br>
            <input
              type="number"
              id="valorDolar"
              className="form-control"
              value={valorDolar}
              onChange={(e) => setValorDolar(e.target.value)}
            />
          </div>
          <br></br>
          <div className="form-group">
            <button className="btn btn-primary" onClick={calcular}>
              Calcular
            </button>
          </div>
        </div>
        <div className="col-md-6">
          <h4>Resultados</h4>
          <ul className="list-group">
            <li className="list-group-item bg-warning text-dark">
            {valorDolar} dolares es igual a {valores.peso} Pesos Argentinos
            </li>
            <li className="list-group-item bg-warning text-dark">
            {valorDolar} dolares es igual a {valores.franco} Francos Suizos
            </li>
            <li className="list-group-item bg-warning text-dark">{valorDolar} dolares es igual a {valores.rial} Riales</li>
            <li className="list-group-item bg-warning text-dark">{valorDolar} dolares es igual a {valores.libra} Libras</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
