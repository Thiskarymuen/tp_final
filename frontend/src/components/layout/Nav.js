import { Link } from 'react-router-dom';
import React from 'react';

const Nav = (props) => {
    return (

        <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
            <div className="container-sm">
                <Link className="navbar-brand" to="/"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Psi-stylized.svg/1200px-Psi-stylized.svg.png"
                    alt="logo" style={{ height: "75px" }} class="logo py-3"/> Psicología Caballito</Link>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        
                    <li className="nav-item ms-5">
                            <Link className="nav-link text-white fst-italic" to="/">Inicio</Link>
                        </li>
                        <li className="nav-item ms-5">
                            <Link className="nav-link text-white fst-italic" to="/Profesionales">Nuestros Profesionales</Link>
                        </li>
                        <li className="nav-item ms-5">
                            <Link className="nav-link text-white fst-italic" to="/ContactoPage">Contáctanos</Link>
                        </li>
                        <li className="nav-item ms-5">
                            <Link className="nav-link text-white fst-italic" to="/PsicologiaPage">Acerca de la Psicologia</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    );
}

export default Nav