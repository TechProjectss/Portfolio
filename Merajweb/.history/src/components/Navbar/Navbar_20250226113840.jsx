import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom"; // Import NavLink
import "./Navbar.css";
import logosk from "../../assets/logosk1.png";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY < lastScrollY || currentScrollY < 50) {
                setVisible(true);
            } else {
                setVisible(false);
            }
            lastScrollY = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    return (
        <nav className={`navbar ${visible ? "visible" : "hidden"}`}>
            <div className="logo-container">
                <img src={logosk} alt="logo" className="logo" />
            </div>
            <ul className={menuOpen ? "nav-items open" : "nav-items"}>
                <li><NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink></li>
                <li><NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>About</NavLink></li>
                <li><NavLink to="/programs" className={({ isActive }) => isActive ? "active" : ""}>Programs</NavLink></li>
                <li><NavLink to="/projects" className={({ isActive }) => isActive ? "active" : ""}>Projects</NavLink></li>
                <li><NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>Contact Us</NavLink></li>
            </ul>
            <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>☰</div>
        </nav>
    );
};

export default Navbar;
