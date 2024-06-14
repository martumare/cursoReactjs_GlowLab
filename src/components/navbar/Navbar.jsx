import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './navbar.css';

export const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <a href="#" className="navbar-logo">SkincareShop</a>
                <ul className="navbar-menu">
                    <li className="navbar-item"><a href="#" className="navbar-link">Home</a></li>
                    <li className="navbar-item"><a href="#" className="navbar-link">Productos</a></li>
                    <li className="navbar-item"><a href="#" className="navbar-link">Quienes Somos</a></li>
                    <li className="navbar-item"><a href="#" className="navbar-link">Contacto</a></li>
                </ul>
                <div className="navbar-icons">
                    <a href="#" className="navbar-icon">
                        <FontAwesomeIcon icon={faShoppingCart} />
                    </a>
                    <a href="#" className="navbar-icon">
                        <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                    <a href="#" className="navbar-icon">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a href="#" className="navbar-icon">
                        <FontAwesomeIcon icon={faWhatsapp} />
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
