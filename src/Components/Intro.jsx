import React from 'react'

const Intro = () => {
    return (
        <>
            <section className='mt-24 flex items-center'>
                <div className='flex justify-center'>
                    <p>
                        Hey, I'm <span>Daniel</span> and I'm a technician in software development
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, voluptas
                        enim blanditiis repellendus eligendi ab numquam alias explicabo veritatis est harum
                        consectetur quia cumque, sed veniam deleniti dicta quis aperiam.
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt ipsum maxime eum amet,
                        corporis eaque atque provident molestias quas culpa neque, debitis facere eveniet architecto
                        minus modi praesentium excepturi id.

                    </p>
                </div>
                <img src="src/assets/unknown.jpg" alt="" className='w-80 h-64 rounded-full' />
            </section>
            <div className='bg-gray-300'> horizontal bar</div>
        </>

    )
}

export default Intro
