import React from 'react';
import './ProjectDisplay.css';
import InputOutlinedIcon from '@material-ui/icons/InputOutlined';

function ProjectDisplay({image, name, link}) {
    return (
        <div className="projectDisplay">
            <div className="projectDisplay__overlay"></div>
            <img
                src={image}
                alt="project"
            />
            <div className="projectDisplay__content fadeIn-top">
                <h4>{name}</h4>
                <button className="btn-projectDisplay"><a href={link} target="_blank" rel="noopener noreferrer"><InputOutlinedIcon /> Visit Site</a></button>
            </div>
        </div>
    )
}

export default ProjectDisplay
