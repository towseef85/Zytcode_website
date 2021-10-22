import React from 'react'
import { useState } from 'react';
import Sectitle from './Title/Sectitle';
import { Link } from 'react-router-dom';

function Services() {
    const integrationItem =[
        {
            "id": 100,
            "iImage": "web.png",
            "text": "Web Development"
        },
        {
            "id": 101,
            "iImage": "mobile.png",
            "text": "Mobile Apps"
        },
        {
            "id": 102,
            "iImage": "nicereply-1.png",
            "text": "Ecommerce"
        },
        {
            "id": 103,
            "iImage": "campfire.png",
            "text": "ML & AI"
        },
        {
            "id": 104,
            "iImage": "webhooks.png",
            "text": "Travel"
        },
        {
            "id": 105,
            "iImage": "briteverify.png",
            "text": "Animation"
        }
    ]
    return (
        <section className="support_integration_area" id="services">
                <div className="container">
                    <Sectitle sClass="sec_title text-center mb_70" Title='Services' TitleP='The best path to application development and management is to start in the future – and stay there'/>
                    <div className="row flex-row-reverse">
                        <div className="col-lg-9 col-md-10 col-sm-12">
                            <div className="row">
                                {integrationItem.map(post =>(
                                    <div className="col-lg-4 col-md-4 col-sm-6" key={post.id}>
                                        <Link to="/serviceSingle" className="s_integration_item">
                                            <img src={require ("../img/new-home/" + post.iImage)} alt=""/>
                                            <h5>{post.text}</h5>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-2 col-sm-12">
                            <img className="integration_img" src={require ("../img/new-home/tree.png")} alt=""/>
                        </div>
                    </div>
                </div>
            </section>
    )
}

export default Services
