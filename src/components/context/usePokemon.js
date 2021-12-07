import { useContext } from 'react';
//Contexto
import PokemonContext from './PokemonContext';

export function UsePokemon() {
    return (
        useContext(PokemonContext)
    )
}

export default UsePokemon;