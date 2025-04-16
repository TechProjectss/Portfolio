import React, { useState } from "react";
import "./Navbar.css";
import logosk from "../../assets/logosk1.png";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="navbar">
            {/* Menu Icon (Hamburger) */}
            <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
                <i className="fas fa-bars"></i>
            </div>

            {/* Logo */}
            <div className="logo-container">
                <img src={logosk} alt="logo" className="logo" />
            </div>

            {/* Navigation Links */}
            <ul className={menuOpen ? "nav-items open" : "nav-items"}>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#programs">Programs</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact Us</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
