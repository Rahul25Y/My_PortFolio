import React from "react";
const ProjectCard = ({ title, main }) => {
  return (
    <div className="p-2 md:p-6 flex flex-col w-80.1 bg-[#fefeff] shadow-xl shadow-slate-300 rounded-2xl relative">
    <img className="p-4 duration-300 hover:scale-105" 
    src={'https://img.freepik.com/free-photo/document-marketing-strategy-business-concept_53876-132231.jpg?ga=GA1.1.801591891.1676967160&semt=ais_hybrid'} alt="" />
    <h3 className="px-4 text-xl md:text-2xl font-bold leading-normal">
      {title}
    </h3>
    <p className="px-4 text-sm md:text-md leading-tight py-2">{main}</p>
    <div className="mt-2 p-2 md:p-4 flex gap-2 md:gap-4">
      
    <a
        href="https://github.com/Rahul25Y"
        target="_blank"
        rel="noopener noreferrer"
        className="md:mt-2 text-red py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-110 font-semibold rounded-3xl bg-[#d8e0ff]"
      >
        Source Code
      </a>
    </div>
  </div>
  );
};

export default ProjectCard;
