import React, { Fragment } from "react";
import Breadcrums from "../components/Breadcrums";
import Reveal from "react-reveal/Reveal";
import Clients from "../components/Clients";
import Subscribe from "../components/Subscribe";
import Team from "../components/Team";

function About() {
  return (
    <Fragment>
      <Breadcrums
        breadcrumbClass="breadcrumb_area"
        imgName="breadcrumb/banner_bg.png"
        Ptitle="ABOUT ZYTCODE"
        Pdescription="ZYTCODE CREATES THE MOST STRUCTURED, EFFICIENT SOFTWARE SOLUTIONS TO ELEVATE A WIDE RANGE OF BUSINESSES"
      />
      
      <section className="agency_service_area bg_color">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
            <h2>WHO WE ARE</h2>
            </div>
            <div className="col-lg-7">
            <h4 className="text-dark">ZYTCODE SHAPES THE FUTURE WITH PRODUCTS, SERVICES AND SOLUTIONS THAT BUSINESSES NEED TO UNLOCK TOMORROW. WE’RE A WORLDWIDE COMPANY THAT GENERATES WORLD-CHANGING IDEAS</h4>
            </div>
          </div>
          
        
        
          
        </div>
      </section>
      <section className="event_features_area mb-5">
            <div className="container">
                <div className="hosting_title security_title text-center">
                <h2
            className="f_size_30 f_600 t_color3 l_height40 text-center mb_90 wow fadeInUp mt-5"
            data-wow-delay="0.2s"
          >
            ZYTCODE PHILOSOPHY IS BASED ON THREE PRINCIPLES
          </h2>
          </div>
          <div className="row event_features_inner ">
          <div className="col-lg-4 col-sm-6 mb-5">
                <div className="event_features_item text-center wow fadeInUp">
                    <img src={require ("../img/new-home/meetup.png")} alt=""/>
                    <a href="/#"><h5>CONSTRUCTIVENESS</h5></a>
                    <p>With ZYTCode, innovation comes standard. Clients trust us for our clarity, structure, high performance rate and intuitive functionality across every stage of the software development process. Because if it’s not worth making perfectly, it’s not worth making at all.</p>
                    
                </div>
          </div>
          <div className="col-lg-4 col-sm-6 mb-5">
                <div className="event_features_item text-center wow fadeInUp">
                    <img src={require ("../img/new-home/timer.png")} alt=""/>
                    <a href="/#"><h5>FUTURISM</h5></a>
                    <p>The future is under control. We’re a company of visionaries—people who don’t just pay attention to what’s happening around the globe, but who also provide unique solutions that create real change.</p>
                    
                </div>
          </div>
          <div className="col-lg-4 col-sm-6 mb-5">
                <div className="event_features_item text-center wow fadeInUp">
                    <img src={require ("../img/new-home/leader.png")} alt=""/>
                    <a href="/#"><h5>HUMANISM</h5></a>
                    <p>We’re digital humanists at heart. Our platforms, applications and other IT-products have a singular goal: to make it easy for our clients to take care of their clients. That starts with a human-centered approach to everything we do.</p>
                    
                </div>
          </div>
           
                </div>
                </div>
          </section>
      
      <Clients/>
      {/* <Team/> */}
      <Subscribe/>
    </Fragment>
  );
}

export default About;
