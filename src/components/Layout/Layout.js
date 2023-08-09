import './Layout.css'
import React from 'react'
import Profile from '../Profile/profile'
import About from '../About/About'

const Layout = () => {
    return(
        <>
        <div className='layout'>
            <Profile />
            <About />
        </div>
        </>
    )
}

export default Layout