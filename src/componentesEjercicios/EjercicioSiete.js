import React, { useState, useEffect } from 'react';

export default function EjercicioSiete(props) {
    const [name, setName] = useState('');

    useEffect(() => {
      setName(props.name);
    }, []);
    return (
        <>
            <h2>Ejercicio 7: Manejo de useEffect</h2>
            <div>
                <h1>Bienvenido, {name}!</h1>
            </div>
        </>
    )
}