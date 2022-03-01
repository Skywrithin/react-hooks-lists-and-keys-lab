import React from "react";

function ProjectItem({key, name, about, technologies }) {
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {  technologies.map((technologies)=>{return(<span>{technologies}</span>)}) }
      </div>
    </div>
  );
}

export default ProjectItem;
