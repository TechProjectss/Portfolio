import React from "react";
import "./Contact.css";


const Contact = () => {
    return (
        <div className="contact-container">
            <nav className="navbar">
                <div className="logo">NsInfo</div>
                <ul className="nav-items">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>

            <div className="contact-wrapper">
                <div className="contact-box">
                    <h2>Let's Connect</h2>
                    <p>
                        If you’re interested in collaborating on a project or just want to talk tech,
                        feel free to get in touch. I’m always open to new opportunities and connections.
                    </p>
                    <form>
                        <div className="input-group">
                            <span>👤</span>
                            <input type="text" placeholder="User Name" required />
                        </div>
                        <div className="input-group">
                            <span>✉️</span>
                            <input type="email" placeholder="Email" required />
                        </div>
                        <div className="input-group">
                            <span>📱</span>
                            <input type="tel" placeholder="Mobile Number" required />
                        </div>
                        <div className="input-group">
                            <span>💬</span>
                            <textarea placeholder="Leave your message" required></textarea>
                        </div>
                        <button type="submit">Send</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
