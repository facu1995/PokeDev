import React from 'react'
import {obtenerClassType} from "../visualData/Types"
import "../../../styles/components/CardPokemon.css"
import UsePokemon from "../../context/usePokemon";
import "../../../styles/components/CardPokemon.css"



export const CardPokemonAbout = () => {

    const pokemon = UsePokemon();
    const imgSrc = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/" + pokemon.id + ".svg";

    return (
        <div className="contenedor1">
          <div className="contenedor2">
            <div className="CardPokemon">
              <img className="CardPokemon__img" src={imgSrc} alt="imagen" />
              <h5 className="GOLD">HI THERE! I'M </h5>
              <h3 className="CardPokemon__name animate__animated animate__fadeIn">
                <span className="MyPokemonScreenHeader__blink">[</span> {pokemon.name}{" "}
                <span className="MyPokemonScreenHeader__blink">]</span>
              </h3>
               {
              pokemon.types.map((el, idx) => <i key={idx} className={obtenerClassType(el.type.name)}></i>
              )
            }
            </div>

          </div>
        </div>
    )
}




