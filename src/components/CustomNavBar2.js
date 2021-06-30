import React, {Component} from 'react';
import {Link, NavLink} from 'react-router-dom';
import Sticky from 'react-stickynode';

class CustomNavbar2 extends Component {
    render() {
        var {mClass, nClass, cClass, slogo, hbtnClass} =this.props;
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
                            <li className="nav-item"><NavLink title="Pricing" className="nav-link" to="/">Home</NavLink></li>
                            <li className="nav-item"><NavLink  className="nav-link" to="/services">Services</NavLink></li>
                            <li className="nav-item"><NavLink  className="nav-link" to="/projects">Projects</NavLink></li>
                            <li className="nav-item"><NavLink  className="nav-link" to="/about">About Us</NavLink></li>
                            <li className="nav-item"><NavLink  className="nav-link" to="/contact">Contact</NavLink></li>
                            </ul>
                           
                        </div>
                    </div>
                </nav>
                </header>
            </Sticky>
        );
    }
}

export default CustomNavbar2;