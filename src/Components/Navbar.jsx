import React from 'react'

const Navbar = () => {
    return (
        <header>
            <nav className='flex justify-between items-center'>
                <div className='logo'>
                    <img src="" alt="" />
                    <a href="">Brand</a>
                </div>
                <div>
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
