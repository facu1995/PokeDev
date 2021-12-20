import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
//inicializador pokemon
import pokemonInit from '../../initializerJSON/pokemonInitJSON';

//style
import "../../../styles/components/HiredPokemon.css"; 
import Spinner from '../../img/spinner5.gif';

function HiredPokemon({ id}) {
    const [spinner, setSpinner] = useState(true);

    const imgSrc = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/" + id + ".svg";
    const [pokemon, setPokemon] = useState(pokemonInit)
    useEffect(() => {
        setSpinner(true);
        obtenerPokemon(id);
    }, [id]);


    const obtenerPokemon = async (id) => {
        const data = await fetch('http://localhost:4000/pokemonOne/' + id)
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
                            <div className="HiredPokemon">
                                <img className="HiredPokemon__img" src={imgSrc} alt="imagen" />
                                <h4 className="HiredPokemon__name ">
                                    {pokemon.name}
                                </h4>
                            </div>
                </Link>}
        </>
    );
}

export default HiredPokemon;