import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logosk from "../../assets/logosk1.png";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [visible, setVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > lastScrollY) {
                // Scrolling Down → Show Navbar
                setVisible(true);
            } else {
                // Scrolling Up → Hide Navbar
                setVisible(false);
            }
            setLastScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <nav className={`navbar ${visible ? "visible" : "hidden"}`}>
            <div className="logo-container">
                <img src={logosk} alt="logo" className="logo" />
            </div>
            <ul className={menuOpen ? "nav-items open" : "nav-items"}>
                <li><NavLink to="/" activeclassname="active">Home</NavLink></li>
                <li><NavLink to="/about" activeclassname="active">About</NavLink></li>
                <li><NavLink to="/programs" activeclassname="active">Programs</NavLink></li>
                <li><NavLink to="/projects" activeclassname="active">Projects</NavLink></li>
                <li><NavLink to="/contact" activeclassname="active">Contact Us</NavLink></li>
            </ul>
            <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>☰</div>
        </nav>
    );
};

export default Navbar;
