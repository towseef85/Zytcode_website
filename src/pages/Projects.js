import React,{Fragment} from 'react'
import Breadcrums from '../components/Breadcrums'
import ProjectGrid from '../components/ProjectGrid'
import Subscribe from '../components/Subscribe'

function Projects() {
    return (
        <Fragment>
            <Breadcrums breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" Ptitle="Projects" Pdescription="EXPLORE AND LEARN MORE ABOUT SOME OF ZYTCode's RECENTLY DELIVERED PROJECTS"/>
            <ProjectGrid/>
            <div className="mt-5">
            <Subscribe/>
            </div>
        </Fragment>
    )
}

export default Projects
