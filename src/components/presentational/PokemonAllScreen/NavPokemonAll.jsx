
function NavPokemonAll({offset, limit,setOffset,filtro,setFiltro}) {
    
    const handleChange = (evt) => {
        setFiltro(evt.target.value);
    }
    function decrementarOffset() {
        if (offset !== 1) {
            setOffset(offset - limit - 1);
        }
    }

    function aumentarOffset() {
        setOffset(offset + limit + 1);
    }
    return (
        <>
        <h4>Nav</h4>  
        <input type="text" value={filtro} onChange={handleChange}  name="filtro"/>
        <button className="PokemonAllScreen__btn_back" onClick={decrementarOffset}> atras</button>
        <button className="PokemonAllScreen__btn_next" onClick={aumentarOffset}> siguiente</button>
        </>
    )
}

export default NavPokemonAll;