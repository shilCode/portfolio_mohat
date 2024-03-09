import React from 'react'

import JS from '../assets/javascript.png'
import playwright from '../assets/playwright.png'




export const Skills = () => {
  return (
    <div name='skills' className='bg-[#281132] text-gray-300 w-full h-screen'>
        {/* container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Tech Stack</p>
                <p className='py-4'>some of the tech I use day to day</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                {/* card component */}
                <div className='shadow-md shadow-black-900 hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={JS} alt="html icon" />
                    <p className='my-4'>
                    JAVASCRIPT 
                    </p>
                </div>
                 {/* end of card component */}
                <div className='shadow-md shadow-black-900 hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png?20221110153201" alt="html icon" />
                    <p className='my-4'>
                    TYPESCRIPT
                    </p>
                </div>

             
                <div className='shadow-md shadow-black-900 hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src="https://playwright.dev/img/playwright-logo.svg" alt="html icon" />
                    <p className='my-4'>
                       PLAYWRIGHT
                    </p>
                </div>
                <div className='shadow-md shadow-black-900 hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src="https://user-images.githubusercontent.com/7853266/44114706-9c72dd08-9fd1-11e8-8d9d-6d9d651c75ad.png" alt="postman" />
                    <p className='my-4'>
                        POSTMAN
                    </p>
                </div>
                <div className='shadow-md shadow-black-900 hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Jenkins_logo.svg/1200px-Jenkins_logo.svg.png" alt="Jenkins" />
                    <p className='my-4'>
                        JENKINS
                    </p>
                </div>
                <div className='shadow-md shadow-black-900 hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src="https://www.docker.com/wp-content/uploads/2022/03/vertical-logo-monochromatic.png" alt="html icon" />
                    <p className='my-4'>
                        DOCKER
                    </p>
                </div>

               

                <div className='shadow-md shadow-black-900 hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src="https://jmeter.apache.org/images/jmeter_square.png" alt="html icon" />
                    <p className='my-4'>
                        JMETER
                    </p>
                </div>
                
                <div className='shadow-md shadow-black-900 hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src="https://community.infoblox.com/t5/image/serverpage/image-id/2195iA290BF7E3BA6064D/image-size/large/is-moderation-mode/true?v=v2&px=999" alt="html icon" />
                    <p className='my-4'>
                        BASH
                    </p>
                </div>

            </div>
        </div>


    </div>
  )
}
