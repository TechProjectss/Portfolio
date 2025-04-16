import React from 'react';
import './About.css';
import profileImage from '../assets/profile.jpg';

const About = () => {
    return (
        <div className='about-section container'>
            <div className='about-text'>
                <h1>About Me</h1>
                <p className='intro'>
                    Hi, I'm <strong>Mohammed Kashif</strong>, a dedicated Full-Stack Developer passionate about building intuitive,
                    high-quality digital experiences. With expertise in modern technologies, I transform ideas into innovative
                    and scalable solutions.
                </p>
                <h2>What I Do</h2>
                <p>
                    I specialize in creating highly responsive and visually appealing applications using React Native, React.js,
                    and Node.js. My expertise extends to UI/UX design, ensuring every project is functional, elegant, and user-friendly.
                </p>
                <div className='skills'>
                    <h2>Skills</h2>
                    <ul>
                        <li>React Native & React.js</li>
                        <li>UI/UX Design</li>
                        <li>MongoDB, Node.js</li>
                        <li>API Development</li>
                        <li>Docker & Cloud Services</li>
                    </ul>
                </div>
                <div className='cta'>
                    <p>Looking for a developer to bring your ideas to life?</p>
                    <button className='btn primary'>Let's Work Together!</button>
                </div>
            </div>
            <div className='about-image'>
                <img src={profileImage} alt='Mohammed Kashif' />
            </div>
        </div>
    );
};

export default About;
