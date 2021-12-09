import CardPokemon from "./CardPokemon";

export const MostrarCard = ({ filtro, pokemonArray, offset }) => {
    return (
        pokemonArray.map((el, idx) => {
            return <CardPokemon key={idx} name={el.name} url={el.url} />
        })
    )
}
export default MostrarCard;