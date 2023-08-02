import React from 'react';
import './SocialMedia.css';

function SocialMedia({icon, iconLink, title}) {
    return (
        <div className="social__media">
            <a href={iconLink} target="_blank" rel="noopener noreferrer" title={title} >{icon}</a>
        </div>
    )
}

export default SocialMedia
