import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Header() {
  return (
    <>
    <header>
        <div className='flex justify-between p-4'>
        <Link to='/'>
            <h1>
                RealEstate
            </h1>
        </Link>
            
            
            <ul className='flex gap-5'>
            
            <Link to='/sell'>
                <li>Sell</li>
            </Link>
            
            <Link to='/rent'>
                 <li>Rent</li>
            </Link>
           
            <Link to='/blog'>
                 <li>Blog</li>
            </Link>
           
            <Link to='/team'>
                <li>Team</li>
            </Link>
           
            <Link to='/contact'>
                 <li>Contact</li>
            </Link>
                
            
          
            
       
            </ul>
        </div>
    </header>
    <Outlet />
    </>
  )
}
