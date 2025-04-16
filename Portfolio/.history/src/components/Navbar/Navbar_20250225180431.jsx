import React, { useState } from 'react';
import './Navbar.css';
import logosk from '../../assets/logosk1.png';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="navbar">
            <div class="menu-icon">
                <i class="fas fa-bars"></i>
            </div>
            <div className="logo-container">
                <img src={logosk} alt="logo" className="logo" />
            </div>
            <ul className={menuOpen ? "nav-items open" : "nav-items"}>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#programs">Programs</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact Us</a></li>
            </ul>
            <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
                ☰
            </div>
        </nav>
    );
};

export default Navbar;
