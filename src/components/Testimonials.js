import React from 'react'
import Slider from 'react-slick';
import Fade from 'react-reveal/Fade';

const  TestimonialText= [
    {
      id: 1,
      image: "new/member_01.jpg",
      description: "He nicked it hanky panky Eaton naff it's your round quaint cheeky cheers, tomfoolery bonnet posh blimey what a plonker vagabond, zonked Elizabeth give us a bell.?",
      authorName: "Phillip Anthropy",
      authorPost: "UI/UX designer", 
    },
    {
      id: 2,
      image: "new/member_01.jpg",
      description: "He nicked it hanky panky Eaton naff it's your round quaint cheeky cheers, tomfoolery bonnet posh blimey what a plonker vagabond, zonked Elizabeth give us a bell.?",
      authorName: "Phillip Anthropy",
      authorPost: "UI/UX designer", 
    },
    {
      id: 3,
      image: "new/member_01.jpg",
      description: "He nicked it hanky panky Eaton naff it's your round quaint cheeky cheers, tomfoolery bonnet posh blimey what a plonker vagabond, zonked Elizabeth give us a bell.?",
      authorName: "Phillip Anthropy",
      authorPost: "UI/UX designer", 
    },
    {
      id: 4,
      image: "new/member_01.jpg",
      description: "He nicked it hanky panky Eaton naff it's your round quaint cheeky cheers, tomfoolery bonnet posh blimey what a plonker vagabond, zonked Elizabeth give us a bell.?",
      authorName: "Phillip Anthropy",
      authorPost: "UI/UX designer", 
    }
  ]

function Testimonials({tClass}) {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <section className={`${tClass}`} id="testimonials">
        <div className="container">
            <div className="row">
                <div className="col-lg-5 d-flex align-items-center">
                    <div className="testimonial_title">
                        <Fade bottom cascade>
                            <div className="seo_sec_title wow fadeInUp" data-wow-delay="0.3s">
                                <h2>Success Stories</h2>
                                <p>Each tech product we use today is the result of an engineer’s expertise!</p>
                            </div>
                        </Fade>
                        {/* <div className="slider_nav">
                            <i className="ti-angle-left prev" onClick={this.previous}></i>
                            <i className="ti-angle-right next" onClick={this.next}></i>
                        </div> */}
                    </div>
                </div>
                <div className="col-lg-6 offset-lg-1">
                    <div className="stratup_testimonial_info d-flex align-items-center">
                        <Slider  className="testimonial_slider_four" {...settings}>
                            {
                                TestimonialText.map(item =>{
                                    return(
                                        <div className="item" key={item.id}>
                                            <div className="author_img">
                                                <img src={require ("../img/" + item.image)} alt=""/>
                                            </div>
                                            <p>{item.description}</p>
                                            <h5>{item.authorName}</h5>
                                            <h6>{item.authorPost}</h6>
                                        </div>
                                    )
                                })
                            }
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Testimonials
