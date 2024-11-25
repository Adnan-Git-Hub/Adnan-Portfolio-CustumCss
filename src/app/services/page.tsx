"use client";

import { FaCode, FaPaintBrush, FaMobileAlt } from 'react-icons/fa';
import Link from "next/link";
import '../style/services.css'; // Import the custom CSS

export default function Services() {
  return (
    <>
      <section className="services-section">
        <div className="services-container">
          <div className="services-header">
            <h1 className="services-title">
              <span className="services-title-highlight">S</span>ervices
            </h1>
          </div>
          <div className="services-cards">
            {/* Web Development Card */}
            <div className="service-card" data-aos="zoom-in-up" data-aos-duration="1000">
              <div className="service-icon service-icon-web">
                <FaCode size={40} />
              </div>
              <div className="service-info">
                <h2 className="service-title">Web Development</h2>
                <p className="service-description">
                  Expert web development services to bring your ideas to life. From conceptualization to deployment, I craft robust, scalable, and secure web applications that meet your business needs. With proficiency in modern technologies and frameworks, I deliver high-quality solutions that drive results.
                </p>
              </div>
            </div>
            {/* Web Design Card */}
            <div className="service-card" data-aos="zoom-in-up" data-aos-duration="1200">
              <div className="service-icon service-icon-design">
                <FaPaintBrush size={40} />
              </div>
              <div className="service-info">
                <h2 className="service-title">Web Design</h2>
                <p className="service-description">
                  Creative web designing solutions to captivate your audience. I design visually stunning, user-friendly, and engaging websites that reflect your brand identity. With a focus on aesthetics and functionality, I create websites that leave a lasting impression and drive business growth.
                </p>
              </div>
            </div>
            {/* Responsive Web Design Card */}
            <div className="service-card" data-aos="zoom-in-up" data-aos-duration="1400">
              <div className="service-icon service-icon-responsive">
                <FaMobileAlt size={40} />
              </div>
              <div className="service-info">
                <h2 className="service-title">Responsive Web Design</h2>
                <p className="service-description">
                  Responsive web design services to ensure seamless user experiences across devices. I craft mobile-friendly, tablet-friendly, and desktop-friendly websites that adapt to any screen size, ensuring optimal viewing and interaction. With responsive design, your website will be accessible and engaging for all users.
                </p>
              </div>
            </div>
          </div>
          <Link href="../contact">
            <button className="contact-btn">
              CONTACT ME
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}
