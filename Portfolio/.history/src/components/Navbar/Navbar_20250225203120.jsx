import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logosk from "../../assets/logosk1.png";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [visible, setVisible] = useState(true);
    let timeoutId = null;

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            setVisible(true); // Show navbar when scrolling
            clearTimeout(timeoutId); // Reset timer

            timeoutId = setTimeout(() => {
                setVisible(false); // Hide navbar after 3 seconds of inactivity
            }, 3000);

            lastScrollY = window.scrollY;
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            clearTimeout(timeoutId);
        };
    }, []);

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
