import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Home.css";

const slides = [
    { heading: "Bringing Ideas to Reality with Design & Code" },
    { heading: "Building Scalable Mobile & Web Apps" },
    { heading: "Modern UI/UX Design" },
    { heading: "Great work together" },
    { heading: "Let's Build Something Amazing Together!" }
];

const Home = () => {
    const [typedHeading, setTypedHeading] = useState("");
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const headingText = slides[currentSlide]?.heading || ""; // ✅ Prevents undefined
        let headingIndex = 0;

        if (!headingText) return; // ✅ Prevents errors

        setTypedHeading(headingText.charAt(0)); // ✅ Instantly set the first letter

        const headingInterval = setInterval(() => {
            if (headingIndex + 1 < headingText.length) {
                setTypedHeading((prev) => prev + headingText.charAt(headingIndex + 1));
                headingIndex++;
            } else {
                clearInterval(headingInterval); // ✅ Stops interval correctly
            }
        }, 50);

        return () => clearInterval(headingInterval); // ✅ Cleanup interval
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
                {slides.map((slide, index) => (
                    <SwiperSlide key={index} className="hero-slide">
                        <div className="content">
                            <h1>{index === currentSlide ? typedHeading : slide.heading}</h1>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Home;
