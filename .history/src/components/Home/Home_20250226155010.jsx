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
        subheading: " ",
        description: " "
    },
    {
        heading: "Building Scalable Mobile & Web Apps",
        subheading: " ",
        description: " "
    },
    {
        heading: "Modern UI/UX Design",
        subheading: " ",
        description: " "
    },
    {
        heading: "API Integrations & Security",
        subheading: " ",
        description: " "
    },
    {
        heading: "Let's Build Something Amazing Together!",
        subheading: " ",
        description: " "
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
