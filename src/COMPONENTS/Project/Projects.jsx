import React from "react";
import ProjectCard from "./ProjectCard";
import './Projects.css'
const Projects = () => {
  return (
    <div id="projects" className="p-10 md:p-24 text-black">
    {/* Heading */}
    <h1 className="text-2xl md:text-4xl font-bold text-center mb-7">
      My Projects
    </h1>

    {/* Grid of Projects */}
    <div
      className="
        grid gap-6 
        grid-cols-1 
        sm:grid-cols-2 
        lg:grid-cols-3
      "
    >
      <ProjectCard
        title="Blogging Website"
        main="Built a Blogging Website where users can view and post blogs, using React.js, JavaScript, HTML, and CSS. Managed version control with Git/GitHub."
      />
      <ProjectCard
        title="TrendyNews"
        main="'TrendyNews' a responsive news platform that displays trending blogs. Features include blog addition, a blog list view, detailed blog pages.Built with React.js."
      />
      <ProjectCard
        title="Review Rating"
        main="Company Review Rating platform for users to share reviews. Technologies used: React.js, Version control with Git/GitHub."
      />
    </div>
  </div>
  );
};

export default Projects;
