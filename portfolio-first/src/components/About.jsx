import React from 'react'

function About() {
  return (
    <div name='about' className='w-full h-screen bg-[#281132] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            {/* container */}
            <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
            <div className='sm:text-right pb-8 pl-4'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
            </div>
            <div></div>
            </div>
            <div className='max-w-[1000px] w-full px-2 grid sm:grid-cols-2 gap-x-8 gap-y-10 '>
               <div className='sm:text-right text-4xl font-bold '>
               <iframe src="https://giphy.com/embed/93j2KW6SM3Wqd6sSQf" width="400" height="310"  allowFullScreen></iframe> 
               </div>
               <div><p>
               As a QA Automation Engineer with 5+ years of experience in web and
                mobile application testing, I possess extensive knowledge of agile
                methodologies, test automation frameworks, and various testing tools
                including WebDriver IO, Playwright, and Jenkins. My academic credentials
                include a Bachelor's degree in Computer Science with a major in Quality
                Engineering and a minor in Cloud Engineering. I am seeking an opportunity to
                apply my skills and experience in a dynamic work environment.
                </p></div>
            </div>
          
        </div>
    </div>
  )
}

export default About