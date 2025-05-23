import React from 'react'

const Button = ({text, className=''}) => {
  return (
    <button data-aos="fade-up" 
    className={`hover:text-black px-6
            py-2 rounded-md hover:bg-primary/80
            text-primary border-2 border-primary tracking-wider
            duration-500 ${className}`}>   
        {text}
    </button>
  )
}

export default Button;