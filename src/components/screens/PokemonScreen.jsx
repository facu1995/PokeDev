import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

//components
import StatBasePokemon from '../presentational/StatBasePokemon';
//context
import PokemonContext from "../context/PokemonContext";
export const PokemonScreen = () => {

    const { id } = useParams();
    const [pokemon, setPokemon] = useState({
        "abilities": [
            {
                "ability": {
                    "name": "",
                    "url": ""
                },
                "is_hidden": "",
                "slot": 1
            },
            
        ],
        "base_experience": "",
        "forms": [
            {
                "name": "",
                "url": ""
            }
        ],
        "id": 7,
        "is_default": true,
        "location_area_encounters": "",
        "moves": [
            {
                "move": {
                    "name": "",
                    "url": ""
                },
                "version_group_details": [
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "",
                            "url": ""
                        },
                        "version_group": {
                            "name": "",
                            "url": ""
                        }
                    }
                ]
            }
        ],
        "name": "",
        "order": 0,
        "past_types": [],
        "species": {
            "name": "",
            "url": ""
        },
        "stats": [
            {
                "base_stat": 0,
                "effort": 0,
                "stat": {
                    "name": "",
                    "url": ""
                }
            }
        ],
    })
    
    const [evoluciones, setEvoluciones] = useState({ name: [], id: [] });


    const obtenerPokemon = async (id) => {
        const data = await fetch('https://pokeapi.co/api/v2/pokemon/' + id)
        const dataJSON = await data.json();
        setPokemon(dataJSON);
    }
    
    useEffect(() => {
        let evolucionesNameArray = [];

        async function obtenerIdEvolutionPokemon () {
            let i = 0;
            let evolucionesIdArray=[];
            let leng = evolucionesNameArray.length;
            for (; i < leng; i++) {
                let data = await fetch('https://pokeapi.co/api/v2/pokemon-species/' +evolucionesNameArray[i])
                let dataJSON = await data.json();
                evolucionesIdArray.push(dataJSON.id); 
            }
            setEvoluciones({
                name: evolucionesNameArray,
                id: evolucionesIdArray
            });
            
        }
    
        async function obtenerNameEvolutionPokemon (id){
            let data = await fetch('https://pokeapi.co/api/v2/pokemon-species/' + id)
            let dataJSON = await data.json();
            if (dataJSON.evolution_chain.url) {
                data = await fetch(dataJSON.evolution_chain.url)
                dataJSON = await data.json();
                if (dataJSON.chain) {
                    evolucionesNameArray.push(dataJSON.chain.species.name);
                    if (dataJSON.chain.evolves_to[0]) {
                        evolucionesNameArray.push(dataJSON.chain.evolves_to[0].species.name);
                        if (dataJSON.chain.evolves_to[0].evolves_to[0]) {
                            evolucionesNameArray.push(dataJSON.chain.evolves_to[0].evolves_to[0].species.name);
                            if (dataJSON.chain.evolves_to[0].evolves_to[0].evolves_to[0]) {
                                evolucionesNameArray.push(dataJSON.chain.evolves_to[0].evolves_to[0].evolves_to[0].species.name);
                            }
                        }
                    }
                    obtenerIdEvolutionPokemon();
                }
            }
        }
        obtenerPokemon(id);
        obtenerNameEvolutionPokemon(id);
    }, [id]);

    return (
        <>
            <h2>PokemonScreen</h2>
            <h4>id: {pokemon.id}</h4>
            <p>evolucionesNameArray{evoluciones.name}</p>
            <PokemonContext.Provider value={pokemon}>
                <StatBasePokemon evoluciones={evoluciones} />
                {/* <HeaderPokemon />
            <AtaquesPokemon />
            <EnergiaPokemon /> */}
            </PokemonContext.Provider>
        </>
    )
}

export default PokemonScreen;