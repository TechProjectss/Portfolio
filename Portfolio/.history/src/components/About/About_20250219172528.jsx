import React from 'react';
import styled from 'styled-components';

// Styled Components
const AboutSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    text-align: center;
    padding: 50px;
    background: white;
    margin-top: 50px;
`;

const AboutImage = styled.img`
    width: 180px;
    height: 180px;
    border-radius: 50%;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease-in-out;

    &:hover {
        transform: scale(1.1);
    }
`;

const Skills = styled.ul`
    list-style: none;
    padding: 0;
`;

const SkillItem = styled.li`
    display: inline-block;
    background: #3498db;
    color: white;
    padding: 10px 20px;
    border-radius: 20px;
    margin: 8px;
    font-weight: bold;
    transition: 0.3s;

    &:hover {
        background: #2980b9;
    }
`;

const About = () => {
    return (
        <AboutSection>
            <h1>About Me</h1>
            <p>Hi, I'm <strong>Mohammed Kashif</strong>, a Full-Stack Developer...</p>
            <h2>Skills</h2>
            <Skills>
                <SkillItem>React Native</SkillItem>
                <SkillItem>UI/UX Design</SkillItem>
                <SkillItem>Node.js</SkillItem>
            </Skills>
            <AboutImage src="/assets/profile.jpg" alt="Mohammed Kashif" />
        </AboutSection>
    );
};

export default About;
