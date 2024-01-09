import React from 'react'
import '../../index.css'

const Navbar = () => {
    return (
        <header className=''>
            <nav className='text-xl flex justify-between items-center text-yellow-400'>
                <div className='logo ml-20 mt-5'>
                    <img src="" alt="" />
                    <a className="brand-initials" href="">DA</a>
                </div>
                <div className='navbar-items'>
                    <a href="" className='mr-10'>Home</a>
                    <a href="" className='mr-10'>Experience</a>
                    <a href="" className='mr-10'>Projects</a>
                    <a href="" className='mr-10'>About</a>
                    <a href="" className='mr-10'>Contact</a>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
