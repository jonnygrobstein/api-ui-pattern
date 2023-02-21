import React, { useEffect, useState } from 'react'
// import { SliderData } from './SliderData'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft, } from 'react-icons/fa'

export default function DisneySlider({ slides }) {
    
// This is for scrolling through the slides forwards and backwards
    
const [current, setCurrent] = useState(0);
const length = slides.length
        

const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
}

const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
}

// This is in case there are no values in the array to pull from
if(!Array.isArray(slides) || slides.length <= 0) {
    return null;
}
    
  return (
    <section className='slider'>
        <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
        <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
        
        {/* SliderData should be changed to the location of the JSON data */}
        {slides.map((slide, index) => {
            return(
                <section className='sliderContainer' key={slide._id} >
                <div className={index === current ? 'slide active' : 'slide'} >
                    {index === current && (
                        <img src={slide.imageUrl} alt='' className='image' />
                    )}
                </div>
                <div className={index === current ? 'slide active' : 'slide'} >
                    {index === current && (
                        <p className='slideName'>{slide.name}</p>
                    )}
                </div>
                </section>    
            )
        })}
    </section>
  )

}