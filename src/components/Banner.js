import React,{Fragment} from "react";
import Reveal from "react-reveal/";
import Snow from "./snow";
import { Link } from "react-router-dom";
function Banner() {
  return (
    <Fragment>
    <Snow/>
    <section className="startup_banner_area_three" id="home">
      
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <Reveal bottom cascade duration={1100}>
              <div className="startup_content_three">
                <h2>
                  <span>Get the future you want</span> 
                </h2>
                <p>
                INSPIRED TO REIMAGINE A POSITIVE FUTURE POWERED BY INNOVATION
                </p>
              
               <Link className="btn_six slider_btn" to='/contact'>Get Started</Link>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
      <div className="stratup_app_screen">
        <div className="infinite">
          <div className="road"></div>
        </div>
        <div className="box">
          <div className="square"></div>
        </div>
        {/* <Reveal effect="slideInnew"><img className="phone" src={require('../img/new/0222.png')} alt=""/></Reveal>
            <Reveal effect="slideInnew"><img className="laptop" src={require('../img/new/0111.png')} alt=""/></Reveal> */}
      </div>
    </section>
    </Fragment>
  );
}

export default Banner;
