import React from "react";
import "./Contact.css";

const Contact = () => {
    return (
        <div className="contact-page">
            <div className="overlay"></div>

            {/* Left Side Content */}
            <div className="contact-info">
                <h1>Let's Connect</h1>
                <p>Have a project in mind? Reach out to us, and let's build something great together.</p>
                <p>📍 Location: Bengaluru, Karnataka, India</p>
                <p>📧 Email: meraj@gmail.com.com</p>
                <p>📞 Phone: +91 98765 43223</p>
            </div>

            {/* Contact Form */}
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
    );
};

export default Contact;
