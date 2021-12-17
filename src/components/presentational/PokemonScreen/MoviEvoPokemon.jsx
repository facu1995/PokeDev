import React, { useState } from 'react'
import CardPokemonEvoluciones from "../PokemonScreen/CardPokemonEvoluciones"
import UsePokemon from '../../context/usePokemon'
import MostrarMovimientoPokemon from './MostrarMovimientosPokemon';
import "../../../styles/components/MoviEvoPokemon.css";
import AddMoveForm from './AddMoveForm';


const MoviEvoPokemon = ({ evoluciones, species, setPokemon }) => {
    const pokemon = UsePokemon();
    const [agregarMoves, setAgregarMoves] = useState(false);
    const [MoviEvo, setMoviEvo] = useState('evo');
    const movieEvoState = (msg) => setMoviEvo(msg === 'evo' ? 'mov' : 'evo');

    const EliminarPoder = (movimientoName) => {
        setPokemon({
            ...pokemon,
            moves: [...pokemon.moves.filter(el => el.move.name !== movimientoName)
            ]
        });
    }

    return (
        <section className='MoviEvoPokemon'>
            {
                MoviEvo === 'evo' &&
                <>
                    <ul className='MoviEvoPokemon__select'>
                        <li className='GOLD MoviEvoPokemon__active'>Evolutions</li>
                        <li onClick={() => { movieEvoState('evo') }}>Moves</li>
                    </ul>
                    <div className="MoviEvoPokemon__select__EvolucionesPokemon">
                        <div className="EvolucionesPokemon__container">
                            {evoluciones.id.map((el, idx) => {
                                return <CardPokemonEvoluciones key={idx} name={evoluciones.name[idx]} description={evoluciones.description[idx]} url={'https://pokeapi.co/api/v2/pokemon/' + el} id={pokemon.id} />
                            })}
                        </div>
                    </div>
                </>
            }
            {
                MoviEvo === 'mov' &&
                <>
                    <ul className='MoviEvoPokemon__select'>
                        <li onClick={() => { movieEvoState('mov') }}>Evolutions</li>
                        <li className='GOLD MoviEvoPokemon__active'>Moves</li>
                    </ul>
                    <div className="MoviEvoPokemon__Movimientos">
                        {agregarMoves === false && <>
                            <ul className='MoviEvoPokemon__Movimientos__bar'>
                                <li>ID</li>
                                <li>MOVE NAME</li>
                                <li>TYPE</li>
                                <li>POWER</li>
                                <li>Eliminar</li>
                            </ul>
                            <div className='MoviEvoPokemon__Movimientos__list'>
                                <MostrarMovimientoPokemon movesAll={pokemon.moves} EliminarPoder={EliminarPoder} />
                            </div>
                            <div className='MoviEvoPokemon__Movimientos__barBottom'></div>
                            {/* <button className='btn btn-form' onClick={()=>setAgregarMoves(true)} >Agregar Movimientos</button> */}
                        </>}
                        {agregarMoves === true && <><AddMoveForm setPokemon={setPokemon} />
                        <button className="btn btn-form" type="submit" onClick={() =>{setAgregarMoves(false)}}>Atras</button></>}
                    </div>

                </>
            }
        </section>
    )
}

export default MoviEvoPokemon;