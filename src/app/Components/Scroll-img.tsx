
'use client';
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from "lucide-react";

const Scrollimg = () => {
  const servImg = [
    {
      image: "/images/img-1.webp",
      isNew: false,
      title: "Home Cleaning"
    },
    {
      image: "/images/img-2.webp",
      isNew: false,
      title: "Furniture Cleaning",
    },
    {
      image: "/images/img-3.webp",
      isNew: false,
      title: "Home Deep Cleaning",
    },
    {
      image: "/images/img-4.webp",
      isNew: true,
      title: "Kitchen & Bathroom Deep Clean",
    },
    {
      image: "/images/img-5.webp",
      isNew: false,
      title: "Laundry & Dry Cleaning",
    },
    {
      image: "/images/img-6.webp",
      isNew: false,
      title: "AC Cleaning",
    },
    {
      image: "/images/img-7.webp",
      isNew: false,
      title: "Car Wash",
    },
    {
      image: "/images/img-8.webp",
      isNew: false,
      title: "Shoe Cleaning",
    },
    {
      image: "/images/img-9.webp",
      isNew: false,
      title: "Women's Salon",
    },
    {
      image: "/images/img-10.webp",
      isNew: false,
      title: "Women's Spa",
    },
    { image: "/images/img-11.webp", 
      isNew: false,
      title:" Men's Salon",
     },
    { image: "/images/img-12.webp", 
      isNew: false,
      title:" Men's Spa",
     },
    { image: "/images/img-13.webp", 
      isNew: false,
      title:" Nail Extensions",
     },
    { image: "/images/img-14.webp", 
      isNew: false,
      title:" Lashes & Brows",
     },
    { image: "/images/img-15.webp", 
      isNew: false,
      title:" Spray Tanning",
     },
    { image: "/images/img-16.webp", 
      isNew: false,
      title:" Makeup",
     },
    { image: "/images/img-17.webp", 
      isNew: false,
      title:" Handyman & Maintenance",
     },
    { image: "/images/img-18.webp", 
      isNew: false,
      title:" Home Painting",
     },
    { image: "/images/img-19.webp", 
      isNew: false,
      title:" Water Tank Cleaning",
     },
    { image: "/images/img-20.webp", 
      isNew: false,
      title:"Lab Tests at Home",
     },
    { image: "/images/img-21.webp", 
      isNew: false,
      title:"IV Therapy at Home ",
     },
    { image: "/images/img-22.webp", 
      isNew: false,
      title:" Doctor Consultations",
     },
    { image: "/images/img-23.webp", 
      isNew: false,
      title:" Flu Vaccine at Home",
     },
    { image: "/images/img-24.webp", 
      isNew: false,
      title:" PCR & Flu Test at Home",
     },
    { image: "/images/img-25.webp", 
      isNew: false,
      title:" Nurse Care at Home",
     },
    { image: "/images/img-26.webp", 
      isNew: false,
      title:"Physiotherapy at Home ",
     },
    { image: "/images/img-27.webp", 
      isNew: false,
      title:"Psychotherapy & Counselling",
     },

  ];

  const [slide, setSlide] = useState(0);
  const visibleCards = 5; // 5 images shown per view

  const nextSlide = () => {
    if (slide < servImg.length - visibleCards) {
      setSlide(slide + 1);
    }
  };

  const prevSlide = () => {
    if (slide > 0) {
      setSlide(slide - 1);
    }
  };

  return (
    <div className="container w-[190vh] mx-auto px-5 py-4  mb-8">
      {/* Header with text + arrows */}
      <p className='text-md font-bold text-[#9E9E9E]'>EVERYTHING YOU NEED</p>
      <div className=" mt-2 flex items-center justify-between">
        
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
          What other services can we help you with?
        </h1>

        <div className="flex gap-4">
          <button
            onClick={prevSlide}
            className={`rounded-full w-[40px] h-[40px] flex justify-center items-center transition cursor-pointer border boorder-0 bg-white`}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            className={`rounded-full w-[40px] h-[40px] flex justify-center items-center transition cursor-pointer border boorder-0 bg-white`}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Image slider */}
      <div className="flex gap-5 mt-5 overflow-hidden">
        <div className="flex gap-5">
          {servImg.map((elm, ind) => (
            <div
              key={ind}
              style={{
                transform: `translateX(-${slide * 220}px)`,
                transition: "transform 0.5s ease",
              }}
              className="relative w-[210px] shrink-0"
            >
              {/* Image box */}
              <div className="relative w-[210px] h-[160px] rounded-md bg-gray-300 shadow-md hover:shadow-lg transition-all duration-200 ease-out">
                <img
                  src={elm.image}
                  alt="service"
                  className="w-full h-full object-cover rounded-md"
                />

                {/* Optional “New” ribbon */}
                {elm.isNew && (
                  <div className="absolute top-3 left-[-9px]">
                    <svg
                      className="w-[81px] h-[24px]"
                      viewBox="0 0 81 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g fill="none" fillRule="evenodd">
                        <path fill="#00C3FF" d="M7.308 16H0l7.308 8z"></path>
                        <path fill="#00C3FF" d="M0 0h81L69 7.976 81 16H0z"></path>
                      </g>
                    </svg>
                    <span className="absolute top-[2px] left-[8px] text-xs font-semibold text-white">
                      New
                    </span>
                  </div>
                )}
              </div>

              {/* Title below image */}
              <h2 className="font-bold t mt-2 text-gray-800 text-sm">
                {elm.title}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Scrollimg;
