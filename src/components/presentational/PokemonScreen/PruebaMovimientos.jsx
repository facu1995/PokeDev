import React from 'react'
import UsePokemon from "../../context/usePokemon";
//style
import "../../../styles/components/PruebaMovimientos.css";
const PruebaMovimientos = ({ setPokemon }) => {
    const pokemon = UsePokemon();

    
    const EliminarPoder = (movimientoName) => {
        setPokemon({
            ...pokemon,
            moves: [...pokemon.moves.filter(el => el.move.name !== movimientoName)
            ]
        });
    }
    return (
        <div className="PruebaMovimientos">
            <h4>PruebaMovimientos</h4>
            <p>Movimientos </p>
            <ul className="PruebaMovimientos__ul">
                {pokemon.moves.map((el, idx) => {
                    return <li className="PruebaMovimientos__li" key={idx}>
                        {console.log(el)}
                        {el.move.name}
                        <button onClick={() => { EliminarPoder(el.move.name) }}>Eliminar</button>
                    </li>
                })
                }
            </ul>
        </div>
    )
}

export default PruebaMovimientos;