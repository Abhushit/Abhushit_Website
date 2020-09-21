import React from 'react';
import './SocialMedia.css';

function SocialMedia({icon, iconLink}) {
    return (
        <div className="social__media">
            <a href={iconLink} target="_blank" >{icon}</a>
        </div>
    )
}

export default SocialMedia
