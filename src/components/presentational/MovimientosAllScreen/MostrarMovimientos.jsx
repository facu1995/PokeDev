import React, { useEffect, useState } from 'react';
import CardMovimiento from "./CardMovimiento";
//style
import "../../../styles/components/MostrarMovimientos.css";

export const MostrarMovimientos = ({ movesAll, filtro }) => {
    const [movesActuales, setMovesActuales] = useState(movesAll);

    useEffect(() => {
        setMovesActuales([
            ...movesAll.filter(el => el.name.toUpperCase().includes(filtro.toUpperCase()))
        ]);
    }, [filtro, movesAll]);
    return (
        <div className="MostrarMovimientos">
            <ul className="MostrarMovimientos__ul">
            {movesActuales.map((el, idx) => {
                return <CardMovimiento key={idx} pokeMove={el} />
            })
            }
            {movesActuales.length === 0 && <h5>Pokemon {filtro} not found</h5>}
            </ul>
        </div>
    )

}
export default MostrarMovimientos;