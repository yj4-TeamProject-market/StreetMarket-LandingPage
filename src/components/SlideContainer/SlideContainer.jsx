'use client'

import { useEffect, useRef, useState } from "react"
import throttel from "@/utils/throttel";


export default function SlideContainer( {children} ) {

  const [slideIndex, setSlideIndex] = useState(0);
  const [slideLength, setSlideLength] = useState(0);
  const delay = 1000;
  const container = useRef(null);
  const inThrottle = useRef(false);
  
  useEffect(()=>{
    if(container.current) {
      setSlideLength(container.current.children.length-1);
    }
  },[container])

  const onScrollChange = (event) => {
    if(event.deltaY < 0 && slideIndex < 0) {
      setSlideIndex(prev => prev + 1);
    } else if(event.deltaY > 0 && slideIndex > -slideLength) {
      setSlideIndex(prev => prev - 1);
    }
  }
  const handleWheel = throttel(onScrollChange, delay, inThrottle);
   
  return (
    <div 
      ref={container} 
      onWheel={handleWheel} 
      className={`w-full transition duration-${delay}`}
      style={{transform : `translateY(${slideIndex * 100}vh)`}}
    >
      {children}
    </div>
  )
}
