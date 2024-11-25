"use client";

import 'aos/dist/aos.css'; // Import AOS styles
import { useEffect } from 'react';
import AOS from 'aos';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiTailwindcss, SiTypescript, SiNextdotjs } from 'react-icons/si';
import '../style/skills.css';

interface SkillCardProps {
  title: string;
  description: string;
  colorClass: string;
  svgIcon: React.ReactNode;
  dataAos?: string;
  dataAosDelay?: string;
}

function SkillCard({ title, description, colorClass, svgIcon, dataAos, dataAosDelay }: SkillCardProps) {
  return (
    <div
      className={`skill-card ${colorClass}`}
      data-aos={dataAos}
      data-aos-delay={dataAosDelay}
    >
      <div className={`skill-icon ${colorClass}`}>
        {svgIcon}
      </div>
      <div className="skill-info">
        <h2 className="skill-title">{title}</h2>
        <p className="skill-description">{description}</p>
      </div>
      <div className="skill-overlay" />
    </div>
  );
}

export default function Skills() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="skills-section">
      <div className="skills-container">
        <h1 className="skills-header">
          <span className="skills-highlight">S</span>kills
        </h1>
        <div className="skills-grid">
          <SkillCard
            title="HTML"
            description="HTML is the standard markup language for creating web pages. It provides the basic structure for web documents and helps in defining the content and structure of a web page."
            colorClass="orange-bg"
            svgIcon={<FaHtml5 size={80} className="orange-icon" />}
            dataAos="fade-up"
          />
          <SkillCard
            title="CSS"
            description="CSS is used to style and layout web pages. It controls the look and feel of the web pages, including the design, colors, fonts, and spacing, making them visually appealing."
            colorClass="blue-bg"
            svgIcon={<FaCss3Alt size={80} className="blue-icon" />}
            dataAos="fade-left"
            dataAosDelay="100"
          />
          <SkillCard
            title="Tailwind CSS"
            description="Tailwind CSS is a utility-first CSS framework that allows for rapid design and customization of web pages without writing custom CSS. It promotes consistency and efficiency in styling."
            colorClass="teal-bg"
            svgIcon={<SiTailwindcss size={80} className="teal-icon" />}
            dataAos="fade-right"
            dataAosDelay="200"
          />
          <SkillCard
            title="JavaScript"
            description="JavaScript is a versatile scripting language that enables interactive web features. It is used to create dynamic content, control multimedia, and handle events on web pages."
            colorClass="yellow-bg"
            svgIcon={<FaJsSquare size={80} className="yellow-icon" />}
            dataAos="zoom-in"
            dataAosDelay="300"
          />
          <SkillCard
            title="TypeScript"
            description="TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. It adds static typing to JavaScript, which improves code quality and development experience."
            colorClass="darkblue-bg"
            svgIcon={<SiTypescript size={80} className="darkblue-icon" />}
            dataAos="flip-left"
            dataAosDelay="400"
          />
          <SkillCard
            title="React.js"
            description="React.js is a JavaScript library for building user interfaces. It allows developers to create reusable UI components and manage application state efficiently."
            colorClass="lightblue-bg"
            svgIcon={<FaReact size={80} className="lightblue-icon" />}
            dataAos="flip-right"
            dataAosDelay="500"
          />
          <SkillCard
            title="Next.js"
            description="Next.js is a React framework that provides server-side rendering and static site generation capabilities. It helps in building optimized, fast, and scalable web applications."
            colorClass="gray-bg"
            svgIcon={<SiNextdotjs size={80} className="gray-icon" />}
            dataAos="slide-up"
            dataAosDelay="600"
          />
          <SkillCard
            title="Node.js"
            description="Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows for server-side scripting and building scalable network applications using JavaScript."
            colorClass="green-bg"
            svgIcon={<FaNodeJs size={80} className="green-icon" />}
            dataAos="slide-down"
            dataAosDelay="700"
          />
        </div>
      </div>
    </section>
  );
}
