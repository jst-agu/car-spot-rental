import React from 'react'
import CarPng from '../../assets/car1.png'
import Button from '../ButtonComp/Button'

const About = () => {
  return (
    <div id='about' 
    className='dark:bg-dark bg-slate-100 sm:min-h-[600px] 
    sm:grid sm:place-items-center duration-300'>
        <div className='container'>
            <div className='grid grid-cols-1 sm:grid-cols-2
            place-items-center'>
                <div
                data-aos="slide-right"
                data-aos-duration="1500"
                >
                    <img src={CarPng} alt="" 
                    className='sm:scale-125 sm:-translate-x-11 
                    max-h-[250px] drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)]' />
                </div>
                <div
                data-aos="zoom-in"
                data-aos-duration="1500"
                data-aos-once="false"
                >
                    <div className='space-y-5 sm:p-16 pb-6'>
                        <h1 data-aos="fade-up" 
                        className='text-3xl sm:text-4xl font-bold
                        font-serif dark:text-white'> 
                        About us</h1>
                        <p 
                        data-aos="fade-up" 
                        className='dark:text-white'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Aspernatur, magnam! Tenetur odio quo et maxime?
                        </p>
                        <p 
                        data-aos="fade-up" 
                        className='dark:text-white'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Sequi, tempora.
                        </p>
                        <Button text='Get Started'/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About 