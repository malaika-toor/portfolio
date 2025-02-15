import React from 'react'
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";

const Contact = () => {
  return (
    <div id='contact' className='pt-32 container'>
        <div className='grid md:grid-cols-2 gap-10'>
            <div className='space-y-8'>
                <h2 className='text-5xl'data-aos="zoom-in-up">Get in touch</h2>
                <p className='text-gray-400 text-[18px] pt-2' data-aos="zoom-in-up" >
                    Drop me a line, give me a call, or send me a message by submittng the  form.
                </p>
                <div className='flex gap-3 items-center'data-aos="zoom-in-up" >
                <AiOutlineMail  size={30}/> malaikatoor24@gmail.com
                </div>
                <div className='flex gap-3 items-center'data-aos="zoom-in-up" >
                <BsTelephone size={30} /> (021)00-43568
                </div>
            </div>
            <div className='space-y-8'>
            <div className='flex flex-col gap-1' data-aos="zoom-in-up" >
                    <label htmlFor="email">Name</label>
                    <input type="text"
                    className='h-[40px] bg-transparent border border-red-500'
                    id='Name'/>
                </div>
                
                <div className='flex flex-col gap-1' data-aos="zoom-in-up" >
                    <label htmlFor="email">Email</label>
                    <input type="text"
                    className='h-[40px] bg-transparent border border-red-500'
                    id='email'/>
                </div>
                <div className='flex flex-col gap-1' data-aos="zoom-in-up">
                    <label htmlFor="message">Message</label>
                    <textarea 
                    className='bg-transparent border border-red-500'
                    id='message' rows={8}>
                    </textarea>
                </div>
                <button className='bg-red-500 p-2 px-10' data-aos="zoom-in-up" >Send</button>
            </div>
        </div>
    </div>
  )
}

export default Contact