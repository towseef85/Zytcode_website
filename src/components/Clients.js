import React,{Fragment} from 'react'


const posts=[
    {
        "id": 1,
        "image": "c1.jpg",
    },
    {
        "id": 2,
        "image": "c2.jpg",
    },
    {
        "id": 3,
        "image": "c3.jpg",
    },
    {
        "id": 4,
        "image": "c4.jpg",
    },
    {
        "id": 5,
        "image": "c5.jpg",
    },
    {
        "id": 6,
        "image": "c6.jpg",
    },
    {
        "id": 7,
        "image": "c7.jpg",
    },
    {
        "id": 8,
        "image": "c8.jpg",
    },
    {
        "id": 9,
        "image": "c9.jpg",
    },
    {
        "id": 10,
        "image": "c10.jpg",
    },
    {
        "id": 11,
        "image": "c20.png",
    },
    {
        "id": 12,
        "image": "c11.jpg",
    },
    {
        "id": 13,
        "image": "c12.jpg",
    },
    {
        "id": 14,
        "image": "c13.jpg",
    },
    {
        "id": 15,
        "image": "c14.jpg",
    },
    {
        "id": 16,
        "image": "c15.jpg",
    },
    {
        "id": 17,
        "image": "c16.jpg",
    },
    {
        "id": 18,
        "image": "c17.jpg",
    },
    {
        "id": 19,
        "image": "c18.jpg",
    },
    {
        "id": 21,
        "image": "c21.jpg",
    },
    {
        "id": 20,
        "image": "c22.jpg",
    },
    {
        "id": 21,
        "image": "c23.png",
    },
    {
        "id": 19,
        "image": "c24.jpg",
    },
    {
        "id": 19,
        "image": "c25.jpg",
    }
]

function Clients() {
    return (
        <section className="security_customers_logo_area">
        <div className="container">
            <div className="hosting_title analytices_title text-center">
            <h2 className="wow fadeInUp"><span>Our Clients. </span>Our powerful clients ecosystem</h2>
                    <p className="wow fadeInUp" data-wow-delay="0.3s">We embrace the power of change to create long-lasting value 
                    in every direction for our clients.</p>
            </div>
        
            <div className="security_inner">
            <img className="p_absoulte security_leaf_left wow fadeInDown" data-wow-delay="0.8s" src={require("../img/new-home/leaf_clients2.png")} alt=""/>
                    <img className="p_absoulte security_leaf_right wow fadeInDown" data-wow-delay="0.8s" src={require("../img/new-home/leaf_clients1.png")} alt=""/>
                            <div className="row">
                        {posts.map(post =>(
                            <div className="col-lg-2 col-sm-4 col-6" key={post.id}>
                                <a href="" className="analytices_logo wow fadeInUp"><img style={{width:'100%'}} src={require ("../img/clients/" + post.image)} alt=""/></a>
                                </div>
                        ))}
                </div>
                </div>
            
            <div className="text-center">
                <a href="/#" className="er_btn">More Customers</a>
            </div>
        </div>
    </section>
    )
}

export default Clients
