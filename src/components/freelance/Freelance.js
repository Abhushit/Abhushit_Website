import React from 'react'
import "./Freelance.css";
import HeaderCompo from '../headerCompo/HeaderCompo';
import Fiver from './../../images/fiverr.jpg'
import Freelancer from './../../images/freelancer.jpg'

const Freelance = () => {
  return (
    <div className='freelance'>
        <div className='container__'>
            <HeaderCompo name="Freelance Platforms" />
            <div className='freelance__div'>
                <div>
                    <a href="https://www.fiverr.com/abhush11" target="_blank" title='Fiverr'>
                        <img src={Fiver} alt="fiverr" />
                    </a>
                </div>
                <div>
                    <a href="https://www.freelancer.com/u/Abhushit" target="_blank" title="Freelancer">
                        <img src={Freelancer} alt="freelancer" />
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Freelance