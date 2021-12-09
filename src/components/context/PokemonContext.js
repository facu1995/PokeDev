import { createContext } from "react";
import pokemonInit from "../initializerJSON/pokemonInitJSON";
const PokemonContext= createContext(pokemonInit);
export default PokemonContext;