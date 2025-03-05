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
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop={true}
                className="hero-slider"
            >
                {/* Slide 1 */}
                <SwiperSlide>
                    <div className="hero-slide">
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
                <SwiperSlide>
                    <div className="hero-slide">
                        <h1>Need a High-Performance Mobile App?</h1>
                        <h2>Expert in React Native & Backend Solutions</h2>
                        <p>
                            Let’s develop a fast, secure, and scalable mobile application with an optimized UI/UX experience.
                        </p>
                        <div className="hero-buttons">
                            <button className="btn primary">See My Work</button>
                            <button className="btn secondary">Let's Talk</button>
                        </div>
                    </div>
                </SwiperSlide>

                {/* Slide 3 */}
                <SwiperSlide>
                    <div className="hero-slide">
                        <h1>Creating Beautiful & Functional Websites</h1>
                        <h2>Web Development & Full-Stack Expertise</h2>
                        <p>
                            Need a custom website or an advanced web app? Let’s bring your vision to life with modern web technologies.
                        </p>
                        <div className="hero-buttons">
                            <button className="btn primary">Explore More</button>
                            <button className="btn secondary">Work With Me</button>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Home;
