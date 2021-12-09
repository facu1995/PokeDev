import { createContext } from "react";
import pokemonInit from "../screens/pokemonInitJSON";
const PokemonContext= createContext(pokemonInit);
export default PokemonContext;