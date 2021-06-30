import React from 'react'
import StudySlider from './StudySlider'
import SeoTitle from './Title/SeoTitle'
import { Link } from 'react-router-dom'

function Projects() {
    return (
        <section className="seo_fact_area sec_pad" id="projects">
             <div className="home_bubble">
                        <div className="bubble b_one"></div>
                        <div className="bubble b_three"></div>
                        <div className="bubble b_four"></div>
                        <div className="bubble b_six"></div>
                        <div className="triangle b_eight" data-parallax='{"x": 120, "y": -10}'><img src="../img/seo/triangle_one.png" alt=""/></div>
                    </div>
                    <div className="container">
                        <SeoTitle Title="Our Projects" TitleP="Acting today, building for tomorrow"/>
                        <div className="col-lg-12 text-center">

                        <Link to="/projectSingle" style={{marginTop:"0px"}} className="er_btn text-center">View More</Link>
                        </div>
                        <StudySlider/>
                    </div>
                </section>
    )
}

export default Projects
