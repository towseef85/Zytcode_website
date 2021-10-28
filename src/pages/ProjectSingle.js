import React, { Fragment } from "react";
import Featuresitems from "../components/Featuresitems";
import Breadcrums from "../components/Breadcrums";
import { PROJECTS } from "../data/projects";
import { useParams } from "react-router-dom";
import Fade from "react-reveal/Fade";

function ProjectSingle() {
  const { id } = useParams();
  const projectDetails = PROJECTS.find((project) => project.id == id);
  console.log("Project details", projectDetails);
  return (
    <Fragment>
      <Breadcrums
        breadcrumbClass="breadcrumb_area"
        imgName="breadcrumb/banner_bg.png"
        Ptitle={projectDetails.title}
        Pdescription={projectDetails.slug}
      />

      <section className="process_area bg_color sec_pad">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="details_content">
                <div className="sec_title  pt-5 pb-3">
                  <h2 className="f_400 pl-5">{projectDetails.subTitle}</h2>
                  <p className="f_400 ">
                    {" "}
                    <b>Project description:</b> {projectDetails.description}{" "}
                  </p>
                  <h4 className="f_400 pl-5">Approach</h4>
                  <p>{projectDetails.approach}</p>
                  <h4 className="f_400 pl-5">Solution</h4>
                  <p>{projectDetails.solution}</p>
                </div>
              </div>
            </div>
            <div className="col-lg-5 pr_70">
              <div className="job_info">
                <div className="info_head">
                  <i className="ti-receipt"></i>
                  <h6 className="f_p f_600 f_size_18 t_color3">
                    Project Summary
                  </h6>
                </div>
                <div className="info_item">
                  <h6>Location:</h6>
                  <p>{projectDetails.location}</p>
                </div>
                <div className="info_item">
                  <h6>Category:</h6>
                  <p>{projectDetails.category}</p>
                </div>
                <div className="info_item">
                  <h6>Industry:</h6>
                  <p>{projectDetails.industry}</p>
                </div>
                <div className="info_item">
                  <h6>Team Size</h6>
                  <p>{projectDetails.team_size}</p>
                </div>
                <div className="info_item">
                  <h6>Project Status</h6>
                  <p>{projectDetails.project_status}</p>
                </div>
              </div>
            </div>
          </div>
          <section className="seo_partner_logo_area sec_pad">
            <div className="container">
              <div className="seo_sec_title text-center mb_70">
                <Fade bottom>
                  <h2>{projectDetails.technology_Heading}</h2>
                </Fade>
              </div>
              <div className="partner_logo_area_four">
                <div className="row ">
                  {projectDetails.technology_languages.map((i) => (
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
          <div className="container">
                 <div className="subscribe_form_info text-center">
                     <h2 className="f_600 f_size_30 l_height30 t_color3 p-5 mb_50">Do you have similar requirements enter your email we will get back to you</h2>
                     <form action="#" className="subscribe-form">
                         <input type="text" className="form-control" placeholder="Your email"/>
                         <button type="submit" className="btn_hover btn_four mt_40">Submit</button>
                     </form>
                 </div>
            </div>
          {/* <div className="features_info">
                        <h2 className="text-center mt-5">Features</h2>
                        <img className="dot_img" src={require ('../img/home4/divider.png')} alt=""/>
                        <Featuresitems rowClass="row flex-row-reverse" aClass="pr_70 pl_70" fimage="process_1.png" iImg="icon01.png" ftitle="With efficiency to unlock more opportunities" descriptions="Why I say old chap that is spiffing bodge, blag pardon me buggered mufty Oxford butty bubble and squeak wind up, brown bread the full monty bloke ruddy cras tickety-boo squiffy. Starkers dropped a clanger lurgy is cack excuse my French what a plonker blower.!"/>
                        <Featuresitems rowClass="row" aClass="pl_100" fimage="process_2.png" iImg="icon02.png" ftitle="Wuth instant data to keep everyone in the know" descriptions="Why I say old chap that is spiffing bodge, blag pardon me buggered mufty Oxford butty bubble and squeak wind up, brown bread the full monty bloke ruddy cras tickety-boo squiffy. Starkers dropped a clanger lurgy is cack excuse my French what a plonker blower.!"/>
                        <Featuresitems rowClass="row flex-row-reverse" aClass="pr_70 pl_70" fimage="process_3.png" iImg="icon3.png" ftitle="With efficiency to unlock more opportunities" 
                        descriptions="Why I say old chap that is spiffing bodge, blag pardon me buggered mufty Oxford butty bubble and squeak wind up, brown bread the full monty bloke ruddy cras tickety-boo squiffy. Starkers dropped a clanger lurgy is cack excuse my French what a plonker blower.!"/>
                        <Featuresitems rowClass="row" aClass="pl_100" fimage="process_4.png" iImg="icon_04.png" ftitle="With efficiency to unlock more opportunities" 
                        descriptions="Why I say old chap that is spiffing bodge, blag pardon me buggered mufty Oxford butty bubble and squeak wind up, brown bread the full monty bloke ruddy cras tickety-boo squiffy. Starkers dropped a clanger lurgy is cack excuse my French what a plonker blower.!"/>
                        <Featuresitems rowClass="row flex-row-reverse" aClass="pr_70 pl_70" fimage="process_5.png" iImg="icon_05.png" ftitle="With efficiency to unlock more opportunities" 
                        descriptions="Why I say old chap that is spiffing bodge, blag pardon me buggered mufty Oxford butty bubble and squeak wind up, brown bread the full monty bloke ruddy cras tickety-boo squiffy. Starkers dropped a clanger lurgy is cack excuse my French what a plonker blower.!"/>
                        <div className="dot middle_dot"><span className="dot1"></span><span className="dot2"></span></div>
                    </div> */}
        </div>
      </section>
    </Fragment>
  );
}

export default ProjectSingle;
