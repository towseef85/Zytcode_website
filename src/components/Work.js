import React from 'react'
import {Link} from 'react-router-dom'

import Sectitle from './Title/Sectitle'

const workData= [
    {
        id: '01',
        icon: 'ti-share-alt one',
        title: 'Integrity',
        p: "Being ethically unyielding and honest and inspiring trust by saying what we mean, matching our behaviors to our words and taking responsibility for our actions.",
    },
    {
        id: '02',
        icon: 'ti-user two',
        title: 'Best People',
        p: "Attracting, developing and retaining the best talent the business, challenging, demonstrating a attitude and fostering a collaborative environment.",
    },
    {
        id: '03',
        icon: 'ti-comments-smiley  three',
        title: 'Client Value',
        p: "Enabling clients to become high-performance businesses and creating long-term relationships by being responsive and relevant and by consistently delivering value.",
    }
]

function Work() {
    return (
        <section className="app_service_area" id="work">
                <div className="container">
                    <Sectitle sClass="sec_title text-center mb_70" Title="Why ZYTCode?" tClass="t_color3" TitleP="We Listen, We Discuss, We Advice"/>
                    <div className="row app_service_info">
                        {
                            workData.map(items => {
                                return(
                                    <div className="col-lg-4"key={items.id}>
                                        <div className="app_service_item wow fadeInUp" data-wow-delay="0.2s">
                                            <i className={`app_icon ${items.icon}`}></i>
                                            <h5 className="f_p f_size_18 f_600 t_color3 mt_40 mb-30">{items.title}</h5>
                                            <p className="f_400 f_size_15 mb-30">{items.p}</p>
                                            
                                            <Link className="learn_btn_two" to='/about' >Learn More <i className="ti-arrow-right"></i></Link>
                                        </div>
                                    </div> 
                                )
                            })
                        }
                    </div>
                </div>
            </section>
    )
}

export default Work
