import React from 'react'
import { SERVICES } from '../data/services';
import Reveal from 'react-reveal/Reveal';
import { Link } from 'react-router-dom';

const Service= [
    {
        id: '1',
        HRtitles : 'Export Presets',
        HRdescription: 'Bog cheeky bugger blow off only a quid grub he legged it porkies tosser young delinquent argy-bargy.',
        Hicon: 'panel',
        rclass : 'pr_70',
        iclass: 'icon_one',
    },
    {
        id: '2',
        HRtitles : 'Grid and Guides',
        HRdescription: 'Bog cheeky bugger blow off only a quid grub he legged it porkies tosser young delinquent argy-bargy.',
        Hicon: 'layout-grid2',
        rclass : 'pl_50 pr_20',
        iclass: 'icon_two',
    },
    {
        id: '3',
        HRtitles : 'Pixel Precision',
        HRdescription: 'Bog cheeky bugger blow off only a quid grub he legged it porkies tosser young delinquent argy-bargy.',
        Hicon: 'fullscreen',
        rclass : 'pl_70',
        iclass: 'icon_three',
    },
    {
        id: '4',
        HRtitles : 'Vector Editing',
        HRdescription: 'Bog cheeky bugger blow off only a quid grub he legged it porkies tosser young delinquent argy-bargy.',
        Hicon: 'vector',
        rclass : 'pr_70',
        iclass: 'icon_four',
    },
    {
        id: '5',
        HRtitles : 'Cloud Service',
        HRdescription: 'Bog cheeky bugger blow off only a quid grub he legged it porkies tosser young delinquent argy-bargy.',
        Hicon: 'cloud-down',
        rclass : 'pl_50 pr_20',
        iclass: 'icon_five',
    },
    {
        id: '6',
        HRtitles : 'Iterate at Speed',
        HRdescription: 'Bog cheeky bugger blow off only a quid grub he legged it porkies tosser young delinquent argy-bargy.',
        Hicon: 'bolt',
        rclass : 'pl_70',
        iclass: 'icon_six',
    }
]

function HRService() {
    const leng=5
    return (
        <section className="prototype_service_info">
                <div className="symbols-pulse active">
                    <div className="pulse-1"></div>
                    <div className="pulse-2"></div>
                    <div className="pulse-3"></div>
                    <div className="pulse-4"></div>
                    <div className="pulse-x"></div>
                </div>
                <section className="agency_service_area bg_color">
                <div className="container">
                    <h2 className="f_size_30 f_600 t_color3 l_height40 text-center mb_90 wow fadeInUp" data-wow-delay="0.2s">Drive continuous improvement by transferring digital skills along with ideas from a cross-section of industries and innovation ecosystems.</h2>
                    <div className="row mb_30">
                    {
                                SERVICES.map((item,index) => {
                                    return(
                        <div className="col-lg-4 col-sm-6">
                       
                                        <Reveal effect="fadeInUp" duration={1100}>
                                            <div className={`p_service_item agency_service_item pr_70 wow fadeInUp`}>
                                                    <div className="icon">
                                                        
                                                        <img src={require (`../img/new-home/icon_shape${item.id > 4 ? item.id-2 : item.id}.png`)} alt=""/>
                                                        <i className={item.icon}></i>
                                                    </div>
                                                    <h5 className="f_600 f_p t_color3">{item.title}</h5>
                                                    <p>{item.description.length > 160 ? item.description.slice(0,160)+"...": item.description}</p>
                                                    <p className="mb-0"><Link to={`/serviceSingle/${item.id}`}>Know more</Link><i className="arrow_right"></i></p>
                                                </div>
                                        </Reveal>
                                
                    </div>
                        )
                    })
                }
                    </div>
                
                </div>
            </section>
            </section>
    )
}

export default HRService
