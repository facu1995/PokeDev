import React from 'react'
import { obtenerClassType } from "../visualData/Types"
import "../../../styles/components/CardPokemonAbout.css"
import UsePokemon from "../../context/usePokemon";




export const CardPokemonAbout = () => {

  const pokemon = UsePokemon();
  const imgSrc = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/" + pokemon.id + ".svg";

  return (
    <div className="CardPokemonAbout">
      <div className="contenedor1">
        <div className="contenedor2">
          <div className="CardPokemon">
            <img className="CardPokemon__img" src={imgSrc} alt="imagen" />
            <h5 className="CardPokemonAbout__GOLD">HI THERE! I'M </h5>
            <h3 className="CardPokemonAbout__CardPokemon__name animate__animated animate__fadeIn">
              <span className="CardPokemonAbout__MyPokemonScreenHeader__blink">[</span> {pokemon.name}{" "}
              <span className="CardPokemonAbout__MyPokemonScreenHeader__blink">]</span>
            </h3>
            <div  className="flex">
            {pokemon.types.map((el, idx) => <i key={idx} className={obtenerClassType(el.type.name)}></i>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}




