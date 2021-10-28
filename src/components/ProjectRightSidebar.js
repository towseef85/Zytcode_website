import React from 'react'
import { Link } from 'react-router-dom'

function ProjectRightSidebar({ServiceData}) {
    return (
        <div className="blog-sidebar">
               
                <div className="widget sidebar_widget widget_recent_post mt_60">
                    <div className="widget_title">
                        <h3 className="f_p f_size_20 t_color3">Services we offer</h3>
                        <div className="border_bottom"></div>
                    </div>
                    {
                        ServiceData.map(post=>{
                            return(
                                <div className="media post_item" key={post.id}>
                                    <img width="50" src={require('../img/new-home/' + post.img_banner)} alt=""/>
                                    <div className="media-body">
                                        <Link to={`/servicesingle/${post.id}`}>
                                            <h3 className="f_size_16 f_p f_400">{post.title}</h3>
                                        </Link>
                                        
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
               
               
            </div>
    )
}

export default ProjectRightSidebar
