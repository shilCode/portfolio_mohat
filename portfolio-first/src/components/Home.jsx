import React from 'react'

const Home = () => {
  return (
    <div name='home' className='w-full lg:h-screen md:h-auto sm:h-auto bg-[#292524]'>
    
      {/* Header */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col h-full font-mono text-white'>
        <div>
        <div className='  flex  justify-between items-center pt-10 pb-10  gap-10 '>
            <div >
            <h1 className='text-[#fbbf24]  font-extrabold  text-3xl '>Mohat Shil </h1>
            </div>
            <div>
            <a className=' text-3xl' href='https://github.com/shilCode'>GitHub</a>
            <div>
              
            </div>
            </div>
          </div>
        <hr/>
        {/* Software Developer in Test */}
        <div >
        <h2 className='  font-mono pt-5 text-2xl'>Software Developer in Test 📱🕸️🖥️</h2>
          <div className=' font-mono pt-5 pb-10'>
            <ul> 👋🏼 I’m Mohat Shil, a SDET with 5+ years of experience in multiple MNCs. </ul>
            <ul> 🎓 Graduated in 2021 with a Computer Engineering bechelors degree.</ul>
            <ul>  🗡  As a passionate Test Automation Enthusiast, I specialize in cutting-edge technologies and frameworks.</ul>
            <ul> 🔍 Explore my latest projects and contributions on my <a href='https://github.com/shilCode' className=' underline'>GitHub</a>.</ul>
            <ul> 📚 I'm currently learning about DevOps and Cloud Computing.</ul>
            <ul> 🎯 My goal is to become a Cloud Architect and contribute to open-source projects.</ul>
          </div>
        </div>
      </div>
      <hr />
        {/* Tech Stack */}
        <div className='pb-10' >
        <h2 className='  font-mono pt-5 pb-4 text-2xl'>Technology Stack</h2>
    
    <div className=' flex'>
    <div className=' pb-10 w-1/2'>
          <div className='w-1/2 '>E2E Testing:
          <div className='ms-10 underline'>
          <a href="https://playwright.dev/">Playwright</a><br/>
          <a href="https://www.cypress.io/">Cypress</a><br/>
          <a href="https://pptr.dev/">Puppeteer</a><br/>
          <a href="https://webdriver.io/">WebdriverIO</a><br/>
          <a href="https://www.protractortest.org/#/">Protractor</a><br/>
          <a href="https://jestjs.io/">Jest</a><br/>
          </div>
          </div>
          
         
        </div>

        <div className='flex'>
          <div className='no-underline'>Tools <br/>
          <a className='ms-10 underline' href="https://www.postman.com/">Postman</a><br/>
          <a className='ms-10 underline' href="https://jmeter.apache.org/">Jmeter</a><br/>
          <a className='ms-10 underline' href="https://www.docker.com/">Docker</a><br/>
          <a className='ms-10 underline' href="https://kubernetes.io/">Kubernetes</a><br/>

          <a className='ms-10 underline' href="https://www.jenkins.io/">Jenkins</a><br/>
          <a className='ms-10 underline' href="https://azure.microsoft.com/en-us/products/devops">Azure DevOps Pipelines</a>
         
        </div> 
     </div>
        <div className=' w-1/3'>Programming Languages 
          <div className='ms-10 underline '>
          <a href="https://javascript.info/">JavaScript</a><br/>
          <a href="https://typescriptlang.org/">TypeScript</a><br/>
        </div> <br/>
     </div>
    </div>

        </div>
        <hr />
        {/* Experience */}
        <div >
        <h2 className='  font-mono pt-5 pb-4 text-2xl'>Work Experience </h2>
        <div>

        <div className=' flex pb-10 '>
           <div className=' w-1/2'>
            <h3>ABB Business Services</h3>
            <div className='ms-10 '>
            <ul >
                QA Automation Engineer
            </ul>
            <ul>
                October 2023 - Present
            </ul>
            <ul>
                Krakow, Poland
            </ul>
            </div>
           </div>

           <div className=' w-1/2'>
            <h3>EPAM</h3>
            <div className='ms-10 '>
            <ul >
                Senior Software Engineer in Test
            </ul>
            <ul>
                May 2022 - September 2023
            </ul>
            <ul>
                Krakow, Poland
            </ul>
            </div>
           </div>           
       
          </div>
          <div className='pb-10 flex '>
           <div className=' w-1/2'>
            <h3>Keywords Studios</h3>
            <div className='ms-10 '>
            <ul >
                QA Test Lead
            </ul>
            <ul>
                July 2021 - April 2022
            </ul>
            <ul>
                Katowice, Poland
            </ul>
            </div>
           </div>

           <div className='w-1/2'>
            <h3>Testronic</h3>
            <div className='ms-10 '>
            <ul >
                QA Associate Test Lead - Games
            </ul>
            <ul>
                October 2018 - June 2021
            </ul>
            <ul>
                Warsaw, Poland
            </ul>
            </div>
           </div>           
       
          </div>

        </div>
        </div>
      <hr />
            <footer className=' bg-none font-mono pt-5'>
             //
            </footer>

      </div>     
    
    </div>
  )
}

export default Home