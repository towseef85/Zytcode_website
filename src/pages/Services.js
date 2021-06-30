import React,{Fragment} from 'react'
import Breadcrums from '../components/Breadcrums'
import HRService from '../components/HRService'
import Clients from '../components/Clients'
import Subscribe from '../components/Subscribe'
import CoreFeatures from '../components/CoreFeatures'

function Services() {
    return (
        <Fragment>
            <Breadcrums breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" Ptitle="Our services" Pdescription="Why I say old chap that is spiffing off his nut arse pear shaped plastered Jeffrey bodge barney some dodgy.!!"/>
            <CoreFeatures/>
            <HRService/>
            <Clients/>
            <Subscribe/>
        </Fragment>
    )
}

export default Services
