import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Home.css";

const slides = [
    {
        heading: "Bringing Ideas to Reality with Design & Code",
        subheading: "Mohammed Kashif | React Native & Full-Stack Developer",
        description: "I specialize in building scalable mobile apps, seamless UI/UX, and API integrations. Looking for a passionate developer? Let’s build something amazing together!"
    },
    {
        heading: "Building Scalable Mobile & Web Apps",
        subheading: "Performance & User Experience at its Best",
        description: "From idea to execution, I build fast, secure, and scalable applications tailored for businesses and startups."
    },
    {
        heading: "Modern UI/UX Design",
        subheading: "Creating Interactive & User-Friendly Interfaces",
        description: "I design intuitive and visually appealing user interfaces that enhance user engagement and experience."
    },
    {
        heading: "API Integrations & Security",
        subheading: "Secure, Fast, & Scalable Backend Development",
        description: "I integrate APIs with a focus on performance, security, and scalability to ensure a seamless experience."
    },
    {
        heading: "Let's Build Something Amazing Together!",
        subheading: "Contact me to discuss your next big idea",
        description: "Looking for a skilled developer? Let's collaborate and turn your vision into reality."
    }
];

const Home = () => {
    const [typedHeading, setTypedHeading] = useState("");
    const [typedSubheading, setTypedSubheading] = useState("");
    const [typedDescription, setTypedDescription] = useState("");
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        let headingIndex = 0;
        let subheadingIndex = 0;
        let descriptionIndex = 0;
        let headingText = slides[currentSlide].heading;
        let subheadingText = slides[currentSlide].subheading;
        let descriptionText = slides[currentSlide].description;

        setTypedHeading("");
        setTypedSubheading("");
        setTypedDescription("");

        const headingInterval = setInterval(() => {
            if (headingIndex < headingText.length) {
                setTypedHeading((prev) => prev + headingText[headingIndex]);
                headingIndex++;
            } else {
                clearInterval(headingInterval);
                const subheadingInterval = setInterval(() => {
                    if (subheadingIndex < subheadingText.length) {
                        setTypedSubheading((prev) => prev + subheadingText[subheadingIndex]);
                        subheadingIndex++;
                    } else {
                        clearInterval(subheadingInterval);
                        const descriptionInterval = setInterval(() => {
                            if (descriptionIndex < descriptionText.length) {
                                setTypedDescription((prev) => prev + descriptionText[descriptionIndex]);
                                descriptionIndex++;
                            } else {
                                clearInterval(descriptionInterval);
                            }
                        }, 20);
                    }
                }, 20);
            }
        }, 40);

        return () => {
            clearInterval(headingInterval);
        };
    }, [currentSlide]);

    return (
        <div className="hero-container">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000 }}
                className="hero-slider"
                onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
            >
                {slides.map((_, index) => (
                    <SwiperSlide key={index} className="hero-slide">
                        <div className="content">
                            <h1>{index === currentSlide ? typedHeading : ""}</h1>
                            <h2>{index === currentSlide ? typedSubheading : ""}</h2>
                            <p>{index === currentSlide ? typedDescription : ""}</p>
                            <div className="hero-buttons">
                                <button className="btn primary">Explore Projects</button>
                                <button className="btn secondary">Contact Me</button>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Home;
