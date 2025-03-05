import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send(
            "service_826xdvs",
            "template_q0oosfi",
            formData,
            "7m8I7DY8fAuqmfzRw"
        )
            .then((response) => {
                console.log("Message Sent Successfully!", response);
                alert("Message sent successfully!");
                setFormData({ name: "", email: "", message: "" });
            })
            .catch((error) => {
                console.error("Error sending message:", error);
                alert("Failed to send message. Please try again.");
            });
    };

    return (
        <div className="contact-page">
            <div className="overlay"></div>

            {/* Left Side Content */}
            <div className="contact-info">
                <h1>Let's Connect</h1>
                <p>Have a project in mind? Reach out to us, and let's build something great together.</p>
                <p>📍 Location: Bengaluru, Karnataka, India</p>
                <p>📧 Email: meraj@gmail.com</p>
                <p>📞 Phone: +91 98765 43223</p>
            </div>

            {/* Contact Form */}
            <div className="contact-form">
                <h2>Contact Us</h2>
                <form onSubmit={handleSubmit}>
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />

                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />

                    <label>Message:</label>
                    <textarea
                        name="message"
                        placeholder="Enter your message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>

                    <button type="submit">Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
