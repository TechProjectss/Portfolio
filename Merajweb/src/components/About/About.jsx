import React from 'react';
import styled from 'styled-components';

// Styled Components
const AboutSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    padding: 60px 20px;
    background: #f5f5f5;
    gap: 50px;
    @media (max-width: 768px) {
        flex-direction: column;
        text-align: center;
    }
`;

const AboutText = styled.div`
    max-width: 600px;
    line-height: 1.8;
    color: #333;
`;

const AboutImage = styled.img`
    width: 400px;
    height: 400px;
    border-radius: 20px;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease-in-out;
    &:hover {
        transform: scale(1.05);
    }
`;

const SectionTitle = styled.h1`
    font-size: 36px;
    font-weight: bold;
    color: #444;
    border-left: 5px solid #080824;
    padding-left: 15px;
    margin-bottom: 20px;
`;

const StyledParagraph = styled.p`
    font-size: 18px;
    color: #555;
    line-height: 1.6;
`;

const CTAButton = styled.button`
    background: #080824;
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
        background:rgb(103, 103, 148);
        transform: scale(1.05);
    }
`;

const About = () => {
    return (
        <AboutSection>
            <AboutImage src="/int5.jpg" alt="Luxury Interior Design" />
            <AboutText>
                <SectionTitle>About Us</SectionTitle>
                <StyledParagraph>
                    At <strong>Elite Interiors</strong>, we transform spaces into stunning works of art.
                    Our expert designers blend luxury, functionality, and innovation to craft interiors
                    that truly reflect your personality and style.
                </StyledParagraph>
                <StyledParagraph>
                    Whether it's a modern home, a chic office, or a high-end commercial space, we bring visions to life.
                    With a keen eye for detail and a passion for perfection, we ensure every project exceeds expectations.
                </StyledParagraph>
                <CTAButton>Explore Our Designs</CTAButton>
            </AboutText>
        </AboutSection>
    );
};

export default About;
