import React from 'react'


import JS from '../assets/javascript.png'
import  tailwind from '../assets/tailwind.png'
import react from '../assets/react.png'
import playwright from '../assets/playwright.png'




export const Skills = () => {
  return (
    <div name='skills' className='bg-[#0a192f] text-gray-300 w-full h-screen'>
        {/* container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
                <p className='py-4'>//Things I learned</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-black-900 hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={JS} alt="html icon" />
                    <p className='my-4'>
                    JAVASCRIPT
                    </p>
                </div>
                <div className='shadow-md shadow-black-900 hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={playwright} alt="html icon" />
                    <p className='my-4'>
                       PLAYWRIGHT
                    </p>
                </div>
                <div className='shadow-md shadow-black-900 hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={tailwind} alt="html icon" />
                    <p className='my-4'>
                        TAILWIND CSS
                    </p>
                </div>
                <div className='shadow-md shadow-black-900 hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={react} alt="html icon" />
                    <p className='my-4'>
                        REACT
                    </p>
                </div>
   

            </div>
        </div>


    </div>
  )
}
