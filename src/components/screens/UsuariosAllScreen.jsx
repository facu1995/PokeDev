
import React, { useState, useEffect } from 'react';

import Spinner from '../img/spinner5.gif';
import { MostrarUsers } from "../presentational/UsuariosAllScreen/MostrarUsers";
import Nav from '../nav/nav_principal';
import AddUserFromix from '../presentational/UsuariosAllScreen/AddUserFromix'
//style
import "../../styles/components/UsuariosAllScreen.css";

export const UsuariosAllScreen = ({ users }) => {
    const [spinner, setSpinner] = useState(true);
    const [userAll, setUserAll] = useState([]);
    const [agregarUsuario, setAgregarUsuario] = useState(false);
    const [filtro, setFiltro] = useState("");

    const handleChange = (evt) => {
        setFiltro(evt.target.value);
    }

    useEffect(() => {
        setSpinner(true);
        const obtenerUsers = async () => {
            /* const data = await fetch("https://pokeapi.co/api/v2/move/" + id); */
            const data = await fetch("https://back-poke.herokuapp.com/users/");
            const dataJSON = await data.json();
            setUserAll(dataJSON)
        }
        obtenerUsers();
        setSpinner(false);
    }
        , [agregarUsuario])

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
            {agregarUsuario === false &&
                <>
                    <div className="MovimientosAllScreen__filter">
                        <button className='btn btn-add' onClick={() => setAgregarUsuario(true)} >Add User</button>
                        <input className="filter__input " type="text" value={filtro} onChange={handleChange} name="filtro" placeholder="Search User" />
                    </div>
                    {spinner === true && spinnerOn()}
                    {spinner === false && <MostrarUsers userAll={userAll} filtro={filtro} />}
                </>}
            {agregarUsuario === true && <>
                <div className="MovimientosAllScreen__AddMoveAll">
                    <AddUserFromix setAgregarUsuario={setAgregarUsuario} />
                    <button className="btn btn-form" type="submit" onClick={() => { setAgregarUsuario(false) }}>Back</button>
                </div>
            </>}
        </div>
    </>
    )
}

export default UsuariosAllScreen;