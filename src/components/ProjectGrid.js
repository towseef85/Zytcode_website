import React from 'react'
import ProjectRightSidebar from './ProjectRightSidebar'
import {PROJECTS} from '../data/projects'
import { Link } from 'react-router-dom'
import { SERVICES } from '../data/services'



function ProjectGrid() {
    return (
        <section className="blog_area_two sec_pad">
        <div className="container">
            <div className="row">
                <div className="col-lg-8 blog_grid_info">
                    <div className="row">
                        {PROJECTS.map((project,index) => (

                       
                        <div className="col-lg-6">
        <div className="blog_list_item blog_list_item_two" key={project.id}>
            {/* <Link to={`/projectsingle/${project.id}`} className="post_date">
                <h2>{date} <span>{month}</span></h2>
            </Link> */}
            <a href="blog-single.html"><img className="img-fluid" src={require ("../img/new-home/project/" + project.img_banner)}alt=""/></a>
            <div className="blog_content">
            <Link to={`/projectsingle/${project.id}`}>
                    <h5 className="blog_title">{project.title}</h5>
                </Link>
                <p>{project.description.length > 160 ? project.description.slice(0,160) + "..." : project.description}</p>
                <div className="post-info-bottom">
                    <Link to={`/projectsingle/${project.id}`} className="learn_btn_two">Know more <i className="arrow_right"></i></Link>
                    
                </div>
            </div>
        </div>
    </div>
                        ))}
                        
                    </div>
                    <ul className="list-unstyled page-numbers shop_page_number text-left mt_30">
                        <li><span aria-current="page" className="page-numbers current">1</span></li>
                        <li><a className="page-numbers" href=".#">2</a></li>
                        <li><a className="next page-numbers" href=".#"><i className="ti-arrow-right"></i></a></li>
                    </ul>
                </div>
                <div className="col-lg-4">
                    <ProjectRightSidebar ServiceData={SERVICES}/>
                </div>
            </div>
        </div>
    </section>
    )
}

export default ProjectGrid
