import React from "react";
import "./Programs.css";
import img1 from "../../assets/hero16.jpg"; // Replace with actual image path
import img2 from "../../assets/hero17.jpg"; // Replace with actual image path
import img3 from "../../assets/hero18.jpg"; // Replace with actual image path
import img4 from "../../assets/hero19.jpg"; // Replace with actual image path
import img5 from "../../assets/hero20.jpg"; // Replace with actual image path

const Programs = () => {
    return (
        <section className="programs-section">
            <div className="program-card">
                <img src={img1} alt="Interior Design" className="program-image" />
                <h3 className="program-title">Innovation Inside Out</h3>
                <p className="program-description">
                    NA Architects are unparalleled in Interior Design solutions. It’s not just mind-blowing, it’s mind-bending.
                </p>
            </div>

            <div className="program-card">
                <img src={img2} alt="Skyscraper Design" className="program-image" />
                <h3 className="program-title">Towering Testimonies</h3>
                <p className="program-description">
                    Creating the skyline has been a passion at NA Architects. Buildings that are talked about and clicked across the world.
                </p>
            </div>

            <div className="program-card">
                <img src={img3} alt="Garden Design" className="program-image" />
                <h3 className="program-title">The Circle of Life</h3>
                <p className="program-description">
                    At NA Architects, we have the best of minds who excel in designing both Residencies and Commercial Spaces.
                </p>
            </div>

            <div className="program-card">
                <img src={img4} alt="Eco-Friendly Design" className="program-image" />
                <h3 className="program-title">Sustainable Living</h3>
                <p className="program-description">
                    We focus on eco-friendly and sustainable architecture, creating energy-efficient and green spaces for future generations.
                </p>
            </div>

            <div className="program-card">
                <img src={img5} alt="Smart Homes" className="program-image" />
                <h3 className="program-title">Smart Spaces</h3>
                <p className="program-description">
                    Integrating technology with architecture, we design smart homes and workspaces that enhance convenience and security.
                </p>
            </div>
        </section>
    );
};

export default Programs;
