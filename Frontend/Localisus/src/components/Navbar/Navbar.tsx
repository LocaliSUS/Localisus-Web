import { NavLink } from "react-router-dom";
import "./Navbar.css"

export const Navbar = () => {
    return (
        <>
            <header className="elementos-cabecalho-hero">
                <ul className="navbar-hero">
                    <li>
                        <h1 id="letreiro">
                            LOCALISUS
                        </h1>
                        <p>Saúde perto de você</p>
                    </li>
                    <NavLink to="/" className="nav-item">
                        <li id="home-navbar">Home</li>
                    </NavLink>
                    <NavLink to="/contato" className="nav-item">
                        <li id="contato-navbar">Contato</li>
                    </NavLink>
                    <NavLink to="/sobre" className="nav-item">
                        <li id="sobre-navbar">Sobre</li>
                    </NavLink>
                    <NavLink to="/Login" className="nav-item">
                        <button id="botao-conhecer">
                            Entrar
                        </button>
                    </NavLink>
                </ul>
            </header>
        </>
    )
}

export default Navbar


