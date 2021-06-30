import React,{Fragment} from 'react'
import Breadcrums from '../components/Breadcrums'
import ProjectGrid from '../components/ProjectGrid'
import Subscribe from '../components/Subscribe'

function Projects() {
    return (
        <Fragment>
            <Breadcrums breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" Ptitle="Blog Grid" Pdescription="Why I say old chap that is spiffing off his nut arse pear shaped plastered Jeffrey bodge barney some dodgy.!!"/>
            <ProjectGrid/>
            <Subscribe/>
        </Fragment>
    )
}

export default Projects
