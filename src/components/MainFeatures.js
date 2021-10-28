import React, { Fragment } from "react";
import Typing from "./Typing";
import {Link} from 'react-router-dom'



function MainFeatures() {
  return (
    <section className="software_featured_area_two sec_pad" id="about">
    <div className="container">
        <div className="row">
         
            <div className="col-lg-5 offset-lg-1 d-flex align-items-center pl-0">
                <div className="software_featured_content">
                    <h2 className="f_700 f_size30 l_height_40 w_color f_p mb-30 wow fadeInRight" data-wow-delay="0.2s">
                    WHO WE ARE <br/>
                    <span className="mt-4 d-block"></span>
                    A global leader in next-generation digital services and development
                    </h2>
                    <Typing/>
                    <p className="w_color f_400 mb_50 wow fadeInRight" data-wow-delay="0.4s">ZYTCode is a leading global information technology, consulting and business process services company. We harness the power of cognitive computing, hyper-automation, robotics, cloud, analytics and emerging technologies to help our clients adapt to the digital world and make them successful.</p>
                     <Link className="btn_hover btn_four wow fadeInRight" to='/about' >Learn more</Link>
                </div>
             </div>
             <div className="col-lg-6">
                <div className="software_featured_img wow fadeInLeft" data-wow-delay="0.2s">
                    <img className="img-fluid" src={require("../img/new-home/work2.png")} alt=""/>
                </div>
            </div>
        </div>
    </div>
</section>
  );
}

export default MainFeatures;
