import React from 'react';
import './SocialMedia.css';

function SocialMedia({icon, iconLink}) {
    return (
        <div className="social__media">
            <a href={iconLink} target="_blank" rel="noopener noreferrer" >{icon}</a>
        </div>
    )
}

export default SocialMedia
