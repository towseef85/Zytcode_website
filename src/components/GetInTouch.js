import React from 'react'
import { Link } from 'react-router-dom'

function GetInTouch() {
    return (
        <section className="action_area_three sec_pad">
        <div className="curved"></div>
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="action_content text-center">
                        <h2 className="f_600 f_size_30 l_height45 mb_40">We appreciate your interest in ZYTCode. Please Click below link and provide your details to serve you better</h2>
                        
                        
                        <Link className="about_btn wow fadeInRight" data-wow-delay="0.4s" to='/contact' >Contact Us</Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default GetInTouch
