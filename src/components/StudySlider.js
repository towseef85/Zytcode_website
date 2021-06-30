import React from 'react'
import Slider from 'react-slick/';
import { Link } from 'react-router-dom';

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
                    <div className="iitem">
                        <div className="studies_item">
                            <img src={require('../img/seo/studies_img_one.jpg')} alt=""/>
                            <div className="text">
                                <Link to='/projectSingle'>
                                    <h4>Brainy Mentor</h4>
                                </Link>
                                <p>Eductaion</p>
                            </div>
                        </div>
                    </div>
                    <div className="iitem">
                        <div className="studies_item">
                            <img src={require('../img/seo/studies_img_two.jpg')} alt=""/>
                            <div className="text">
                            <Link to='/projectSingle'>
                                    <h4>Al Muehi</h4>
                                </Link>
                                <p>Legal Service</p>
                              
                            </div>
                        </div>
                    </div>
                    <div className="iitem">
                        <div className="studies_item">
                            <img src={require('../img/seo/studies_img_three.jpg')} alt=""/>
                            <div className="text">
                            <Link to='/projectSingle'>
                                    <h4>Ai Security</h4>
                                </Link>
                                <p>ML & AI</p>
                                
                            </div>
                        </div>
                    </div>
                    <div className="iitem">
                        <div className="studies_item">
                            <img src={require('../img/seo/studies_img_three.jpg')} alt=""/>
                            <div className="text">
                            <Link to='/projectSingle'>
                                    <h4>Ecommerce</h4>
                                </Link>
                                <p>Online Shopping</p>
                                
                            </div>
                          
                        </div>
                    </div>
                </Slider> 
        
    )
}

export default StudySlider
