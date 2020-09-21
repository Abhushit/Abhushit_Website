import React from 'react';
import './HeaderCompo.css';
import { Slide } from "react-awesome-reveal";


function HeaderCompo({name}) {
    return (
        <Slide>
        <div className="headerCompo">
            <h2>{name}</h2>
            <div className="headerCompo__after">

            </div>
        </div>
        </Slide>
    )
}

export default HeaderCompo
