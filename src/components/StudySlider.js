import React from 'react'
import Slider from 'react-slick/';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../data/projects';

function StudySlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };
    return (
        
            <Slider {...settings} className="case_studies_slider">
                {PROJECTS.map(project =>(
                    <div className="iitem">
                    <div className="studies_item">
                        <img src={require('../img/new-home/project/'+project.img_banner)} alt=""/>
                        <div className="text">
                            <Link to={`/projectSingle/${project.id}`}>
                                <h4>{project.title}</h4>
                            </Link>
                            <p>{project.category}</p>
                        </div>
                    </div>
                </div>
                ))}
                 
                    
                   
                   
                </Slider> 
        
    )
}

export default StudySlider
