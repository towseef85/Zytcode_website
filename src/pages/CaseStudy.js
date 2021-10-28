import React,{Fragment} from 'react'
import Breadcrums from '../components/Breadcrums'

export default function CaseStudy() {
    return (
        <Fragment>
            <Breadcrums breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" Ptitle="Case study" Pdescription="Best solution for any business challenges"/>
            <div className="container text-center mt-4">
            <img src={require ("../img/new-home/tracking_banner_img.png")} alt=""/>
                <h1 className="text-center mt-5">Under Construction</h1>
            </div>
        </Fragment>
    )
}
