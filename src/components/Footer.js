import React from 'react'
import {Link} from 'react-router-dom';
import Reveal from 'react-reveal/Reveal'
import { SERVICES } from '../data/services';
import {PROJECTS} from '../data/projects'

function Footer() {
    return (
        <footer className="new_footer_area bg_color">
        <div className="new_footer_top">
            <div className="container">
                <div className="row">
                <Reveal effect="fadeInLeft" duration={500} key={1}>
                                            <div className="col-lg-3 col-md-6" >
                                                <div className="f_widget company_widget wow fadeInLeft" data-wow-delay="0.2s">
                                                    <h3 className="f-title f_600 t_color f_size_18">Why ZYTCode</h3>
                                                    <p>ZYTCode Creates the most structured, efficient software solutions to elevate a wide range of Businesses </p>
                                                    <form action="#" className="f_subscribe_two mailchimp" method="post">
                                                        <input type="text" name="EMAIL" className="form-control memail" placeholder="Email"/>
                                                        <button className="btn btn_get btn_get_two" type="submit">Subscribe</button>
                                                        <p className="mchimp-errmessage" style={{display: "none"}}></p>
                                                        <p className="mchimp-sucmessage" style={{display: "none"}}></p>
                                                    </form>
                                                </div>
                                            </div>
                </Reveal>
                <Reveal effect="fadeInLeft" duration={500} >
                                        <div className="col-lg-3 col-md-6">
                                            <div className="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.4s">
                                                <h3 className="f-title f_600 t_color f_size_18">Services</h3>
                                                <ul className="list-unstyled f_list">
                                                    {SERVICES.map(service =>(

                                                    <li><Link to={`/serviceSingle/${service.id}`}> {service.title}
                                                        </Link></li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                </Reveal>
                <Reveal effect="fadeInLeft" duration={500} >
                <div className="col-lg-3 col-md-6">
                                            <div className="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.4s">
                                                <h3 className="f-title f_600 t_color f_size_18">Projects</h3>
                                                <ul className="list-unstyled f_list">
                                                    {PROJECTS.map(project => (
                                                        
                                                            <li>
                                                            <Link to={`/projectsingle/${project.id}`}>
                                                            {project.title}
                                                            </Link>
                                                            </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                </Reveal>
                <Reveal effect="fadeInLeft" duration={500} >
                <div className="col-lg-3 col-md-6">
                                            <div className="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.4s">
                                                <h3 className="f-title f_600 t_color f_size_18">Useful Links</h3>
                                                <ul className="list-unstyled f_list">
                                                    <li><Link to="/aboutus">About Us</Link></li>
                                                    <li><Link to="/contact">Contact Us</Link></li>
                                                    <li><Link to="/services">Services</Link></li>
                                                    <li><Link to="/projects">Projects</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                </Reveal>
            </div>
            </div>
            <div className="footer_bg">
                        <div className="footer_bg_one"></div>
                        <div className="footer_bg_two"></div>
             </div>
            </div>
            <div className="footer_bottom">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-sm-7">
                                <p className="mb-0 f_400">ALL RIGHTS RECEIVED</p>
                            </div>
                            <div className="col-lg-6 col-sm-5 text-right">
                                <p>Made with <i className="icon_heart"></i> in <a href="/#">ZYTCODE Solutions</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
    )
}

export default Footer
