import React from 'react'
import dataPokemon from '../mocks/pokemonData'
import imagenPoke from '../img/PokeImg/1.png'
import '../../styles/components/pokeTypes.css'
import pokeTypes from './visualData/pokeTypes';



export const CallDataExample = () => {

    return (
        <div>
            <p>Nombre pokemon: {dataPokemon.name}</p>
            <p>Id Pokemon: {dataPokemon.id}</p>
            <p>Descripcion</p>
            <p>Tipos: {dataPokemon.types[0].type.name}</p>
            <p>Ataque: {dataPokemon.stats[1].base_stat}</p>
            <p>Defensa: {dataPokemon.stats[2].base_stat}</p>
            <p>Defensa esp: {dataPokemon.stats[4].base_stat}</p>
            <p>Speed: {dataPokemon.stats[5].base_stat}</p>
            <p>HP: {dataPokemon.stats[0].base_stat}</p>
            <p>Total</p>
            <p>Location: {dataPokemon.location_area_encounters}</p>
            <p>evolution xxxxxxxxx</p>
        

            <img src={imagenPoke} alt="" />
           
            <i class={pokeTypes.fire}></i>
            <i class={pokeTypes.water}></i>
            <i class={pokeTypes.electric}></i>
            <i class={pokeTypes.earth}></i>
            <i class={pokeTypes.leaf}></i>
            <i class={pokeTypes.ghost}></i>
            <i class={pokeTypes.fly}></i>
            <i class={pokeTypes.bug}></i>
            <i class={pokeTypes.stone}></i>
            <i class={pokeTypes.fight}></i>
            <i class={pokeTypes.steel}></i>
            <i class={pokeTypes.dragon}></i>
            <i class={pokeTypes.poison}></i>
            <i class={pokeTypes.ice}></i>

        </div>
    )
}
