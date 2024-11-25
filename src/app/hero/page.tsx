"use client";

import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Image from "next/image";
import me from "../me1.jpg";
import Typewriter from 'typewriter-effect';
import Link from "next/link";
import '../style/hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-left">
          <h1 className="hero-title">
            <div>
              <h1 className="hello-text">HELLO,</h1>
              <Typewriter
                options={{
                  strings: [' I AM ADNAN MASIH'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
          </h1>
          <p className="hero-description">
            I am a full stack developer, and the student of Certified Cloud Native Generative, Agentic, and Robotic AI Engineering, 
            I am passionate about exploring the intersection of business and technology through cloud-applied generative AI engineering. 
            My journey is about mastering the latest AI tools to enhance web development and drive business innovation.
          </p>
          <div className="hero-buttons">
            <button className="github-button">
              <Link href="https://github.com/Adnan-Git-Hub">
                <FaGithub size={26} />
              </Link>
            </button>
            <button className="linkedin-button">
              <Link href="https://www.linkedin.com/in/adnan-rajput/">
                <FaLinkedin size={26} />
              </Link>
            </button> 
          </div>
        </div>
        
        <div className="hero-right">
          <div className="image-container">
            <div className="image-wrapper">
              <Image 
                src={me} 
                alt="me" 
                className="profile-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
