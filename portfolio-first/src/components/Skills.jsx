import React from 'react'
import { Tooltip } from 'tippy.js';


import JS from '../assets/javascript.png'
import  tailwind from '../assets/tailwind.png'
import react from '../assets/react.png'
import playwright from '../assets/playwright.png'




export const Skills = () => {
  return (
    <div name='skills' className='bg-[#281132] text-gray-300 w-full h-screen'>
        {/* container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
                <p className='py-4'>Tech Stack</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
              {/* =======CARD COMPONENT============= */}


            <div className='bg-gradient-to-br rounded-lg shadow-md hover:shadow-lg p-4 transition duration-300 transform hover:scale-105'>
            <img className='w-20 mx-auto' src={JS} alt="JavaScript icon" />
            <h2 className='text-xl font-semibold mt-4'>JavaScript</h2>

            <div className='relative w-full h-2 bg-gray-600 rounded mt-2'>
               
                <div className='absolute top-0 left-0 h-2 bg-green-500 rounded ' data-tip="70%" style={{ width: '30%' }}></div>
             
      
                
            </div>
            
            </div>
            {/* =============END OF COMPONENT ===================== */}

                <div className='bg-gradient-to-br rounded-lg shadow-md hover:shadow-lg p-4 transition duration-300 transform hover:scale-105'>
                    <img className='w-20 mx-auto' src={playwright} alt="html icon" />
                    <p className='my-4'>Playwright</p>
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
                        POSTMAN
                    </p>
                </div>
                <div className='shadow-md shadow-black-900 hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={react} alt="html icon" />
                    <p className='my-4'>
                        JENKINS
                    </p>
                </div>
                <div className='shadow-md shadow-black-900 hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={react} alt="html icon" />
                    <p className='my-4'>
                        DOCKER
                    </p>
                </div>

                <div className='shadow-md shadow-black-900 hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={react} alt="html icon" />
                    <p className='my-4'>
                        TESTRAIL
                    </p>
                </div>

                <div className='shadow-md shadow-black-900 hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={react} alt="html icon" />
                    <p className='my-4'>
                        JMETER
                    </p>
                </div>
                
                <div className='shadow-md shadow-black-900 hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={react} alt="html icon" />
                    <p className='my-4'>
                        BASH
                    </p>
                </div>

            </div>
        </div>


    </div>
  )
}
