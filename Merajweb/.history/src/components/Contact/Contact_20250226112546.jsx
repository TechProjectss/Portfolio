import React from "react";
import "./Contact.css";

const Contact = () => {
    return (
        <div className="contact-page">
            <div className="overlay">
                <div className="contact-form">
                    <h2>Contact Us</h2>
                    <form>
                        <label>Name:</label>
                        <input type="text" placeholder="Enter your name" required />

                        <label>Email:</label>
                        <input type="email" placeholder="Enter your email" required />

                        <label>Message:</label>
                        <textarea placeholder="Enter your message" required></textarea>

                        <button type="submit">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
