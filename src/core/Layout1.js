import React from 'react'
import CustomNavbar from '../components/CustomNavbar'
import Footer from '../components/Footer'

function Layout1({children}) {
    return (
        <div className="body_wrapper">
       <CustomNavbar slogo="sticky_logo" mClass="menu_four" nClass="w_menu" hbtnClass="btn_get_radious menu_custfive"/>
       {children}
        <Footer/>
       </div>
    )
}

export default Layout1
