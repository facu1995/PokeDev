import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
//style
import "./style.css";
import "../../../styles/components/nav_principal.css";
export default function Nav() {

  const [active, setActive] = useState(false)
  function showLinks() {
    if(active) {
      setActive(false);
    }
    else {
      setActive(true);
    }
  }


  return (
    <Fragment>
      <nav>
        <div className="container">
          <ul>
            <div className="nav_principal__icono "></div>
          </ul>
          <ul id="subnav" className="nav">
            <li><button onClick={showLinks} id="prueba"><i id="hamburger" className={active === false ? 'fas fa-bars' : 'fas fa-times'}></i></button></li>
          </ul>
          <ul id="nav-links" className={active === false ? 'nav_principal__list' : 'nav_principal__list active'} >
            <li className="nav_principal__li"><Link to="/home" className="nav_principal__a">Pokemones</Link></li>
            <li className="nav_principal__li"><Link to="/moves" className="nav_principal__a">Moves</Link></li>
            <li className="nav_principal__li"><Link to="/users" className="nav_principal__a">Users</Link></li>
            <li className="nav_principal__li"><Link to="/" className="nav_principal__a">Sign off</Link></li>
          </ul>
        </div>
      </nav>
    </Fragment>
  );
}