import React, { useState } from 'react'
import Axios from 'axios'

const FetchMe = () => {
    const [type, setType] = useState('')
    const [excuse, setExcuse] = useState('')

    const fetchExcuse = (category) => {
        Axios.get(`https://excuser-three.vercel.app/v1/excuse/${category}`).then((res) => {
            setExcuse(res.data[0].excuse)
        })
    }


  return (
     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Generate An Excuse</h1>
      <div className="space-x-4">
        <button onClick={() => {
            setType('party') 
            fetchExcuse('party')
    }} 
        className="bg-blue-500 text-white px-4 py-2 rounded">
            Party
            </button>
        <button onClick={() => {
            setType('family') 
            fetchExcuse('family')
        }} 
        className="bg-green-500 text-white px-4 py-2 rounded">
            Family
            </button>
        <button onClick={() => {
            setType('office') 
            fetchExcuse('office')
        }} 
        className="bg-purple-500 text-white px-4 py-2 rounded">
            Office
            </button>
      </div>
      <p className="mt-8 text-lg text-gray-600">{type}: {excuse}</p>
    </div>
  )
}

export default FetchMe