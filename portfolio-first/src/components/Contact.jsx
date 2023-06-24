import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen text-gray-300 bg-[#0a192f] flex justify-center p-4'>
            <form action="" className='flex flex-col max-w-[600px] w-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Contact</p>
                    <p className='py-4'>//Sumbit the form below</p>
                </div>
                <input className='py-2 my-2 bg-gray-500 font' type="text" placeholder='Name' name='name' />
                <input className='py-2 my-2 bg-gray-500' type="text" placeholder='Email' name='name' />
                <textarea className='py-2 my-2 bg-gray-400 ' name="" rows="10"></textarea>
                <button className='text-white border-2 hover:bg-pink-600
                 hover:border-pink-600 px-4 py-3 my-8 
                 smx-auto flex items-center'>Lets Talk</button>
               
            </form>
    </div>
  )
}

export default Contact