import React from 'react'
import hero1 from "../assets/hero1.png"

const Hero = () => {
  return (
    <div className='h-screen w-full flex justify-center items-center'>
        <div className='flex'>
            <div className='w-[65%] flex flex-col items-center justify-center'>
              <div className='h-auto w-[100%]'>

                <div className='my-2 text-6xl'>
                  <h1 className='text-white font-semibold my-2'>Take Control of your</h1>
                  <span className='text-purple-400 font-semibold my-2'>Mental Weather</span>
                </div>

                <div className='text-2xl py-4 leading-10 mt-4 max-w-[100%] text-wrap'>
                  <p className='text-2xl text-white'>Emotions and feelings are never easy. Sometimes it seems impossible to put into words what's going on in your mind.</p>
                  <p className='text-white'>
                    And you <span className='text-purple-400'>don't have to do it alone.</span>
                  </p>
                </div>

                <div className='mt-8 text-center'>
                    <span className='text-white text-2xl font-semibold bg-[rgb(183,16,103)] px-6 py-2 rounded-3xl hover:cursor-pointer hover:underline hover:bg-[#8b265c] mr-4'>
                      Get Started
                    </span>
                    <span className='text-white text-2xl font-semibold px-6 py-2 rounded-3xl hover:cursor-pointer hover:underline hover:bg-[#7d2253f9]'>
                      Log In
                    </span>
                    
                </div>

              </div>
            </div>

            <div className='max-h-screen w-[34%] flex justify-center'>
                <img src={hero1} alt="" className='w-[70%]' />
            </div>
        </div>
    </div>
  )
}

export default Hero