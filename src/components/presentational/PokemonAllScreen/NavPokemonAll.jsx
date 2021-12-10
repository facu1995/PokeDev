
function NavPokemonAll({ offset, limit, setOffset, filtro, setFiltro, cantMaximaPokemon, cantPokemonFetch }) {

    const handleChange = (evt) => {
        setFiltro(evt.target.value);
        setOffset(1);
    }
    function decrementarOffset() {
        if (offset !== 1) {
            setOffset(offset - limit - 1);
        }
    }

    function aumentarOffset() {
        if (filtro === "") {
            if (offset + limit < cantPokemonFetch) {
                setOffset(offset + limit + 1);
            }
        }
        else{
            if (offset + limit < cantMaximaPokemon) {
                setOffset(offset + limit + 1);
            }
        }
    }
    return (
        <>
            <h4>Nav</h4>
            <input type="text" value={filtro} onChange={handleChange} name="filtro" />
            <button className="PokemonAllScreen__btn_back" onClick={decrementarOffset}> atras</button>
            <button className="PokemonAllScreen__btn_next" onClick={aumentarOffset}> siguiente</button>
        </>
    )
}

export default NavPokemonAll;