import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='container pt-32'>
        <div className='grid md-cols-2 gap 20 items-center'>
            <div data-aos="zoom-in-up" >
                <h2 className='text-4xl md:text-5xl'>Technologies I work  with</h2>
                <p className='text-gray-500 pt-2'>
                    I have a solid foundation in web development,specializing in Html,CSS and JavaScript,My experience extends to using frameworks like React and Next.js to create dynamic and user-friendly applications.
                </p>
            </div>
            <div>
              <div className='grid grid-cols-2 text-orange-500 text-3xl sm:text-4xl'>
                <div className='space-y-2'>
                  <h2 data-aos="zoom-in-up" >TypeScript</h2>
                  <h2 data-aos="zoom-in-up">React.Js</h2>
                  <h2 data-aos="zoom-in-up" >Next.Js</h2>
                </div>
                <div className='space-y-2'>
                  <h2 data-aos="zoom-in-up" >Tailwind</h2>
                  <h2 data-aos="zoom-in-up" >CSS</h2>
                  <h2 data-aos="zoom-in-up">Node.Js</h2>
                </div>
              </div>
            </div>
        </div>
      
    </div>
  )
}

export default Skills