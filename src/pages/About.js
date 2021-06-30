import React, { Fragment } from "react";
import Breadcrums from "../components/Breadcrums";
import CaseStudies from "../components/CaseStudies";
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
        Ptitle="About Us"
        Pdescription="Why I say old chap that is spiffing off his nut arse pear shaped plastered Jeffrey bodge barney some dodgy.!!"
      />
      
      <section className="agency_service_area bg_color">
        <div className="container">
          <h2
            className="f_size_30 f_600 t_color3 l_height40 text-center mb_90 wow fadeInUp"
            data-wow-delay="0.2s"
          >
            You SaasLand wherever your
            <br /> business agency
          </h2>
          <div className="row mb_30">
            <div className="col-lg-4 col-sm-6">
              <Reveal effect="fadeInUp" duration={1100}>
                <div
                  className={`p_service_item agency_service_item pr_70 wow fadeInUp `}
                >
                  <div className="icon">
                    <img src={require("../img/home4/icon_shape1.png")} alt="" />
                    <i className="ti-panel"></i>
                  </div>
                  <h5 className="f_600 f_p t_color3">Export Presets</h5>
                  <p>
                    Why I say old chap that is spiffing bodge, blag pardon me
                    buggered mufty Oxford butty bubble and squeak wind up, brown
                    bread the full monty bloke ruddy.!
                  </p>
                  <p className="mb-0">
                    <a href=".#">Read More</a>
                    <i className="arrow_right"></i>
                  </p>
                </div>
              </Reveal>
            </div>
            <div className="col-lg-4 col-sm-6">
            <Reveal effect="fadeInUp" duration={1400}>
                <div
                  className={`p_service_item agency_service_item pr_70 wow fadeInUp `}
                >
                  <div className="icon">
                    <img src={require("../img/home4/icon_shape1.png")} alt="" />
                    <i className="ti-panel"></i>
                  </div>
                  <h5 className="f_600 f_p t_color3">Export Presets</h5>
                  <p>
                    Why I say old chap that is spiffing bodge, blag pardon me
                    buggered mufty Oxford butty bubble and squeak wind up, brown
                    bread the full monty bloke ruddy.!
                  </p>
                  <p className="mb-0">
                    <a href=".#">Read More</a>
                    <i className="arrow_right"></i>
                  </p>
                </div>
              </Reveal>
            </div>
            <div className="col-lg-4 col-sm-6">
            <Reveal effect="fadeInUp" duration={1700}>
                <div
                  className={`p_service_item agency_service_item pr_70 wow fadeInUp `}
                >
                  <div className="icon">
                    <img src={require("../img/home4/icon_shape1.png")} alt="" />
                    <i className="ti-panel"></i>
                  </div>
                  <h5 className="f_600 f_p t_color3">Export Presets</h5>
                  <p>
                    Why I say old chap that is spiffing bodge, blag pardon me
                    buggered mufty Oxford butty bubble and squeak wind up, brown
                    bread the full monty bloke ruddy.!
                  </p>
                  <p className="mb-0">
                    <a href=".#">Read More</a>
                    <i className="arrow_right"></i>
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
      <Team/>
      <CaseStudies />
      <Clients/>
      <Subscribe/>
    </Fragment>
  );
}

export default About;
