import React from 'react'
import '../../index.css'

const Navbar = () => {
    return (
        <header className=''>
            <nav className='flex justify-between items-center text-yellow-400'>
                <div className='logo ml-20'>
                    <img src="" alt="" />
                    <a className="brand-initials" href="">DA</a>
                </div>
                <div className='navbar-items'>
                    <a href="" className='mr-10'>Home</a>
                    <a href="" className='mr-10'>Experience
                        <span class="absolute inset-x-0 bottom-0 h-0.5 bg-blue-500 origin-left transform scaleX-0 transition-transform ease-in-out group-hover:scaleX-100"></span>
                    </a>
                    <a href="" className='mr-10'>Projects</a>
                    <a href="" className='mr-10'>About</a>
                    <a href="" className='mr-10'>Contact</a>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
