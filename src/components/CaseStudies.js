import React from 'react'
import Slider from 'react-slick';
import Sectitle from './Title/Sectitle'

const Service= {
    agtext1: 'Why I say old chap that is spiffing bodge, blag pardon.',
    agtext2: 'Why I say old chap that is spiffing bodge, blag pardon.',
    agtext3: 'Starkers dropped a clanger lurgy is cack excuse my French what.',
}

function CaseStudies() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1500,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <div>
       
        <section className="agency_about_area d-flex bg_color padding" id="casestudy">
    
        <div className="col-lg-6 about_content_left">
            <div className="about_content mb_30">
                <h2 className="f_size_30 f_700 l_height45 mb_20">Case Studies & stories</h2>
                <p className="f_size_15 f_400 mb_40">Maximize the value of Cloud and IT infrastructure with solutions that integrate deep industry insights, leading technologies and best-in-class execution</p>
            </div>
        </div>
        <div className="col-lg-6 about_img">
            <a href=".#" className="pluse_icon"><i className="ti-plus"></i></a>
            <Slider className="about_img_slider" {...settings}>
                <div className="item">
                    <div className="about_item w45">
                        <img src={require('../img/home4/team1.jpg')} alt=""/>
                        <div className="about_text">
                            <span className="br"></span>
                            <h5 className="f_size_18 l_height28 mb-0">{Service.agtext1}</h5>
                        </div>
                    </div>
                    <div className="about_item w55">
                        <img src={require('../img/home4/team2.jpg')} alt=""/>
                        <div className="about_text text_two">
                            <span className="br"></span>
                            <h5 className="f_size_18 l_height28 mb-0">{Service.agtext2}</h5>
                        </div>
                    </div>
                    <div className="about_item w55">
                        <img src={require('../img/home4/team2.jpg')} alt=""/>
                        <div className="about_text text_two">
                            <span className="br"></span>
                            <h5 className="f_size_18 l_height28 mb-0">{Service.agtext3}</h5>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="about_item w45">
                        <img src={require('../img/home4/team1.jpg')} alt=""/>
                        <div className="about_text">
                            <span className="br"></span>
                            <h5 className="f_size_18 l_height28 mb-0">{Service.agtext1}</h5>
                        </div>
                    </div>
                    <div className="about_item w55">
                        <img src={require('../img/home4/team2.jpg')} alt=""/>
                        <div className="about_text text_two">
                            <span className="br"></span>
                            <h5 className="f_size_18 l_height28 mb-0">{Service.agtext2}</h5>
                        </div>
                    </div>
                    <div className="about_item w55">
                        <img src={require('../img/home4/team2.jpg')} alt=""/>
                        <div className="about_text text_two">
                            <span className="br"></span>
                            <h5 className="f_size_18 l_height28 mb-0">{Service.agtext3}</h5>
                        </div>
                    </div>
                </div>
                
            </Slider>
        </div>
       
    </section>
    </div>
    )
}

export default CaseStudies
