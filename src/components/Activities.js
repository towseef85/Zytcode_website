import React from 'react'

function Activities() {
    return (
        <section className="tracking_activity_area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="media tracking_item">
                            <img src={require ("../img/new-home/activity_icon.png")} alt=""/>
                            <div className="media-body">
                                <a href="/#"><h3 className="h_head">Digital Core Capabilities</h3></a>
                                <p>Build vital capabilities to deliver digital outcomes. </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="media tracking_item">
                            <img src={require ("../img/new-home/time_icon.png")} alt=""/>
                            <div className="media-body">
                                <a href="/#"><h3 className="h_head">Digital Operating Models</h3></a>
                                <p>Adopt accelerators to evolve your way of working.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="media tracking_item">
                            <img src={require ("../img/new-home/analyze_icon.png")} alt=""/>
                            <div className="media-body">
                                <a href="/#"><h3 className="h_head">Navigate New Possibilities</h3></a>
                                <p>Celebrating everyday stories of everyday champions achieving the
                                    intangible. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Activities
