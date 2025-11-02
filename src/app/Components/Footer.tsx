import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Footer = () => {
    return (
        <>
            <section>
                <div className="parent w-full mt-15 flex flex-wrap items-center justify-between px-4 md:px-10 lg:px-15">
                    <div className="left w-full md:w-[50%] text-center md:text-left">
                        <p className="text-gray-400 tracking-wider text-sm uppercase font-medium">
                            Download our Super app!
                        </p>
                        <h1 className="text-2xl mt-3 font-semibold">
                            Manage all to-dos with a single tap!
                        </h1>
                        <p className="text-lg mt-3">
                            Book and manage your appointments, view your professional&apos;s profile and ratings, get the latest offers, and much more.
                        </p>

                        <div className="btns flex flex-wrap justify-center md:justify-start gap-4 md:gap-8 mt-6">
                            <Image
                                className="hover:cursor-pointer w-[120px] md:w-[130px]"
                                src="/Images/appstore.Webp"
                                width={130}
                                height={90}
                                alt="App Store"
                            />
                            <Image
                                className="hover:cursor-pointer w-[120px] md:w-[130px]"
                                src="/Images/playstore.Webp"
                                width={130}
                                height={90}
                                alt="Play Store"
                            />
                        </div>
                    </div>

                    <div className="right w-full md:w-auto flex justify-center mt-8 md:mt-0">
                        <Image
                            src="/Images/apps.Webp"
                            width={400}
                            height={900}
                            alt="mobile"
                            className="w-[250px] sm:w-[300px] md:w-[400px] h-auto"
                        />
                    </div>
                </div>

                <div className='bg-[#212121] text-white w-full px-15 py-5'>

                    <h1 className='font-bold'>Services</h1>
                    <div className='mt-5 flex flex-wrap gap-2'>
                        <Link href="/AllPage/MaidService"><button className='bg-black rounded-2xl px-2 text-sm font-medium pb-1 pt-1 mb-2 hover:cursor-pointer'>Maid Service</button></Link>
                        <Link href="/AllPage/CarpetCleaning"><button className='bg-black rounded-2xl px-2 text-sm font-medium pb-1 pt-1 mb-2 hover:cursor-pointer'>Carpet Cleaning</button></Link>
                        <Link href="/AllPage/MattressCleaning"><button className='bg-black rounded-2xl px-2 text-sm font-medium pb-1 pt-1 mb-2 hover:cursor-pointer'>Mattress Cleaning</button></Link>
                        <Link href="/AllPage/SofaCleaning"> <button className='bg-black rounded-2xl px-2 text-sm font-medium pb-1 pt-1 mb-2 hover:cursor-pointer'>Sofa Cleaning</button></Link>
                        <button className='bg-black rounded-2xl px-2 text-sm font-medium pb-1 pt-1 mb-2 hover:cursor-pointer'>Curtain Cleaning</button>
                        <button className='bg-black rounded-2xl px-2 text-sm font-medium pb-1 pt-1 mb-2 hover:cursor-pointer'>Deep Cleaning</button>
                        <button className='bg-black rounded-2xl px-2 text-sm font-medium pb-1 pt-1 mb-2 hover:cursor-pointer'>Move In & Out Cleaning Services</button>
                        <button className='bg-black rounded-2xl px-2 text-sm font-medium pb-1 pt-1 mb-2 hover:cursor-pointer'>House Cleaning</button>
                        <button className='bg-black rounded-2xl px-2 text-sm font-medium pb-1 pt-1 mb-2 hover:cursor-pointer'>Laundry & Dry Cleaning</button>
                        <button className='bg-black rounded-2xl px-2 text-sm font-medium pb-1 pt-1 mb-2 hover:cursor-pointer'>AC Cleaning Service</button>
                        <button className='bg-black rounded-2xl px-2 text-sm font-medium pb-1 pt-1 mb-2 hover:cursor-pointer'>Disinfection Service</button>
                        <button className='bg-black rounded-2xl px-2 text-sm font-medium pb-1 pt-1 mb-2 hover:cursor-pointer'>Covid-19 PCR Test at Home</button>
                        <button className='bg-black rounded-2xl px-2 text-sm font-medium pb-1 pt-1 mb-2 hover:cursor-pointer'>Women&apos;s Salon</button>
                        <button className='bg-black rounded-2xl px-2 text-sm font-medium pb-1 pt-1 mb-2 hover:cursor-pointer'>Women&apos;s Spa</button>
                        <button className='bg-black rounded-2xl px-2 text-sm font-medium pb-1 pt-1 mb-2 hover:cursor-pointer'>Furniture Cleaning</button>
                        <button className='bg-black rounded-2xl px-2 text-sm font-medium pb-1 pt-1 mb-2 hover:cursor-pointer'>Men&apos;s Salon</button>
                        <button className='bg-black rounded-2xl px-2 text-sm font-medium pb-1 pt-1 mb-2 hover:cursor-pointer'>Lab Tests at Home</button>
                        <button className='bg-black rounded-2xl px-2 text-sm font-medium pb-1 pt-1 mb-2 hover:cursor-pointer'>Pest Control Service</button>
                        <button className='bg-black rounded-2xl px-2 text-sm font-medium pb-1 pt-1 mb-2 hover:cursor-pointer'>Men&apos;s Spa</button>
                        <button className='bg-black rounded-2xl px-2 text-sm font-medium pb-1 pt-1 mb-2 hover:cursor-pointer'>Men&apos;s Grooming</button>
                        <button className='bg-black rounded-2xl px-2 text-sm font-medium pb-1 pt-1 mb-2 hover:cursor-pointer'>Hair Salon</button>
                        <button className='bg-black rounded-2xl px-2 text-sm font-medium pb-1 pt-1 mb-2 hover:cursor-pointer'>Pet Grooming</button>
                        <button className='bg-black rounded-2xl px-2 text-sm font-medium pb-1 pt-1 mb-2 hover:cursor-pointer'>IV Therapy</button>
                        <button className='bg-black rounded-2xl px-2 text-sm font-medium pb-1 pt-1 mb-2 hover:cursor-pointer'>Babysitting At Home</button>
                        <button className='bg-black rounded-2xl px-2 text-sm font-medium pb-1 pt-1 mb-2 hover:cursor-pointer'>Car Wash At Home</button>
                        <button className='bg-black rounded-2xl px-2 text-sm font-medium pb-1 pt-1 mb-2 hover:cursor-pointer'>Plumber Services</button>
                        <button className='bg-black rounded-2xl px-2 text-sm font-medium pb-1 pt-1 mb-2 hover:cursor-pointer'>Handyman Services</button>
                        <button className='bg-black rounded-2xl px-2 text-sm font-medium pb-1 pt-1 mb-2 hover:cursor-pointer'>Electrician Services</button>
                        <button className='bg-black rounded-2xl px-2 text-sm font-medium pb-1 pt-1 mb-2 hover:cursor-pointer'>Home Painting</button>
                        <button className='bg-black rounded-2xl px-2 text-sm font-medium pb-1 pt-1 mb-2 hover:cursor-pointer'>Personal Trainer</button>
                        <button className='bg-black rounded-2xl px-2 text-sm font-medium pb-1 pt-1 mb-2 hover:cursor-pointer'>Nail Extension</button>
                        <button className='bg-black rounded-2xl px-2 text-sm font-medium pb-1 pt-1 mb-2 hover:cursor-pointer'>Packers and Movers</button>
                        <button className='bg-black rounded-2xl px-2 text-sm font-medium pb-1 pt-1 mb-2 hover:cursor-pointer'>Physiotherapy at Home</button>
                        <button className='bg-black rounded-2xl px-2 text-sm font-medium pb-1 pt-1 mb-2 hover:cursor-pointer'>Body Adjustment</button>
                        <button className='bg-black rounded-2xl px-2 text-sm font-medium pb-1 pt-1 mb-2 hover:cursor-pointer'>Part Time Maid Services</button>
                        <button className='bg-black rounded-2xl px-2 text-sm font-medium pb-1 pt-1 mb-2 hover:cursor-pointer'>Psychotherapy & Counselling</button>
                        <button className='bg-black rounded-2xl px-2 text-sm font-medium pb-1 pt-1 mb-2 hover:cursor-pointer'>Nurse Care at Home</button>
                        <button className='bg-black rounded-2xl px-2 text-sm font-medium pb-1 pt-1 mb-2 hover:cursor-pointer'>Mobile Ice Bath</button>
                        <button className='bg-black rounded-2xl px-2 text-sm font-medium pb-1 pt-1 mb-2 hover:cursor-pointer'>Lashes and Brows at Home</button>
                        <button className='bg-black rounded-2xl px-2 text-sm font-medium pb-1 pt-1 mb-2 hover:cursor-pointer'>Vaccines at Home</button>
                        <button className='bg-black rounded-2xl px-2 text-sm font-medium pb-1 pt-1 mb-2 hover:cursor-pointer'>Spray Tanning</button>
                        <button className='bg-black rounded-2xl px-2 text-sm font-medium pb-1 pt-1 mb-2 hover:cursor-pointer'>Commercial Cleaning</button>
                        <button className='bg-black rounded-2xl px-2 text-sm font-medium pb-1 pt-1 mb-2 hover:cursor-pointer'>Office Cleaning</button>
                        <button className='bg-black rounded-2xl px-2 text-sm font-medium pb-1 pt-1 mb-2 hover:cursor-pointer'>Villa Cleaning</button>
                        <button className='bg-black rounded-2xl px-2 text-sm font-medium pb-1 pt-1 mb-2 hover:cursor-pointer'>Henna Service</button>
                        <button className='bg-black rounded-2xl px-2 text-sm font-medium pb-1 pt-1 mb-2 hover:cursor-pointer'>Housekeeping Services</button>
                        <button className='bg-black rounded-2xl px-2 text-sm font-medium pb-1 pt-1 mb-2 hover:cursor-pointer'>Floor Cleaning</button>
                        <button className='bg-black rounded-2xl px-2 text-sm font-medium pb-1 pt-1 mb-2 hover:cursor-pointer'>Waxing Service</button>
                        <button className='bg-black rounded-2xl px-2 text-sm font-medium pb-1 pt-1 mb-2 hover:cursor-pointer'>Doctor on Call</button>
                        <button className='bg-black rounded-2xl px-2 text-sm font-medium pb-1 pt-1 mb-2 hover:cursor-pointer'>Facial Treatment Service</button>
                        <button className='bg-black rounded-2xl px-2 text-sm font-medium pb-1 pt-1 mb-2 hover:cursor-pointer'>Eyebrow Threading</button>
                        <button className='bg-black rounded-2xl px-2 text-sm font-medium pb-1 pt-1 mb-2 hover:cursor-pointer'>Flu Vaccine</button>
                        <button className='bg-black rounded-2xl px-2 text-sm font-medium pb-1 pt-1 mb-2 hover:cursor-pointer'>Apartment Cleaning</button>
                        <button className='bg-black rounded-2xl px-2 text-sm font-medium pb-1 pt-1 mb-2 hover:cursor-pointer'>Oxygen Therapy</button>
                        <button className='bg-black rounded-2xl px-2 text-sm font-medium pb-1 pt-1 mb-2 hover:cursor-pointer'>Cat Grooming</button>
                    </div>



                    <div className='flex flex-wrap mt-8 mb-13 gap-12'>
                        <div>
                            <h1 className='font-bold'>United Arab Emirates</h1>
                            <div className='flex mt-3 gap-2'>
                                <button className='bg-black rounded-2xl px-2 text-sm font-medium pb-1 pt-1 mb-2 hover:cursor-pointer'>Dubai</button>
                                <button className='bg-black rounded-2xl px-2 text-sm font-medium pb-1 pt-1 mb-2 hover:cursor-pointer'>Abu Dhabi</button>
                                <button className='bg-black rounded-2xl px-2 text-sm font-medium pb-1 pt-1 mb-2 hover:cursor-pointer'>Sharjah</button>
                                <button className='bg-black rounded-2xl px-2 text-sm font-medium pb-1 pt-1 mb-2 hover:cursor-pointer'>Ajman</button>
                            </div>
                        </div>
                        <div>
                            <h1 className='font-bold'>Saudi Arabia</h1>
                            <div className='flex mt-3 gap-2'>
                                <button className='bg-black rounded-2xl px-2 text-sm font-medium pb-1 pt-1 mb-2 hover:cursor-pointer'>Jeddah</button>
                                <button className='bg-black rounded-2xl px-2 text-sm font-medium pb-1 pt-1 mb-2 hover:cursor-pointer'>Riyadh</button>
                            </div>
                        </div>
                        <div>
                            <h1 className='font-bold'>Qatar</h1>
                            <div className='flex mt-3 gap-2'>
                                <button className='bg-black rounded-2xl px-2 text-sm font-medium pb-1 pt-1 mb-2 hover:cursor-pointer'>Doha</button>
                            </div>
                        </div>
                    </div>



                    <hr className='text-gray-700' />
                    <div className=' w-full flex flex-wrap items-center justify-between'>
                        <div className="btns flex gap-4 mt-5">
                            <Image src="/Images/appstore.Webp" width={120} height={90} className=' hover:cursor-pointer' alt="" />
                            <Image src="/Images/playstore.Webp" width={120} height={90} className=' hover:cursor-pointer' alt="" />
                        </div>
                        <div className="btns flex gap-5 mt-5">
                            <Image src="/Images/facebook-logo.svg" width={27} height={27} className=' hover:cursor-pointer' alt="" />
                            <Image src="/Images/twitter-logo.svg" width={27} height={27} className=' hover:cursor-pointer' alt="" />
                            <Image src="/Images/instagram-logo.svg" width={25} height={25} className=' hover:cursor-pointer' alt="" />
                        </div>
                        <div className='flex mt-5 tracking-wide gap-5 '>
                            <p className='text-[13px] hover:cursor-pointer'>F.A.Q</p>
                            <p className='text-[13px] hover:cursor-pointer'>Terms</p>
                            <p className='text-[13px] hover:cursor-pointer'>Privacy</p>
                            <p className='text-[13px] hover:cursor-pointer'>Sitemap</p>
                            <p className='text-[13px] hover:cursor-pointer'>Career</p>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Footer