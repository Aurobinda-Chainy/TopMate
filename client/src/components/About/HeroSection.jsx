import React from 'react'

function HeroSection() {
  return (
    <section className='w-full bg-gradient-to-b from white to gray-100 py-10'>
        <div className='max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10'>

            <div className='flex-1'>
                <p className='text-sm text-blue-600 font-semibold mb-3'>
                    ABOUT OUR PLATFORM
                </p>

                <h1 className='text-4xl md:text-5xl font-bold leading-tight mb-4'>
                    Empowering Students <br/>
                    Through{" "}
                    <span className='text-blue-600'>Guided Mentorship</span>
                </h1>

                <p className='text-gray-600 mb-6'>
                    We connect students with expert mentors to help them learn better,
                    solve doubts faster, and achieve their academic goals with confidence.
                </p>

                <button className='bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition'>
                    Explore Programs →
                </button>

                <div className='flex gap-8 mt-8'>
                    <div>
                        <h3 className='text-lg font-semibold'>15+</h3>
                        <p className='text-gray-500 text-sm'>Students Mentored</p>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold">500+</h3>
                        <p className="text-gray-500 text-sm">Expert Mentors</p>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold">98%</h3>
                        <p className="text-gray-500 text-sm">Success Rate</p>
                    </div>
                </div>
            </div>

            <div className='flex-1 flex justify-center'>
                    <img src="/assets/hero.png" alt="Mentoship illustration" className='w-full max-w-md'/>
            </div>
        </div>
    </section>
  )
}

export default HeroSection
