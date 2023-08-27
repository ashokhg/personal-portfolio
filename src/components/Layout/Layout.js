import './Layout.css'
import React from 'react'
import Nav from '../Nav/nav'
import Profile from '../Profile/profile'
import About from '../About/About'

const Layout = () => {
    return(
        <>
        <div className='layout'>
            <Nav />
            <Profile />
            <About />
            
        </div>
        </>
    )
}

export default Layout