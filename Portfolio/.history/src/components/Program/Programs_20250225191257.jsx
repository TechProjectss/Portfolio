import React from "react";
import "./Programs.css";
import img1 from "../../assets/hero16.jpg"; // Replace with actual image path
import img2 from "../../assets/hero17.jpg"; // Replace with actual image path
import img3 from "../../assets/hero18.jpg"; // Replace with actual image path

const Programs = () => {
    return (
        <section className="programs-section">
            <div className="program-card">
                <img src={img1} alt="Interior Design" className="program-image" />
                <h3 className="program-title">Innovation Inside Out</h3>
                <p className="program-description">
                    NA Architects are unparalleled in Interior Design solutions. It’s not
                    just mind-blowing, it’s mind-bending.
                </p>
            </div>

            <div className="program-card">
                <img src={img2} alt="Skyscraper Design" className="program-image" />
                <h3 className="program-title">Towering Testimonies</h3>
                <p className="program-description">
                    Creating the skyline has been a passion at NA Architects. Buildings
                    that are talked about and clicked across the world. Creations that
                    become landmarks.
                </p>
            </div>

            <div className="program-card">
                <img src={img3} alt="Garden Design" className="program-image" />
                <h3 className="program-title">The Circle of Life</h3>
                <p className="program-description">
                    At NA Architects, we have the best of minds who excel in designing
                    both Residencies and Commercial Spaces. Yes, Home-Office-Home just got
                    exciting.
                </p>
            </div>
            <div className="program-card">
                <img src={img3} alt="Garden Design" className="program-image" />
                <h3 className="program-title">The Circle of Life</h3>
                <p className="program-description">
                    At NA Architects, we have the best of minds who excel in designing
                    both Residencies and Commercial Spaces. Yes, Home-Office-Home just got
                    exciting.
                </p>
            </div>

        </section>
    );
};

export default Programs;
