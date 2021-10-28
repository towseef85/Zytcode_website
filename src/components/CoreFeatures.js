import React from 'react'

function CoreFeatures() {
    return (
        <section className="chat_core_features_area sec_pad">
      <div className="container">
        <div className="hosting_title chat_title text-center">
          <h2 className="wow fadeInUp" data-wow-delay="0.2s">
          Understand how to digitize   
            <br />your core to become a <span>truly digital enterprise</span>
          </h2>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="chat_features_item wow fadeInUp">
              <div className="round">
                <div className="round_circle"></div>
                <img
                  className="top_img p_absoulte"
                  src={require("../img/new-home/pluse.png")}
                  alt=""
                />
                <img src={require("../img/new-home/chat.png")} alt="" />
              </div>
              <a href=".#">
                <h4>Whats New</h4>
              </a>
              <p>
              Making customers future ready by accelerating their movement towards a smarter world
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="chat_features_item wow fadeInUp" data-wow-delay="0.2s">
              <div className="round">
                <div className="round_circle two"></div>
                <img
                  className="top_img p_absoulte"
                  src={require("../img/new-home/triangle.png")}
                  alt=""
                />
                <img src={require('../img/new-home/mobile.png')} alt="" />
              </div>
              <a href=".#">
                <h4>Insights</h4>
              </a>
              <p>
              Driving transformational outcomes through API, microservices and integration
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="chat_features_item wow fadeInUp" data-wow-delay="0.4s">
              <div className="round">
                <div className="round_circle three"></div>
                <img
                  className="top_img p_absoulte"
                  src={require("../img/new-home/box.png")}
                  alt=""
                />
                <img src={require('../img/new-home/book.png')} alt="" />
              </div>
              <a href=".#">
                <h4>Our Offerings</h4>
              </a>
              <p>
              Creating digital differentiation with a modernized core, hyper-connected ecosystems and extreme agility
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    )
}

export default CoreFeatures
