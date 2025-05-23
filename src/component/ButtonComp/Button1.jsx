import React from 'react'

const Button1 = ({text, className=''}) => {
  return (
    <button className={`btn bg-primary text-black px-6
            py-2 rounded-md hover:bg-primary/80
            duration-300 ${className}`}>
        {text}
    </button>
  )
}

export default Button1