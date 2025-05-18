// components/ProjectsList.tsx
import React from "react";
import Project from "./Project";
import projectData from "@/constants/projectsData";
import styles from "./styles/Projects.module.css";

const ProjectsList: React.FC = () => {
  return (
    <section id="projects" className={styles.section}>
      <h2 className={styles.heading}>Projects</h2>
      {projectData.map((project, idx) => (
        <Project key={idx} {...project} />
      ))}
    </section>
  );
};

export default ProjectsList;
