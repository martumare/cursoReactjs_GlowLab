import React from 'react';
import './navbar.css';

export const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <a href="#" className="navbar-logo">GlowLab</a>
                <ul className="navbar-menu">
                    <li className="navbar-item"><a href="#" className="navbar-link">Home</a></li>
                    <li className="navbar-item"><a href="#" className="navbar-link">Productos</a></li>
                    <li className="navbar-item"><a href="#" className="navbar-link">Quienes Somos</a></li>
                    <li className="navbar-item"><a href="#" className="navbar-link">Contacto</a></li>
                </ul>
                <div className="navbar-icons">
                    <a href="#" className="navbar-icon"></a>
                    <a href="#" className="navbar-icon"></a>
                    <a href="#" className="navbar-icon"></a>
                    <a href="#" className="navbar-icon"></a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
