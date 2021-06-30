import React from 'react'

const socialIcon =[
    {
      id: 1,
      url: 'https://www.facebook.com/',
      icon: 'ti-facebook',
    },
    {
      id: 2,
      url: '#',
      icon: 'ti-twitter-alt',
    },
    {
      id: 3,
      url: '#',
      icon: 'ti-vimeo-alt',
    },
    {
      id: 4,
      url: '#',
      icon: 'ti-pinterest',
    }
  ]

function Teamitem({teamImage, memberN, memberd}) {
    return (
        <div className="ex_team_item">
                <img src={require ("../img/teams/" + teamImage)} alt="team"/>
                <div className="team_content">
                    <a href=".#">
                        <h3 className="f_p f_size_16 f_600 t_color3">{memberN}</h3>
                    </a>
                    <h5>web designer</h5>
                </div>
                <div className="hover_content">
                    <div className="n_hover_content">
                        <ul className="list-unstyled">
                            {
                                socialIcon.map(item=>{
                                    return(
                                        <li key={item.id}><a href={item.url}><i className={`${item.icon}`}></i></a></li>
                                    )
                                })
                            }
                        </ul>
                        <div className="br"></div>
                        <a href=".#">
                            <h3 className="f_p f_size_16 f_600 w_color">{memberN}</h3>
                        </a>
                        <h5>{memberd}</h5>
                    </div>
                </div>
            </div>
    )
}

export default Teamitem
