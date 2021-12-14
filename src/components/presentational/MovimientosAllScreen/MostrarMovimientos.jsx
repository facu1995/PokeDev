import React, { useEffect, useState } from 'react';
import CardMovimiento from "./CardMovimiento";

export const MostrarMovimientos = ({ movesAll, filtro }) => {
    const [movesActuales, setMovesActuales] = useState(movesAll);

    useEffect(() => {
        setMovesActuales([
            ...movesAll.filter(el => el.name.includes(filtro))
        ]);
    }, [filtro, movesAll]);
    return (
        <div className="MostrarMovimientos">
            {movesActuales.map((el, idx) => {
                return <CardMovimiento key={idx} pokeMove={el} />
            })
            }
            {movesActuales.length === 0 && <h5>No se encontro ningun pokemon con el nombre: {filtro}</h5>}
        </div>
    )

}
export default MostrarMovimientos;