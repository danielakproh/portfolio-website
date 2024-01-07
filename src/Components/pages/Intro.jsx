import React from 'react'

const Intro = () => {
    return (
        <>
            <section className='mt-12 flex justify-center items-center'>
                <div className="shadow-custom w-52 h-52 flex justify-center items-center rounded-full">
                    <img src="src/assets/Profile.jpg" alt="" className='w-full h-full rounded-full object-contain hover:bg-gray-300 hover:shadow-lg' />
                </div>
                <div className='inter-family who-am-i m-20'>
                    <h1>Daniel Akproh</h1>
                    <p>Software Development Technician at <span className='emphasized-text'>Vermac</span></p>
                </div>
            </section>
            <div className='separation-bar w-60 mt-12 mx-auto'> </div>
        </>

    )
}

export default Intro
