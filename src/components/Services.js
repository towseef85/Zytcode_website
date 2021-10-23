import React from 'react'
import { useState, useEffect } from 'react';
import Sectitle from './Title/Sectitle';
import { Link } from 'react-router-dom';
import { SERVICES } from '../data/services';

function Services() {

    return (
        <section className="support_integration_area" id="services">
            <div className="container">
                <Sectitle sClass="sec_title text-center mb_50" Title='Services' TitleP='The best path to application development and management is to start in the future – and stay there' />
                <div className="row flex-row-reverse">
                    <div className="col-lg-9 col-md-10 col-sm-12">
                        <div className="row row-eq-height">
                            {SERVICES.map(service => (
                                <div className="col-lg-4 col-md-4 col-sm-6" key={service.id}>
                                    <Link to={`/serviceSingle/${service.id}`} className="s_integration_item">
                                        <img style={{ maxWidth: '50%' }} src={require("../img/new-home/" + service.img)} alt="" />
                                        <h5>{service.title}</h5>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-2 col-sm-12">
                        <img className="integration_img" src={require("../img/new-home/tree.png")} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services
