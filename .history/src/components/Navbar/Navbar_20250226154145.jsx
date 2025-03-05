import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logosk from "../../assets/logo.png";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            setVisible(window.scrollY < lastScrollY || window.scrollY < 50);
            lastScrollY = window.scrollY;
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
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#programs">Programs</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact Us</a></li>
            </ul>
            <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>☰</div>
        </nav>
    );
};

export default Navbar;
