import React from 'react'
import UsePokemon from "../../context/usePokemon";
//style
import "../../../styles/components/PruebaMovimientos.css";
import MostrarMovimientoPokemon from './MostrarMovimientosPokemon';
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
            <div className="MovimientosAllScreen">
                <ul className='MovimientosAllScreen__bar'>
                    <li>LEVEL</li>
                    <li>MOVE NAME</li>
                    <li>TYPE</li>
                    <li>POWER</li>

                </ul>
                <div className='MovimientosAllScreen__list'>
                    <MostrarMovimientoPokemon movesAll={pokemon.moves} EliminarPoder={EliminarPoder}/>
                </div>
                <div className='MovimientosAllScreen__barBottom'></div>
            </div>
            {/*  <h4>PruebaMovimientos</h4>
            <p>Movimientos </p>
            <ul className="PruebaMovimientos__ul">
                {pokemon.moves.map((el, idx) => {
                    return <li className="PruebaMovimientos__li" key={idx}>
                        {el.move.name}
                        <button onClick={() => { EliminarPoder(el.move.name) }}>Eliminar</button>
                    </li>
                })
                }
            </ul> */}
        </div>
    )
}

export default PruebaMovimientos;