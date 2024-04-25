import React from 'react'
import workImg from '../assets/projects/workItem.png'

export const Work = () => {
  return (
    <div name='work' className='bg-[#281132] text-gray-300 w-full h-screen'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Work</p>
                <p className='py-6'>Recent </p>
            </div>
            {/* container */}
            <div class="card w-96 bg-base-100 shadow-xl mx-auto">
                {/* grid image */}
                <div style={{backgroundImage:`url(${workImg})`}}
                className='shadow-lg shadow-color-black-200 group container rounded-md flex justify-center items-center mx-auto content-div '>
                    {/* hover effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Open Source Contribution
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://github.com/reactplay/react-play/pull/1481">
                                <button className='text-center rounded-lg px-4 m-2 bg-white text-black font-bold text-lg'>View Pull Request</button>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    </div>
  )
}
