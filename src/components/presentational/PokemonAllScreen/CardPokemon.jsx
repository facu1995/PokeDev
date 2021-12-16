import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
//inicializador pokemon
import pokemonInit from '../../initializerJSON/pokemonInitJSON';

//style
import { obtenerClassType } from "../visualData/Types"
import Spinner from '../../img/spinner5.gif';
import "../../../styles/components/CardPokemon.css"

function CardPokemon({ name, url }) {
  const [spinner, setSpinner] = useState(true);
  let id = 1;
  let arrayURL = url.split('/');
  if (arrayURL[6]) {
    id = arrayURL[6];
  }
  const imgSrc = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/" + id + ".svg";
  const [pokemon, setPokemon] = useState(pokemonInit)
  useEffect(() => {
    setSpinner(true);
    obtenerPokemon(id);
  }, [id]);


  const obtenerPokemon = async (id) => {
    const data = await fetch('https://pokeapi.co/api/v2/pokemon/' + id)
    const dataJSON = await data.json();
    setPokemon(dataJSON);
    setSpinner(false);
  }

  const spinnerOn = () => {
    return (
      <div className="flex-centerAll">
        <div className="spinner-card">
          <div className="spinner__fondo"></div>
          <img className='spinner__imagen' src={Spinner} alt="foto" />
        </div>
      </div>
    );
  }
  return (
    <>
      {spinner === true && spinnerOn()}
      {spinner === false &&
        <Link to={"/pokemon/" + id}>
          <div className="contenedor1">
            <div className="contenedor2">
              <div className="CardPokemon">
                <img className="CardPokemon__img" src={imgSrc} alt="imagen" />
                <h5 className="GOLD">HI THERE! I'M </h5>
                <h3 className="CardPokemon__name animate__animated animate__fadeIn">
                  <span className="MyPokemonScreenHeader__blink">[</span> {name}{" "}
                  <span className="MyPokemonScreenHeader__blink">]</span>
                </h3>
                <div className="flex">
                  {pokemon.types.map((el, idx) => <i key={idx} className={obtenerClassType(el.type.name)}></i>)}
                </div>
              </div>

            </div>
          </div>
        </Link>}
    </>
  );
}

export default CardPokemon;