import React from "react";
import "./project.css";
import project1 from "../../assets/hero11.jpg"; // Replace with actual images
import project2 from "../../assets/hero12.jpg";
import project3 from "../../assets/hero13.jpg";
import project4 from "../../assets/hero14.jpg";
import project5 from "../../assets/hero15.jpg";
import project6 from "../../assets/hero10.jpg";

const projects = [
    { id: 1, title: "Luxury Villa", image: project1, description: "A premium luxury villa designed with modern aesthetics." },
    { id: 2, title: "Corporate Tower", image: project2, description: "A state-of-the-art corporate skyscraper in the city skyline." },
    { id: 3, title: "Eco-Friendly Home", image: project3, description: "An energy-efficient home designed for sustainability." },
    { id: 4, title: "Smart Office", image: project4, description: "An innovative workspace with smart technology integration." },
    { id: 5, title: "Resort & Spa", image: project5, description: "A relaxing resort with a nature-inspired architectural theme." },
    { id: 6, title: "Urban Apartments", image: project6, description: "A modern apartment complex with a minimalist touch." }
];

const Projects = () => {
    return (
        <section className="projects-section">
            <h2 className="section-title">Our Client Projects</h2>
            <div className="projects-grid">
                {projects.map((project) => (
                    <div key={project.id} className="project-card">
                        <img src={project.image} alt={project.title} className="project-image" />
                        <div className="project-overlay">
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-description">{project.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
