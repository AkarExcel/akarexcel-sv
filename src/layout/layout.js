import React, { Children } from 'react'
import Footer from './Footer.svelte'
import Navbar from './Navbar.svelte'



const Layout = ({ children }) => {

  return (
    <>
    {/* <Navbar/> */}
    {/* Preloader */}
    {/* <div className="preloader-bg" />
    <div id="preloader">
        <div id="preloader-status">
        <div className="preloader-position loader">
            {" "}
            <span />{" "}
        </div>
        </div>
    </div> */}
    {/* Cursor */}
    <div className="cursor js-cursor" />

    <main>{children}</main>
      <Footer />
    </>
    
  )
}

export default Layout