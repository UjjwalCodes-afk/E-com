import React from 'react'
import BannerImg from '../../assets/women/women2.jpg';
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";

const Banner = () => {
  return (
    <div>
      <div className='min-h-[550px] flex justify-center items-center py-12 sm:py-0'>
        <div className="container">
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 items-center'>
            {/* Image section */}
            <div data-aos= "zoom-in">
                <img src={BannerImg} alt="" className='max-w-[400px] h-[350px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover' />
            </div>
            {/* Text details section */}
            <div className='flex flex-col justify-center gap-6 sm:pt-0'>
                <h1 data-aos = "fade-up" className='text-3xl sm:text-4xl font-bold'>Winter sale upto 50% Off</h1>
                <p data-aos = "fade-up" className='text-sm text-gray-800 tracking-wide leading-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore explicabo eligendi quis sed quibusdam accusantium itaque quam suscipit blanditiis exercitationem!</p>
                <div  className='flex flex-col gap-4'>
                    <div data-aos = "fade-up" className='flex items-center gap-4'>
                        <GrSecure className = "text-4xl h-12 w-12 shadow-sm p-4 rounded"></GrSecure>
                        <p>Quality Products</p>
                    </div>
                    <div data-aos = "fade-up" className='flex items-center gap-4'>
                    <IoFastFood className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400'></IoFastFood>
                    <p>Fast Delivery</p>
                    </div>
                </div>
            </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
