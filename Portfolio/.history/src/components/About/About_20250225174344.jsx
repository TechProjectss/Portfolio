import React from 'react';
import styled from 'styled-components';

// Styled Components
const AboutSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    padding: 60px 20px;
    background: linear-gradient(135deg, #f8f9fa, #ffffff);
    gap: 50px;

    @media (max-width: 768px) {
        flex-direction: column;
        text-align: center;
    }
`;

const AboutText = styled.div`
    max-width: 600px;
    line-height: 1.8;
`;

const AboutImage = styled.img`
    width: 350px;
    height: 350px;
    border-radius: 50%;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s ease-in-out;

    &:hover {
        transform: scale(1.1);
    }
`;

const Skills = styled.ul`
    list-style: none;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin-top: 20px;
    gap: 10px;

    @media (max-width: 768px) {
        justify-content: center;
    }
`;

const SkillItem = styled.li`
    background: #080824;
    color: white;
    padding: 10px 20px;
    border-radius: 25px;
    font-weight: bold;
    font-size: 14px;
    transition: all 0.3s ease-in-out;

    &:hover {
        background: #080824;
        transform: translateY(-3px);
    }
`;

const CTAButton = styled.button`
    background: #ffff;
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
        background:#080824;
        transform: scale(1.05);
    }
`;

const About = () => {
    return (
        <AboutSection>
            <AboutImage src="/profile.jpg" alt="Mohammed Kashif" />
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
        </AboutSection>
    );
};

export default About;
