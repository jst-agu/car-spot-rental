import React from 'react'
import Button from '../ButtonComp/Button'
import yellowCar from '../../assets/car1.png'
import car2 from '../../assets/car5.png'
import car3 from '../../assets/car6.png'

const carList = [
  {
    name: "BMW UX",
    price: 100,
    image: yellowCar,
    aosDelay: "0",
  },
  {
    name: "KIA UX",
    price: 140,
    image: car2,
    aosDelay: "500",
  },
  {
    name: "BMW UX",
    price: 100,
    image: car3,
    aosDelay: "1000",
  },
];

const CarList = () => {
  return (
    <div className='pb-24 pt-12 bg-white dark:bg-dark dark:text-white'>
        <div className="container">
            {/* heading */}
            <h1
            data-aos="fade-up" 
            className='text-3xl sm:text-4xl font-semibold
            font-serif mb-3'>
                Our Car Collection
                </h1>
            <p data-aos="fade-up"
            className='text-sm pb-10'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Quisquam, quae.
            </p>
            {/* Car listing cards  */}
            <div>
                <div className='grid grid-cols-1 sm:grid-cols-2
                md:grid-cols-3 gap-16'>
                    {
                        carList.map ((data) =>(
                            <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                className="space-y-3 border-2 border-gray-300 
                hover:border-primary p-3 rounded-xl relative group"
              >
                <div className="w-full h-[120px]">
                  <img
                    src={data.image}
                    alt=""
                    className="w-full h-[120px] object-contain 
                    sm:translate-x-8 group-hover:sm:translate-x-16 
                    duration-700"
                  />
                </div>
                <div className="space-y-2">
                  <h1 className="text-primary font-semibold">
                    {data.name}
                    </h1>
                  <div className="flex justify-between items-center 
                  text-xl font-semibold">
                    <p>${data.price}/Day</p>
                    <a href="#">Details</a>
                  </div>
                </div>
                <p className="text-xl font-semibold absolute top-0 left-3">
                  12Km
                </p>
              </div>
                        ))
                    }
                </div>
            </div>
            {/* Car listing cards ends */}
            <div className='grid place-items-center mt-8'>
                <Button text="Book Now" />
            </div>
        </div>
    </div>
  )
}

export default CarList