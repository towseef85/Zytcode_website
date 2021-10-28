import React, { Fragment, useEffect } from "react";
import Breadcrums from "../components/Breadcrums";
import { useParams } from "react-router-dom";
import { SERVICES } from "../data/services";
import Sectitle from "../components/Title/Sectitle";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";

function serviceSingle() {
  const { id } = useParams();
  const serviceDetails = SERVICES.find((service) => service.id == id);
  console.log("Service details", serviceDetails);
  return (
    <Fragment>
      <Breadcrums
        breadcrumbClass="breadcrumb_area"
        imgName="breadcrumb/banner_bg.png"
        Ptitle={serviceDetails.title}
        Pdescription={serviceDetails.slug}
      />
      <section className="service_details_area sec_pad">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <h3 className="mb-2 d-block ml-5" style={{ color: "#034ea2" }}>
                {serviceDetails.subtitle}
              </h3>
              <div className="details_content">
                <div className="sec_title">
                  <p className="f_400 f_size_15">
                    {serviceDetails.description}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-5 pr_70">
              <img
                style={{ width: "100%" }}
                className="pt-5"
                src={require("../img/new-home/" + serviceDetails.img_banner)}
              />
            </div>
          </div>
          <section className="app_service_area">
            <div className="container">
              <Sectitle
                sClass="sec_title text-center mb_70"
                Title="Enterprise-Class Development Solutions"
                tClass="t_color3"
                TitleP="Covering every aspect of the entire enterprise application development process"
              />
              <div className="row app_service_info">
                {serviceDetails.types.map((type) => (
                  <div className="col-lg-4" key={type.id}>
                    <div
                      className="app_service_item wow fadeInUp"
                      data-wow-delay="0.2s"
                    >
                      <i className={`app_icon one ${type.icon}`}></i>
                      <h5 className="f_p f_size_18 f_600 t_color3 mt_40 mb-30">
                        {type.title}
                      </h5>
                      <p className="f_400 f_size_15 mb-30">
                        {type.description}
                      </p>
                      <Link to="/contact" className="learn_btn_two">
                        Connect to know more <i className="ti-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <section className="seo_partner_logo_area sec_pad">
            <div className="container">
              <div className="seo_sec_title text-center mb_70">
                <Fade bottom>
                  <h2>{serviceDetails.technology_Heading}</h2>
                  <p>{serviceDetails.technology_description}</p>
                </Fade>
              </div>
              <div className="partner_logo_area_four">
                <div className="row ">
                  {serviceDetails.technology_languages.map((i) => (
                    <div className="col-lg-2" key={i.id}>
                      <img
                        style={{ width: "100%", padding: "10px" }}
                        src={require("../img/new-home/technology/" + i.img)}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
      <section className="chat_get_started_area">
        <div className="container">
          <div className="chat_get_started_content text-center">
            <h2 className="wow fadeInUp" data-wow-delay="0.2s">
              CONTACT US TODAY. LET'S WORK TOGETHER
            </h2>
            <p>
              Not only do we adore your requirements — we know how to fit it
              seamlessly into a business ecosystem.
            </p>
            <Link to="/contact" className="chat_btn btn_hover">
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default serviceSingle;
