import React, { useState, useRef, useContext } from 'react'
import Container from './Container'
import ad4 from '../assets/ad-4.png'
import { FaHeart } from 'react-icons/fa'
import { TfiReload } from 'react-icons/tfi'
import { IoCartOutline } from 'react-icons/io5'
import Slider from 'react-slick'
import { FiArrowRightCircle } from 'react-icons/fi'
import { LuCircleArrowLeft } from 'react-icons/lu'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { ApiData } from './ContextApi'

let data = useContext(ApiData)
const Arrival = () => {
    
  const [oldSlide, setOldSlide] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeSlide2, setActiveSlide2] = useState(0);

  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    beforeChange: (current, next) => {
      setOldSlide(current);
      setActiveSlide(next);
    },
    afterChange: current => setActiveSlide2(current)
  };

  return (
    <div className='py-4'>
      <Container>
        <div className='w-full flex justify-between items-center mb-4'>
          <h1>New Arrival</h1>
        </div>

        <div className='relative'>
     
          <div className='absolute inset-0 flex justify-between items-center z-20 px-2'>
            <button
              onClick={() => sliderRef.current.slickPrev()}
              className='bg-white rounded-full shadow p-2 hover:bg-gray-100'
            >
              <LuCircleArrowLeft size={28} />
            </button>
            <button
              onClick={() => sliderRef.current.slickNext()}
              className='bg-white rounded-full shadow p-2 hover:bg-gray-100'
            >
              <FiArrowRightCircle size={28} />
            </button>
          </div>
          
          <Slider ref={sliderRef} {...settings}>
            <div className='relative group'>
            {data.map((item)=> (
                <img src={item} alt="" />
            ))}
              
              <div className='absolute left-[50%] top-[75%] z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                <h2 className='text-[16px] flex items-center gap-1'>Add to wish list <FaHeart /></h2>
                <p className='text-[16px] flex items-center gap-12'>compare <TfiReload /></p>
                <p className='text-[16px] flex items-center gap-7'>Add to cart <IoCartOutline /></p>
              </div>
            </div>

            <div className='relative group'>
              <img src={ad4} alt="" />
              <div className='absolute left-[50%] top-[75%] z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                <h2 className='text-[16px] flex items-center gap-1'>Add to wish list <FaHeart /></h2>
                <p className='text-[16px] flex items-center gap-12'>compare <TfiReload /></p>
                <p className='text-[16px] flex items-center gap-7'>Add to cart <IoCartOutline /></p>
              </div>
            </div>

            <div className='relative group'>
              <img src={ad4} alt="" />
              <div className='absolute left-[50%] top-[75%] z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                <h2 className='text-[16px] flex items-center gap-1'>Add to wish list <FaHeart /></h2>
                <p className='text-[16px] flex items-center gap-12'>compare <TfiReload /></p>
                <p className='text-[16px] flex items-center gap-7'>Add to cart <IoCartOutline /></p>
              </div>
            </div>

            <div className='relative group'>
              <img src={ad4} alt="" />
              <div className='absolute left-[50%] top-[75%] z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                <h2 className='text-[16px] flex items-center gap-1'>Add to wish list <FaHeart /></h2>
                <p className='text-[16px] flex items-center gap-12'>compare <TfiReload /></p>
                <p className='text-[16px] flex items-center gap-7'>Add to cart <IoCartOutline /></p>
              </div>
            </div>
            <div className='relative group'>
              <img src={ad4} alt="" />
              <div className='absolute left-[50%] top-[75%] z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                <h2 className='text-[16px] flex items-center gap-1'>Add to wish list <FaHeart /></h2>
                <p className='text-[16px] flex items-center gap-12'>compare <TfiReload /></p>
                <p className='text-[16px] flex items-center gap-7'>Add to cart <IoCartOutline /></p>
              </div>
            </div>
          </Slider>
        </div>
      </Container>
    </div>
  )
}

export default Arrival
