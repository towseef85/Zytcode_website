import React from 'react'
import CustomNavbar2 from '../components/CustomNavBar2'
import Footer from '../components/Footer'

function Layout2({children}) {
    return (
        <div className="body_wrapper">
              <CustomNavbar2 slogo="sticky_logo" mClass="menu_four" nClass="w_menu ml-auto mr-auto"/>
              {children}
              <Footer/>
        </div>
    )
}

export default Layout2
