import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { slide as Menu } from 'react-burger-menu'

const onClickHome = () => {
    document.getElementById('home').scrollIntoView({behavior:'smooth'});
    document.querySelector('.bm-overlay').click()
}
const onClickAbout = () => {
    document.getElementById('about').scrollIntoView({behavior:'smooth'});
    document.querySelector('.bm-overlay').click()
}
const onClickPortfolio = () => {
    document.getElementById('portfolio').scrollIntoView({behavior:'smooth'});
    document.querySelector('.bm-overlay').click()
}
const onClickBlog = () => {
    document.getElementById('blog').scrollIntoView({behavior:'smooth'});
    document.querySelector('.bm-overlay').click()
}
const onClickContact = () => {
    document.getElementById('contact').scrollIntoView({behavior:'smooth'});
    document.querySelector('.bm-overlay').click()
}


function Navbar() {
    const [sticky, setSticky] = useState(false);
    
    const handleScroll = () => {
        const offset = window.scrollY;
        if(offset > 800){
            setSticky(true);
        }else{
            setSticky(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    },[])

    let navClass = ['navbar'];
    if(sticky){
        navClass.push('sticky');
    }

    return (
        <>
        <div className={navClass.join(" ")}>
            <div className="container__">
                <div className="navbar__nav">
                    <ul>
                        <li><a onClick={() => document.getElementById('home').scrollIntoView({behavior:'smooth'})}>HOME</a></li>
                        <li><a onClick={() => document.getElementById('about').scrollIntoView({behavior:'smooth'})}>ABOUT</a></li>
                        <li><a onClick={() => document.getElementById('portfolio').scrollIntoView({behavior:'smooth'})}>PORTFOLIO</a></li>
                        <li><a onClick={() => document.getElementById('blog').scrollIntoView({behavior:'smooth'})}>BLOG</a></li>
                        <li><a onClick={() => document.getElementById('contact').scrollIntoView({behavior:'smooth'})}>CONTACT</a></li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="mobile_nav">
            <Menu left disableCloseOnEsc className="mobile__menu">
            <a onClick={onClickHome}>HOME</a>
            <a onClick={onClickAbout}>ABOUT</a>
            <a onClick={onClickPortfolio}>PORTFOLIO</a>
            <a onClick={onClickBlog}>BLOG</a>
            <a onClick={onClickContact}>CONTACT</a>
            </Menu>
        </div>
        </>
    )
}

export default Navbar
