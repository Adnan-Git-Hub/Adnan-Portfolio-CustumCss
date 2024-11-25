"use client";

import Image from "next/image";
import me from "../../../About.jpg";
import Link from "next/link";
import Typewriter from "typewriter-effect";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import "../style/about.css";

const About = () => {
  return (
    <>
      <section className="about-section">
        <div className="about-container">
          {/* Profile Image */}
          <div className="profile-image-wrapper">
            <Image
              src={me}
              alt="me2"
              height={400}
              width={400}
              className="profile-image"
              data-aos="zoom-in"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            />
            {/* Circular Background Decoration */}
            <div className="circular-decoration"></div>
          </div>

          {/* Text Content */}
          <div className="about-text-content">
            <h1 className="about-title">
              <span className="highlighted-letter">A</span>bout Me
            </h1>
            <h2
              className="about-subtitle"
              data-aos="fade-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1500"
            >
              <Typewriter
                options={{
                  strings: ["Crafting My Tech and Business Journey!"],
                  autoStart: true,
                  loop: true,
                }}
              />
              <div className="underline-animation"></div>
            </h2>
            <p
              className="about-description"
              data-aos="fade-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              I am an experienced fullstack developer, currently expanding my expertise by learning Next.js for both backend and frontend development.
              My journey in tech was significantly shaped by completing HTML, CSS, JAVASCRIPT, TYPESCRIPT, REACT, TAILWIND, NODE.JS and NEXT.JS course at the Governor Sindh IT Initiative (GIAIC). 
              It was here that I also embarked on learning Certified Cloud Native Generative,
              Agentic, and Robotic AI Engineering with cutting-edge technologies.
              I am passionate about learning to build custom GPTs, AI Agents, Humanoids, and fine-tune LLMs ...
            </p>
            <div className="social-links">
              <button className="social-button facebook">
                <Link href="https://www.facebook.com/adnan3301">
                  <FaFacebookF size={26} />
                </Link>
              </button>
              <button className="social-button instagram">
                <Link href="https://www.instagram.com/">
                  <FaInstagram size={26} />
                </Link>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
