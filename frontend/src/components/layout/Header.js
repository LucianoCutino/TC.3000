import '../../styles/Layout.css';

import { useRef } from 'react';

import { Link } from "react-router-dom";

const Header = (props) => {

    const checkbox = useRef(null);

    const handleItemClick = e => {
        if (checkbox.current) {
            checkbox.current.checked = false;
        }
    }

    return (
        <header>
            <nav>
                <div className="holder">
                    <input type="checkbox" id="check" ref={checkbox} />
                    <label for="check" class="checkbtn">
                        <i class="fa-solid fa-bars"></i>
                    </label>
                    <a href="/" class="enlance">
                        <img src="img/Logo3.png" alt="" class="logo" />
                    </a>
                    <ul>
                        <li><Link to="/" onClick={handleItemClick}>Inicio</Link></li>
                        <li><Link to="/Institucional" onClick={handleItemClick}>Institucional</Link></li>
                        <li><Link to="/Pilotos" onClick={handleItemClick}>Pilotos</Link></li>
                        <li><Link to="/Calendario" onClick={handleItemClick}>Calendario</Link></li>
                        <li><Link to="/Fotos" onClick={handleItemClick}>Fotos</Link></li>
                        <li><Link to="/Novedades" onClick={handleItemClick}>Novedades</Link></li>
                        <li><Link to="/Contacto" onClick={handleItemClick}>Contacto</Link></li>

                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header;