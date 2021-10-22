import React,{Fragment} from 'react'
import Activities from '../components/Activities'
import Banner from '../components/Banner'
import MainFeatures from '../components/MainFeatures'
import Clients from '../components/Clients'
import Work from '../components/Work'
import Testimonials from '../components/Testimonials'
import Services from '../components/Services'
import Subscribe from '../components/Subscribe'
import Projects from '../components/Projects'
import GetInTouch from '../components/GetInTouch'
import CaseStudies from '../components/CaseStudies'

function Home() {
    return (
        <Fragment>
        <Banner/>
        <Activities/>
      
        <MainFeatures/>
        <Work/>
        <Clients/>
        <Subscribe/>
        <Services/>
        <Projects/>
        <CaseStudies/>
        <Testimonials tClass="testimonial_area_four sec_pad"/>
       
        <GetInTouch/>
        </Fragment>
    )
}

export default Home
