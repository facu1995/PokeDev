import React from 'react'
import { Link } from "react-router-dom";
import { slide as Menu } from 'react-burger-menu'


export const nav_burger = () => {

    const showSettings = (event) => {
        event.preventDefault();
      }


    return (
        <nav className="nav_principal">
        <ul className="nav_principal__ul">
            <Menu>
                <div className="nav_principal__icono" onClick={ showSettings }></div>
                <Link to="/home" className="nav_principal__a">Pokemones</Link>
                <Link to="/moves" className="nav_principal__a">Moves</Link>
                <Link to="/users" className="nav_principal__a">Users</Link>
                <Link to="/" className="nav_principal__a">Sign off</Link>
            </Menu>
        </ul>
        </nav>
    )
}
