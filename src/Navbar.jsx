import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <>
          <div className='navbar_main'>
          <NavLink className='name' to='/' exact ><h1>Top</h1></NavLink>
          <h2>3</h2>
          <div className='navbar'>
              <ul>
                  <li><NavLink to='/' exact className='js' activeClassName='navs'>Jack Snyder</NavLink></li>
                  <li><NavLink to='/more' exact className='more' activeClassName='navs'>More</NavLink></li>
                  <li><NavLink to='/settings' exact className='settings' activeClassName='navs'>Settings</NavLink></li>
              </ul>
              </div>
          </div>  
        </>
    )
}

export default Navbar
