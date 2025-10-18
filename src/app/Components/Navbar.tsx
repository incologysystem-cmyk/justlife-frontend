"use client";
import React, { useState } from "react";
import Image from "next/image";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [contact, setContact] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleToggle2 = () => {
        setContact(!contact);
    };

    return (
        <>
            <div className="relative flex justify-between items-center w-full px-15 h-[80px]">
                <div>
                    <Image
                        src="/Images/justlife-logo.svg"
                        alt="logo"
                        width={130}
                        height={100}
                    />
                </div>

                <div className="flex justify-between items-center gap-3 relative">
                    <button className="p-2 hover:border rounded-full border-gray-300 transition duration-200 font-bold">
                        العربية
                    </button>

                    <div className="relative">
                        <button
                            onClick={handleToggle}
                            className="p-2 hover:border rounded-full border-gray-300 transition duration-200"
                        >
                            <Image
                                src="/Images/flag1.svg"
                                width={25}
                                height={25}
                                alt="flag1"
                            />
                        </button>

                        {isOpen && (
                            <div className="absolute px-2 right-0 pb-2 mt-2 w-65 bg-white shadow-lg border border-gray-200 rounded-xl z-50">
                                <h3 className="px-6 pt-4 font-bold text-gray-800">
                                    Select Country
                                </h3>

                                <div className="flex flex-col gap-4 p-2">
                                    <button className="flex items-center gap-3 border border-gray-400 hover:bg-sky-100 hover:border-sky-300 p-2 rounded-lg text-gray-800">
                                        <Image
                                            src="/Images/flag1.svg"
                                            width={25}
                                            height={25}
                                            alt="UAE"
                                        />
                                        <span className="font-bold text-start">United Arab Emirates</span>
                                    </button>

                                    <button className="flex items-center gap-3 border border-gray-300 hover:bg-sky-100 hover:border-sky-300 p-2 rounded-lg text-gray-800">
                                        <Image
                                            src="/Images/sa.svg"
                                            width={25}
                                            height={25}
                                            alt="Saudi Arabia"
                                        />
                                        <span className="font-normal">Saudi Arabia</span>
                                    </button>

                                    <button className="flex items-center gap-3 border border-gray-300 hover:bg-sky-100 hover:border-sky-300 p-2 rounded-lg text-gray-800">
                                        <Image
                                            src="/Images/qa.svg"
                                            width={25}
                                            height={25}
                                            alt="Qatar"
                                        />
                                        <span className="font-normal">Qatar</span>
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="relative">
                        <button onClick={handleToggle2} className="flex  justify-between gap-5 border border-gray-300 px-4 py-3 rounded-4xl items-center">
                            <Image
                                src="/Images/person.svg"
                                width={25}
                                height={25}
                                alt="person"
                            />
                            <Image
                                src="/Images/hamburger-menu.svg"
                                width={25}
                                height={25}
                                alt="hamburger-menu"
                            />
                        </button>
                    </div>

                    {contact && (
                        <div className="absolute right-0  top-15 w-90 bg-white shadow-sm border border-gray-200 rounded-xl z-50">
                            <div className=" p-4 ">
                                <button className="border hover:cursor-pointer rounded-full text-white font-bold bg-amber-300 w-full py-3">Sign Up or Log In </button>
                            </div>
                            <button className=" ps-5 hover:cursor-pointer flex gap-2 items-center justify-start tracking-wide w-full py-4 text-start hover:bg-sky-100"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M478-240q21 0 35.5-14.5T528-290q0-21-14.5-35.5T478-340q-21 0-35.5 14.5T428-290q0 21 14.5 35.5T478-240Zm-36-154h74q0-33 7.5-52t42.5-52q26-26 41-49.5t15-56.5q0-56-41-86t-97-30q-57 0-92.5 30T342-618l66 26q5-18 22.5-39t53.5-21q32 0 48 17.5t16 38.5q0 20-12 37.5T506-526q-44 39-54 59t-10 73Zm38 314q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" /></svg> Help</button>
                            <hr className="text-gray-300" />

                            <div className="btns  py-4 flex justify-center gap-4 ">
                                <Image src="/Images/appstore.Webp" width={150} height={90} className=' hover:cursor-pointer' alt="" />
                                <Image src="/Images/playstore.Webp" width={150} height={90} className=' hover:cursor-pointer' alt="" />
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <hr className="text-gray-300" />
        </>
    );
};

export default Navbar;
