'use client';
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from "lucide-react";

const Scrollimg = () => {
  const servImg = [
    { image: "/images/img-1.webp", isNew: false, title: "Home Cleaning" },
    { image: "/images/img-2.webp", isNew: false, title: "Furniture Cleaning" },
    { image: "/images/img-3.webp", isNew: false, title: "Home Deep Cleaning" },
    { image: "/images/img-4.webp", isNew: true, title: "Kitchen & Bathroom Deep Clean" },
    { image: "/images/img-5.webp", isNew: false, title: "Laundry & Dry Cleaning" },
    { image: "/images/img-6.webp", isNew: false, title: "AC Cleaning" },
    { image: "/images/img-7.webp", isNew: false, title: "Car Wash" },
    { image: "/images/img-8.webp", isNew: false, title: "Shoe Cleaning" },
    { image: "/images/img-9.webp", isNew: false, title: "Women's Salon" },
    { image: "/images/img-10.webp", isNew: false, title: "Women's Spa" },
    { image: "/images/img-11.webp", isNew: false, title: "Men's Salon" },
    { image: "/images/img-12.webp", isNew: false, title: "Men's Spa" },
    { image: "/images/img-13.webp", isNew: false, title: "Nail Extensions" },
    { image: "/images/img-14.webp", isNew: false, title: "Lashes & Brows" },
    { image: "/images/img-15.webp", isNew: false, title: "Spray Tanning" },
    { image: "/images/img-16.webp", isNew: false, title: "Makeup" },
    { image: "/images/img-17.webp", isNew: false, title: "Handyman & Maintenance" },
    { image: "/images/img-18.webp", isNew: false, title: "Home Painting" },
    { image: "/images/img-19.webp", isNew: false, title: "Water Tank Cleaning" },
    { image: "/images/img-20.webp", isNew: false, title: "Lab Tests at Home" },
    { image: "/images/img-21.webp", isNew: false, title: "IV Therapy at Home" },
    { image: "/images/img-22.webp", isNew: false, title: "Doctor Consultations" },
    { image: "/images/img-23.webp", isNew: false, title: "Flu Vaccine at Home" },
    { image: "/images/img-24.webp", isNew: false, title: "PCR & Flu Test at Home" },
    { image: "/images/img-25.webp", isNew: false, title: "Nurse Care at Home" },
    { image: "/images/img-26.webp", isNew: false, title: "Physiotherapy at Home" },
    { image: "/images/img-27.webp", isNew: false, title: "Psychotherapy & Counselling" },
  ];

  const [slide, setSlide] = useState(0);
  const visibleCards = 5; // Desktop default

  const nextSlide = () => {
    if (slide < servImg.length - visibleCards) setSlide(slide + 1);
  };

  const prevSlide = () => {
    if (slide > 0) setSlide(slide - 1);
  };

  return (
    <div className="container w-full px-4 md:px-10 py-2 mb-10">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 text-center sm:text-left">
          What other services can we help you with?
        </h1>

        <div className="flex justify-center sm:justify-end gap-3">
          <button
            onClick={prevSlide}
            className="rounded-full w-10 h-10 flex justify-center items-center border bg-white shadow hover:bg-gray-100 transition"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="rounded-full w-10 h-10 flex justify-center items-center border bg-white shadow hover:bg-gray-100 transition"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Slider */}
      <div className="flex gap-4 mt-6 overflow-hidden">
        <div className="flex gap-4 grayscale-[30%] hover:grayscale-0">
          {servImg.map((elm, ind) => (
            <div
              key={ind}
              style={{
                transform: `translateX(-${slide * 220}px)`,
                transition: "transform 0.5s ease",
              }}
              className="relative shrink-0 w-[190px] sm:w-[200px] md:w-[210px]"
            >
              <div className="relative w-full h-[130px] sm:h-[150px] md:h-[160px] rounded-md bg-gray-200 shadow hover:shadow-lg transition">
                <img
                  src={elm.image}
                  alt={elm.title}
                  className="w-full h-full object-cover rounded-md"
                />
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

              <h2 className="font-semibold text-gray-800 text-xs sm:text-sm mt-2 text-center">
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
