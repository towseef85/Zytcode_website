import React from 'react'
import SeoTitle from './Title/SeoTitle'

function Subscribe() {
    return (
        <section className="seo_subscribe_area">
        <div className="overlay_img"></div>
        <div className="cloud_img"><img src={require('../img/seo/cloud.png')} alt=""/></div>
        <div className="container">
            <SeoTitle Title="Let's help you navigate your next" TitleP="Please provide the following information about your business needs to help us serve you better."/>
            <form action="#" className="row seo_subscribe_form">
                <div className="input-group col-lg-5 col-md-5 col-sm-6">
                    <input type="email" name="email" id="email" placeholder="Email Address" className="form-control"/>
                </div>
                <div className="input-group col-lg-5 col-md-4 col-sm-6">
                    <input type="number" name="mobile" id="mobile" placeholder="Mobile" className="form-control"/>
                </div>
                <div className="input-group col-lg-2 col-md-3 col-sm-12">
                    <input type="submit" name="submit" value="Lets Connect" className="check-btn"/>
                </div>
            </form>
        </div>
    </section>
    )
}

export default Subscribe
