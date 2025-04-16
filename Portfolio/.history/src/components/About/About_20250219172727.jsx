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
    padding: 60px 20px;
    background: linear-gradient(135deg, #f3f4f6, #ffffff);
    animation: fadeIn 1.5s ease-in-out;
`;

const AboutText = styled.div`
    max-width: 800px;
`;

const AboutImage = styled.img`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s ease-in-out;
    margin-top: 20px;

    &:hover {
        transform: scale(1.1);
    }
`;

const Skills = styled.ul`
    list-style: none;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 20px;
`;

const SkillItem = styled.li`
    display: inline-block;
    background: #3498db;
    color: white;
    padding: 12px 24px;
    border-radius: 25px;
    margin: 10px;
    font-weight: bold;
    font-size: 16px;
    transition: 0.3s;

    &:hover {
        background: #2980b9;
    }
`;

const CTAButton = styled.button`
    background: #27ae60;
    color: white;
    padding: 14px 28px;
    font-size: 18px;
    border: none;
    cursor: pointer;
    border-radius: 8px;
    font-weight: bold;
    transition: all 0.3s ease-in-out;
    margin-top: 30px;

    &:hover {
        background: #2ecc71;
        transform: scale(1.05);
    }
`;

// Fade-in animation
const GlobalStyle = styled.div`
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;

const About = () => {
    return (
        <GlobalStyle>
            <AboutSection>
                <AboutText>
                    <h1>About Me</h1>
                    <p>
                        Hi, I'm <strong>Mohammed Kashif</strong>, a passionate and dedicated <strong>Full-Stack Developer</strong>
                        with expertise in building modern and scalable applications. My journey in development started with
                        curiosity, and now I specialize in crafting high-quality digital experiences.
                    </p>
                    <p>
                        I thrive on solving real-world problems using <strong>React Native, React.js, Node.js</strong>, and <strong>UI/UX Design</strong>.
                        From designing user-friendly interfaces to developing seamless back-end services, I ensure that every
                        project is built with efficiency, creativity, and a focus on user satisfaction.
                    </p>
                    <h2>Skills & Technologies</h2>
                    <Skills>
                        <SkillItem>React Native</SkillItem>
                        <SkillItem>React.js</SkillItem>
                        <SkillItem>UI/UX Design</SkillItem>
                        <SkillItem>Node.js</SkillItem>
                        <SkillItem>MongoDB</SkillItem>
                        <SkillItem>API Development</SkillItem>
                        <SkillItem>Docker & Cloud Services</SkillItem>
                        <SkillItem>JavaScript & TypeScript</SkillItem>
                    </Skills>
                    <CTAButton>Let's Work Together!</CTAButton>
                </AboutText>
                <AboutImage src="/assets/profile.jpg" alt="Mohammed Kashif" />
            </AboutSection>
        </GlobalStyle>
    );
};

export default About;
