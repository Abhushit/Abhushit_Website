import React from 'react';
import './AboutIcons.css';

function AboutIcons({icon, name, desc}) {
    return (
        <div className="aboutIcons">
            <div className="aboutIcons_icons">
                {icon}
            </div>
            <h3>{name}</h3>
            <p>{desc}</p>
        </div>
    )
}

export default AboutIcons
