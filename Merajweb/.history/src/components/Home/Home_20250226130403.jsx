import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Home.css";

const Home = () => {
    return (
        <div className="hero-container">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 4000 }}
                className="hero-slider"
            >
                {/* Slide 1 */}
                <SwiperSlide className="hero-slide">
                    <div className="content">
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
                </SwiperSlide>

                {/* Slide 2 */}
                <SwiperSlide className="hero-slide">
                    <div className="content">
                        <h1>Building Scalable Mobile & Web Apps</h1>
                        <h2>Performance & User Experience at its Best</h2>
                        <p>
                            From idea to execution, I build fast, secure, and scalable applications tailored for businesses and startups.
                        </p>
                        <div className="hero-buttons">
                            <button className="btn primary">Explore Projects</button>
                            <button className="btn secondary">Contact Me</button>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Home;
