import Image from "next/image";
import Typewriter from 'typewriter-effect';
import project1 from "../../../project1.jpg";
import project2 from "../../../project2.jpg";
import project3 from "../../../project3.jpg";
import project4 from "../../../project4.jpg";
import project5 from "../../../project5.jpg";
import project6 from "../../../project6.jpg";
import project7 from "../../../project7.jpg";
import project8 from "../../../project8.jpg";
import Link from "next/link";
import '../style/projects.css'; // Import the custom CSS

const projects = [
  {
    src: project7,
    alt: "Coffee Website Along AI ChatBot",
    title: "Coffee Website Along AI ChatBot",
    description: " Let's Explore together our Coffee Website with an AI chatbot that helps you find the perfect blend and provides tailored brewing tips and recommendations effortlessly.",
    link: "https://coffeewebsite7.netlify.app/"
  },
  {
    src: project2,
    alt: "Image Search App",
    title: "Image Search App",
    description: "Discover stunning visuals with our Image Search App. Quickly browse, filter, and save images using an intuitive interface designed for effortless exploration, making it easy to find exactly what you need.",
    link: "https://github.com/Adnan-Git-Hub"
  },
  {
    src: project3,
    alt: "Trading Website",
    title: "Trading Website",
    description: "Trade smarter with our secure platform, offering real-time data and intuitive tools. Make informed decisions and execute trades with ease.",
    link: "https://trading-website-seven.vercel.app/"
  },
  {
    src: project4,
    alt: "Table Generator",
    title: "Table Generator",
    description: "Create custom tables effortlessly with our intuitive generator. Design, adjust, and download tables to fit your needs in minutes.",
    link: "https://github.com/Adnan-Git-Hub"
  },
  {
    src: project5,
    alt: "Google Search App",
    title: "Google Search App",
    description: "Find what you're looking for quickly with our powerful search app. Get instant answers and explore a world of information at your fingertips.",
    link: "https://github.com/Adnan-Git-Hub"
  },
  {
    src: project6,
    alt: "Recipe Search App",
    title: "Recipe Search App",
    description: "Discover delicious recipes in seconds with our easy-to-use search app. Find, save, and cook your favorite dishes effortlessly.",
    link: "https://github.com/Adnan-Git-Hub"
  },
  {
    src: project1,
    alt: "Food Website",
    title: "Food Website",
    description: "Enjoy delicious meals made with the freshest ingredients. Each dish is carefully crafted to delight your taste buds. Come and experience great food with us.",
    link: "https://foodwebsite77.netlify.app/"
  },
  {
    src: project8,
    alt: "Weather Forecast App",
    title: "Weather Forecast App",
    description: "Stay prepared with accurate weather forecasts at your fingertips. Get real-time updates and detailed forecasts to plan your day with confidence.",
    link: "https://github.com/Adnan-Git-Hub"
  }
];

const Project = () => {
  return (
    <section className="projects-section">
      <div className="projects-container">
        <div className="projects-header">
          <h1 className="projects-title">
            <span className="projects-title-highlight">P</span>rojects
          </h1>
          <p className="projects-description"></p>
        </div>
        <div className="projects-list">
          {projects.map((project, index) => (
            <div key={index} className="project-card" data-aos="flip-right" data-aos-duration="2000">
              <div className="project-card-content">
                <div className="project-image-wrapper">
                  <Image
                    src={project.src}
                    alt={project.alt}
                    className="project-image"
                    layout="fill"
                  />
                  <div className="project-overlay"></div>
                </div>
                <div className="project-info">
                  <Link href={project.link}>
                    <h1 className="project-title">{project.title}</h1>
                  </Link>
                  <p className="project-description">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Project;
