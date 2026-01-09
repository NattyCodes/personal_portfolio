'use client'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import pageStyles from '../styles/page.module.scss';
import ProjectCard from "./_components/ProjectCard/ProjectCard";
import projects from "./_components/Projects/projects";
import technologies from "./_components/Technologies/technologies";
import TechnologyCard from "./_components/TechnologyCard/TechnologyCard";

export default function Home() {
  return (
      <div>
        <div className={pageStyles.about}>
          <div className={pageStyles.introduction} id="about">
            <p>Hello my Name is </p>
            <p>Nathan Romphf</p>
            <p>I am a new software engineer with a passion for complex problem solving</p>
          </div>
        </div>
        <div className={pageStyles.projects} id="projects">
          {Array.isArray(projects) && projects.map((project, index) =>
            <ProjectCard project={project} flipped={index % 2 == 1} key={project.title}/>
          )}
        </div>
        <div className={pageStyles.technologies} id="technologies">
          <h1>Technologies</h1>
          <div className={pageStyles.technologiesList}>
            {Array.isArray(technologies) && technologies.map(technology =>
              <TechnologyCard key={technology.name} technology={technology}/>
            )}
          </div>
        </div>
        <div className={pageStyles.contact} id="contact">
          <h1>Contact Me</h1>
          <div>
            <p>
              Please feel free to reach out to me by email at nathan.romphf@gmail.com or click the icons below to explore my work and professional network
            </p>
          </div>
          <div className={pageStyles.contactIcons}>
            <FaGithub size={50} onClick={() => window.open('https://github.com/NattyCodes')}/>
            <FaLinkedin size={50} onClick={() => window.open('https://www.linkedin.com/in/nathan-romphf-9570b9235/')}/>
          </div>
        </div>
      </div>
  );
}
