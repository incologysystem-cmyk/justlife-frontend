"use client";
import React from "react";
import Image from "next/image";
import { MapPin, LocateFixed } from "lucide-react";

const HeroSection = () => {
    return (
        <section className="relative w-full h-[100vh] flex items-center justify-center">
            <Image
                src="/Images/hero-bg.webp"
                alt="Home background"
                fill
                className="object-cover -z-10"
                priority
            />

            <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/10 -z-0"></div>

            <div className="text-center text-gray-800 z-10 flex flex-col items-center px-4">
                <h1 className="text-4xl md:text-5xl font-semibold mb-6">
                    #1 Super app for all home services
                </h1>

                <div className="bg-white shadow-lg rounded-2xl px-6 py-5 flex flex-col items-start sm:w-[570px]">
                    <h5 className="font-bold mb-3">
                        Where would you like to receive your service?
                    </h5>

                    <div className="relative w-full ">

                        <MapPin className="absolute left-3 top-3 fill-black text-white" size={25} />

                        <input
                            type="text"
                            placeholder="Search for area, street name, landmark..."
                            className="border border-gray-300 w-full rounded-3xl pl-9 pr-32 py-3 outline-none text-sm"
                        />

                        <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-sky-50 text-sky-400 px-3 py-1 rounded-2xl flex items-center justify-center gap-1 hover:bg-sky-200 transition">
                            <span className="text-sm mb-1 font-light">Set my location</span>
                            <LocateFixed size={20} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
