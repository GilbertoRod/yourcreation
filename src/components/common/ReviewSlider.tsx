import React, { useState,useEffect,useRef, useCallback } from 'react';
import './ReviewSlider.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
export type UserInput = {
  title: string;
  body: string;
};

function ReviewSlider({reviews}: {reviews: UserInput[]}) {
  

  // State to manage current slide index
  const [currentSlide, setCurrentSlide] = useState(0);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  
  const nextSlide = useCallback(() => {
    setCurrentSlide((nextSlide) => (nextSlide === reviews.length - 1 ? 0 : nextSlide + 1));
  },[reviews.length]);

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? reviews.length - 1 : prevSlide - 1));
  };

  useEffect(() => {
    intervalRef.current = setInterval(nextSlide, 9000);
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [nextSlide]);

  const stopAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  return (
    <div className='slider-container'>
        <div className='slider-content'>
      {reviews.map((review, index) => (
        <div key={index} className={index === currentSlide ? 'slider-review active' : 'slider-review'}>
          <h2>{review.title}</h2>
          <div className='slider-stars'>
          <FontAwesomeIcon icon={faStar} color='gold' size='lg'/>
          <FontAwesomeIcon icon={faStar} color='gold' size='lg'/>
          <FontAwesomeIcon icon={faStar} color='gold' size='lg'/>
          <FontAwesomeIcon icon={faStar} color='gold' size='lg'/>
          <FontAwesomeIcon icon={faStar} color='gold' size='lg'/>
          </div>
  
          <p>"{review.body}"</p>
        </div>
      ))}
      <button className="prev-btn" onClick={()=>{prevSlide();stopAutoSlide();}}>&lt;</button>
      <button className="next-btn" onClick={()=>{nextSlide();stopAutoSlide();}}>&gt;</button>
      </div>
    </div>
  );
}

export default ReviewSlider;
