import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

//components
import AboutPokemon from '../presentational/PokemonScreen/AboutPokemon';
//import PruebaModificarPokemon from '../presentational/PokemonScreen/PruebaModificarPokemon';
/* import PruebaMovimientos from '../presentational/PokemonScreen/PruebaMovimientos'; */
//context
import PokemonContext from "../context/PokemonContext";
//initPokemon
import PokemonInitPokemon from "../initializerJSON/pokemonInitJSON";
//style
import "../../styles/components/PokemonScreen.css";
import StatsPokemon from '../presentational/PokemonScreen/StatsPokemon';
import MoviEvoPokemon from '../presentational/PokemonScreen/MoviEvoPokemon';
import EditPokemon from '../presentational/PokemonScreen/EditPokemon';
import Nav from '../nav/nav_principal';
// import { MyFormulario } from '../presentational/MyPokemonScreen/pruebaFormulario';
// import AddMoveFormula from '../presentational/PokemonScreen/AddMoveForm';

export const PokemonScreen = () => {

    const { id } = useParams();
    const [pokemon, setPokemon] = useState(PokemonInitPokemon)
    const [agregarPokemon, setAgregarPokemon] = useState(false);
    const [species, setSpecies] = useState({ flavor_text_entries: [{ flavor_text: '' }] })

    const [evoluciones, setEvoluciones] = useState({ name: [], id: [], description: [], });


    const obtenerPokemon = async (id) => {
        /* const data = await fetch('https://pokeapi.co/api/v2/pokemon/' + id) */
        const data = await fetch('http://localhost:4000/pokemonOne/' + id)
        const dataJSON = await data.json();
        setPokemon(dataJSON);
    }

    useEffect(() => {
        let evolucionesNameArray = [];
        let descriptionArray = [];
        let evolucionesIdArray = [];

        window.scrollTo(0, 0)  //Para volver al inicio de la pagina cuando hacen click

        async function obtenerDescription() {
            let i = 0;

            let leng = evolucionesNameArray.length;
            for (; i < leng; i++) {
                /*  let data = await fetch('https://pokeapi.co/api/v2/pokemon-species/' + evolucionesIdArray[i]) */
                let data = await fetch('http://localhost:4000/specieOne/' + evolucionesIdArray[i]);
                let dataJSON = await data.json();
                if (dataJSON.flavor_text_entries[0].flavor_text) {
                    descriptionArray.push(dataJSON.flavor_text_entries[0].flavor_text);
                }
            }
            setEvoluciones({
                name: evolucionesNameArray,
                id: evolucionesIdArray,
                description: descriptionArray
            });

        }

        async function obtenerNameEvolutionPokemon(id) {
            let idEvo = 0;
            let data = await fetch('http://localhost:4000/specieOne/' + id)
            let dataJSON = await data.json();
            setSpecies(dataJSON);
            if (dataJSON.evolution_chain.url) {
                let arrayURL = dataJSON.evolution_chain.url.split('/');
                if (arrayURL[6]) {
                    idEvo = arrayURL[6];
                }
                /* data = await fetch(dataJSON.evolution_chain.url) */
                let data = await fetch('http://localhost:4000/evolvesOne/' + idEvo)
                dataJSON = await data.json();
                if (dataJSON.chain) {
                    evolucionesNameArray.push(dataJSON.chain.species.name);
                    arrayURL = dataJSON.chain.species.url.split('/');
                    if (arrayURL[6]) {
                        idEvo = arrayURL[6];
                        evolucionesIdArray.push(idEvo);
                    }
                    if (dataJSON.chain.evolves_to[0]) {
                        evolucionesNameArray.push(dataJSON.chain.evolves_to[0].species.name);
                        arrayURL = dataJSON.chain.evolves_to[0].species.url.split('/');
                        if (arrayURL[6]) {
                            idEvo = arrayURL[6];
                            evolucionesIdArray.push(idEvo);
                        }
                        if (dataJSON.chain.evolves_to[0].evolves_to[0]) {
                            evolucionesNameArray.push(dataJSON.chain.evolves_to[0].evolves_to[0].species.name);
                            arrayURL = dataJSON.chain.evolves_to[0].evolves_to[0].species.url.split('/');
                            if (arrayURL[6]) {
                                idEvo = arrayURL[6];
                                evolucionesIdArray.push(idEvo);
                            }
                            if (dataJSON.chain.evolves_to[0].evolves_to[0].evolves_to[0]) {
                                evolucionesNameArray.push(dataJSON.chain.evolves_to[0].evolves_to[0].evolves_to[0].species.name);
                                arrayURL = dataJSON.chain.evolves_to[0].evolves_to[0].evolves_to[0].species.url.split('/');
                                if (arrayURL[6]) {
                                    idEvo = arrayURL[6];
                                    evolucionesIdArray.push(idEvo);
                                }
                            }
                        }
                    }
                    obtenerDescription();
                }
            }
        }
        obtenerPokemon(id);
        obtenerNameEvolutionPokemon(id);
    }, [id]);

    return (<>
        <Nav />
        <section className='PokemonScreen'>
            {agregarPokemon === false &&
                <>
                    <PokemonContext.Provider value={pokemon}>
                        <AboutPokemon species={species} />
                        <StatsPokemon />
                        <MoviEvoPokemon evoluciones={evoluciones} species={species} setPokemon={setPokemon} />
                        {/* <MyFormulario />   */}
                        {/* <AddMoveFormula setPokemon={setPokemon} /> */}
                        {/* <PruebaModificarPokemon setPokemon={setPokemon}/> */}


                        {/* <PruebaMovimientos  setPokemon={setPokemon}/> */}
                        {/* <HeaderPokemon />
            <AtaquesPokemon />
            <EnergiaPokemon /> */}
                        <button className='btn btn-form' onClick={() => setAgregarPokemon(true)} >Edit Pokemon</button>
                    </PokemonContext.Provider>
                </>}
            {agregarPokemon === true &&
                <>
                    <EditPokemon pokemon={pokemon} setPokemon={setPokemon} />
                    <button className="btn btn-form" type="submit" onClick={() => { setAgregarPokemon(false) }}>Back</button>
                </>
            }
        </section>
    </>
    )
}

export default PokemonScreen;