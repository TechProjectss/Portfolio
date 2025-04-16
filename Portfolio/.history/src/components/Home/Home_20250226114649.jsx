import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className='hero container' style={{ minHeight: "100vh" }}>
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

export default Home;
