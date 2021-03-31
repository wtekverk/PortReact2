import React from "react";

function ProjectCard(props) {
  return (
    <>
      <div className="row">
        <div className="col-sm-12 ">
          
            <h2>{props.title}</h2>
            <img
              className="float col-sm-12"
              src={require(`../assets/images/${props.image}.png`).default}
              alt="screenshot of project"
            />
            
            <p className="info col-sm-12">{props.info}</p>
            <a href={props.github} className="NavLink" target="_blank" rel="noopener noreferrer">
              GitHub Repo
            </a>
            <br />
            <a href={props.deployed} className="NavLink" target="_blank" rel="noopener noreferrer">
              Deployed Site
            </a>
          </div>
       
      </div>
      <hr />
    </>
  );
}

export default ProjectCard;