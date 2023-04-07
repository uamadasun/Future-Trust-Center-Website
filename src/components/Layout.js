import React from 'react'
import  Footer  from './Footer'
import  NavBar  from './NavBar'

const Layout = ({ children }) => {

  return (
    <div className='layout'>
        <NavBar/>
            <div className='content'>
                {children}
            </div>
        <Footer/>
        
    </div>
  )

}

export default Layout;
