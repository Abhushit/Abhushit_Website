import React from 'react';
import './HeaderCompo.css';
import { Fade } from "react-awesome-reveal";


function HeaderCompo({name}) {
    return (
        <Fade direction='bottom'>
        <div className="headerCompo">
            <h2>{name}</h2>
            <div className="headerCompo__after">

            </div>
        </div>
        </Fade>
    )
}

export default HeaderCompo
