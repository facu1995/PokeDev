import React, { useEffect, useState } from 'react';
//components
import MostrarMovimientos from '../presentational/MovimientosAllScreen/MostrarMovimientos';
import AddMoveForm from '../presentational/MovimientosAllScreen/AddMoveAll';
//styles
import "../../styles/components/MovimientosAllScreen.css";
import Spinner from '../img/spinner5.gif';
import Nav from '../nav/nav_principal';


export const MovimientosAllScreen = () => {
    const [filtro, setFiltro] = useState("");
    const [movesAll, setmovesAll] = useState([]);
    const [spinner, setSpinner] = useState(true);
    const [agregarMoves, setAgregarMoves] = useState(false);

    const handleChange = (evt) => {
        setFiltro(evt.target.value);
    }

    useEffect(() => {
        setSpinner(true);
        const obtenerMovimientos = async (id) => {
            /* const data = await fetch("https://pokeapi.co/api/v2/move/?offset=0&limit=" + cantMovesFetch); */
            const data = await fetch("http://localhost:4000/moves");
            const dataJSON = await data.json();
            setmovesAll(dataJSON.results);
        }
        obtenerMovimientos();
        setSpinner(false);
    }, [agregarMoves]);

    const spinnerOn = () => {
        return (
            <div className="flex-centerAll">
                <div className="spinner">
                    <div className="spinner__fondo"></div>
                    <img className='spinner__imagen' src={Spinner} alt="foto" />
                </div>
            </div>
        );
    }
    return (<>
        <Nav />
        <div className="MovimientosAllScreen ">
            {agregarMoves === false &&
                <>
                    <div className="MovimientosAllScreen__filter">
                        <button className='btn btn-add' onClick={() => setAgregarMoves(true)} >Add moves</button>
                        <input className="filter__input " type="text" value={filtro} onChange={handleChange} name="filtro" placeholder="Search Move" />
                    </div>
                    {spinner === true && spinnerOn()}
                    {spinner === false && <MostrarMovimientos movesAll={movesAll} filtro={filtro} />}
                </>}
            {agregarMoves === true && <>
                <div className="MovimientosAllScreen__AddMoveAll">
                    <AddMoveForm setAgregarMoves={setAgregarMoves}  />
                    <button className="btn btn-form" type="submit" onClick={() => { setAgregarMoves(false) }}>Back</button>
                </div>
            </>}
        </div>
    </>
    )
}
