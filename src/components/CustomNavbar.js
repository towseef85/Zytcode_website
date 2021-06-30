import React from 'react'
import {Link} from 'react-scroll';
import Sticky from 'react-stickynode';

function CustomNavbar({mClass, nClass, cClass, slogo, hbtnClass}) {
    return (
        <Sticky top={0} innerZ={9999} activeClass="navbar_fixed">
        <header className="header_area">
        <nav className={`navbar navbar-expand-lg menu_one ${mClass}`}>
            <div className={`container ${cClass}`}>
                <Link className={`navbar-brand ${slogo}`} to="/">
                    <img src={require("../img/logo34.png")} alt=""/>
                    <img src={require("../img/logo34.png")} alt="logo"/>
                </Link>
                <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="menu_toggle">
                        <span className="hamburger">
                            <span></span>
                            <span></span>
                            <span></span>
                        </span>
                        <span className="hamburger-cross">
                            <span></span>
                            <span></span>
                        </span>
                    </span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className={`navbar-nav menu ml-auto ${nClass}`}>
                        <li className="nav-item">
                            <Link className="nav-link" activeClass="active" to="home" spy={true} smooth={true} offset={0} duration={500}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" activeClass="active" to="about" spy={true} smooth={true} offset={0} duration={1000}>About Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" activeClass="active" to="work" spy={true} smooth={true} offset={-90} duration={1000}>Why Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" activeClass="active" to="casestudy" spy={true} smooth={true} offset={-90} duration={1000}>Case Study</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" activeClass="active" to="services" spy={true} smooth={true} offset={0} duration={1000}>Services</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" activeClass="active" to="projects" spy={true} smooth={true} offset={0} duration={1000}>Projects</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" activeClass="active" to="team" spy={true} smooth={true} offset={-90} duration={1000}>Contact Us</Link>
                        </li>
                    </ul>
                    {/* <a className={`btn_get btn_hover ${hbtnClass}`} href="#get-app">Get Started</a> */}
                </div>
            </div>
        </nav>
        </header>
    </Sticky>
    )
}

export default CustomNavbar
