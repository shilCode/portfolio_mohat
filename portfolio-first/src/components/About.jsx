import React from 'react'

function About() {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            {/* container */}
            <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
            <div className='sm:text-right pb-8 pl-4'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
            </div>
            <div></div>
            </div>
            <div className='max-w-[1000px] w-full px-8 grid sm:grid-cols-2 gap-8  px-4'>
               <div className='sm:text-right text-4xl font-bold '>
               <p>Hi. I am Mohat, nice to meet you</p>
               </div>
               <div><p>
               I bring a wealth of experience in testing web applications and creating detailed test scripts. My proficiency
extends to working with relational databases, where I excel at crafting complex SQL queries.  Alongside my general understanding
of software engineering practices, I specialize in development lifecycle and change validation. Furthermore, I
have hands-on experience with Postman, adding value to my skill set. I am well-versed in CI/CD toolchains,
particularly Git and Jenkins, and can navigate them with ease. Additionally, I possess previous exposure to Kafka
and possess a deep understanding of streaming architectures, giving me a significant edge.
                </p></div>
            </div>
          
        </div>
    </div>
  )
}

export default About