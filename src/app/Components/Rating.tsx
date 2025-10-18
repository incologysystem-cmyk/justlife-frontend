"use client"
import React, { useState } from 'react';
import Image from 'next/image';

const Rating = () => {
  const reviews = [
    {
      text: "It's my first time booking with Justlife, and it exceeded my expectations. The professional cleaned our house thoroughly; she was very friendly and made sure that everything was clean before she left. It was a great experience indeed, and I will surely book another service with Justlife. ❤️",
      name: "Nadia"
    },
    {
      text: "Best Salon ServiceSuper professional, clean, and overall a great service! The therapist came to my home, with everything as if I was at a Salon/Spa. She gave me a hair treatment which was quick and super good. Now, instead of dealing with traffic, etc, I will just order Justlife which is much easier since the professional will come to my place. I really loved it, and I will be booking many times again.",
      name: "Shereen"
    },
    {
      text: "I booked Justlife’s home lab tests for vitamin D and B12. The specialist arrived at my doorstep and took my blood sample, which was so convenient as I did not have to step out of my house. I love this app and how they provide various services and multiple home test options. It’s much more reasonable than visiting a clinic. I just love this app!",
      name: "Kareem"
    }
  ];

  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState("next");
  const [animate, setAnimate] = useState(false);

  const handleNext = () => {
    if (index < reviews.length - 1) {
      setDirection("next");
      setAnimate(true);
      setTimeout(() => {
        setIndex(index + 1);
        setAnimate(false);
      }, 200);
    }
  };

  const handlePrev = () => {
    if (index > 0) {
      setDirection("prev");
      setAnimate(true);
      setTimeout(() => {
        setIndex(index - 1);
        setAnimate(false);
      }, 200);
    }
  };

  return (
    <>
      <section className='bg-[#F5F5F5] pb-15 w-full relative overflow-hidden'>
        <div className='text-center pb-5 pt-15'>
          <h1 className='text-3xl font-bold'>What customers say about Justlife</h1>
          <p className='mt-5 text-lg'>
            Justlife has been rated 4.8 out of 5 based on 1626 reviews as of March 2024.
          </p>
        </div>

        <div className='w-[175px] flex gap-1 justify-center items-center py-2 bg-white rounded-full relative top-5 z-10 shadow-sm mx-auto'>
          {[...Array(5)].map((_, i) => (
            <Image key={i} src="/Images/star.svg" width={25} height={25} alt="star" />
          ))}
        </div>

        <div className="relative w-[850px] mx-auto h-[470px] overflow-hidden">
          <div
            className={`absolute inset-0 px-15 py-14 bg-white rounded-2xl transition-transform duration-300 ${animate
                ? direction === "next"
                  ? "-translate-x-full opacity-0"
                  : "translate-x-full opacity-0"
                : "translate-x-0 opacity-100"
              }`}
          >
            <p className='text-3xl text-gray-700 font-[20px] text-center'>
              {reviews[index].text}
            </p>
            <h2 className='mt-20 text-center text-3xl text-sky-400 font-medium'>
              {reviews[index].name}
            </h2>
          </div>
        </div>

        {index > 0 && (
          <button
            onClick={handlePrev}
            className='absolute left-[35px] top-1/2 mt-10 transform -translate-y-1/2 bg-white rounded-full shadow-md p-3 hover:bg-gray-100 transition'
          >
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000">
              <path d="M456-480 640-296l-56 56-240-240 240-240 56 56-184 184Z" />
            </svg>
          </button>
        )}

        {index < reviews.length - 1 && (
          <button
            onClick={handleNext}
            className='absolute right-[35px] top-1/2 mt-10 transform -translate-y-1/2 bg-white rounded-full shadow-md p-3 hover:bg-gray-100 transition'
          >
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000">
              <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
            </svg>
          </button>
        )}
      </section>
    </>
  );
};

export default Rating;
