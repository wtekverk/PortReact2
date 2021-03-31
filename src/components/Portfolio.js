import React from "react";
import ProjectCard from "./ProjectCard";
import projects from "../projects.json";

function Portfolio() {
  return (
    <main className="container  text">
      <div className="row">
        <h1 >Portfolio</h1>
        <hr />
      </div>
      <section>
        {projects.map((project) => {
          return (
            <ProjectCard
              title={project.title}
              image={project.image}
              info={project.info}
              github={project.github}
              deployed={project.deployed}
              key={project.id}
            />
          );
        })}
      </section>
    </main>
  );
}

export default Portfolio;