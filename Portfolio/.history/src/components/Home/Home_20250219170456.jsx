import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <div className='hero container'>
            <div className="hero-text">
                <h1>Bringing Ideas to Reality with Design & Code</h1>
                <h2>Mohammed Kashif | React Native & Full-Stack Developer</h2>
                <p>
                    I specialize in building scalable mobile apps, seamless UI/UX, and API integrations.
                    Looking for a passionate developer? Let’s build something amazing together!
                </p>
                <div className="hero-buttons">
                    <button className="btn primary">View My Work</button>
                    <button className="btn secondary">Hire Me</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
