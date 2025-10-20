// components/HouseCleaningPage.jsx
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import Scrollimg from "./Scroll-img";


export default function HomeCleaning() {
    return (
        <>


            <div className="container w-[190vh] mx-auto px-5 py-4 text-[]">
                {/*  Link */}
                <div className="flex items-center text-sm text-gray-400 tracking-wide">
                    <Link href="/" className="underline">
                        HOME
                    </Link>
                    <ChevronLeft className="mx-2 w-4 h-4" />
                    <span>HOUSE CLEANING IN UAE</span>
                </div>


                {/* Hero Section */}
                <div
                    className="relative bg-cover mb-5  h-[550px] mt-6 rounded-xl shadow-lg flex items-end justify-start"
                    style={{ backgroundImage: "url('/Images/background-img.webp')" }}
                >
                    {/* Dark overlay */}
                    <div className="absolute p-5 inset-0 bg-black/40 rounded-2xl"></div>

                    {/* Text + Button  */}
                    <div className="relative z-10 p-10 pb-12 ">
                        <h1 className="md:text-5xl custom-font font-bold text-white leading-snug mb-4">
                            Cleaning Services in the United Arab Emirates
                        </h1>

                        <p className="text-base md:text-lg text-gray-200 mb-8">
                            Now book the best affordable, simple and convenient house cleaning service.
                        </p>

                        {/* Book Now Buttons */}
                        <div className="flex flex-col md:flex-row gap-4">
                            {/* Desktop Button */}
                            <Link
                                href="https://www.justlife.com/en-AE/home-cleaning/checkout/details"
                                className="hidden md:inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-bold uppercase rounded-full px-8 py-3 tracking-wide transition-all duration-300"
                            >
                                Book Now
                            </Link>

                            {/* Mobile Button */}
                            <Link
                                href="https://www.justlife.com/en-AE/home-cleaning/checkout/details"
                                className="md:hidden inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-bold uppercase rounded-full px-8 py-3 w-full text-center transition-all duration-300"
                            >
                                Book Now
                            </Link>
                        </div>
                    </div>
                </div>






                {/* ----------- PART 2: Intro + Why choose etc. ----------- */}
                <div className="cust-font leading-relaxed">
                    <div>
                        <p className="mt-8 mb-10 text-lg text-[#4A4A4A]">
                            Getting your house cleaned in the UAE is only a few clicks away. Justlife is here for all your home needs, from house cleaning to hair salon services. House cleaning is a serious job, so you can let us do it to save time and energy.
                        </p>

                        <h3 className="text-xl font-bold mt-5 mb-2 text-[#4A4A4A]">
                            Simple, Convenient, and Affordable Way to Book House Cleaning Services
                        </h3>
                        <p className="mt-5 mb-3 text-lg text-[#4A4A4A]">
                            Making your life easier is simple with Justlife. Our services are here for you for every part of your life, and you won't have to worry about cleaning your house ever again. You can hire a <strong>house cleaning service</strong> from our website and mobile app with a few simple clicks. If you are looking for a cleaning service in the UAE, look no further!
                        </p>
                        <p className="mt-5 text-lg text-[#4A4A4A]">
                            Here's why you should hire a professional cleaning company and more details on the service.
                        </p>

                        <h3 className="text-xl font-bold mt-10 mb-8 text-[#4A4A4A]">
                            Why Book House Cleaning Services Through Justlife
                        </h3>
                        <p className="mt-8 mb-8 text-lg text-[#4A4A4A]">
                            We all lead busy lives, and our obligations do not make it easier. You probably want to see a clean house when you arrive home after a long work day. Sadly, it's not possible without hours of work. However, when you hire a <strong>professional cleaner</strong> from Justlife, you don't have to lift a finger for a shiny house. Many prefer hiring a <strong>house cleaning service</strong> because it will save them hours. You can then spend those hours with your loved ones and enjoy your freshly cleaned house.
                        </p>

                        <h3 className="text-xl font-bold mt-8 mb-2 text-[#4A4A4A]">
                            What is House Cleaning Service?
                        </h3>
                        <p className="mt-5 mb-2 text-lg text-[#4A4A4A]">
                            House cleaning is no easy task; with Justlife, you can leave it to professionals. Justlife's house cleaning service includes everything you need for a clean home. Our professionals are well-trained and equipped to clean your house with the best tools.
                        </p>

                        <h3 className="text-xl font-bold mt-8 mb-2 text-[#4A4A4A]">
                            What is Included in House Cleaning Services?
                        </h3>
                        <p className="mt-5 mb-2 text-lg text-[#4A4A4A]">
                            Now, let's see what is included in a <strong>house cleaning</strong> service when you hire Justlife. Of course, you can let us know about anything extra you need or choose other options such as deep cleaning or disinfection service.
                        </p>
                    </div>
                </div>

                {/* ----------- PART 3: Services, extra, details ----------- */}
                <div className="cust-font leading-relaxed">
                    <div>
                        <h3 className="text-xl font-bold mt-8 mb-2 text-[#4A4A4A]">
                            1. House Cleaning Services
                        </h3>
                        <p className="mt-5 mb-5 text-lg text-[#4A4A4A]">
                            Justlife makes sure that the best professional is sent to your house when you make a request. No matter how big or small your house is, we will send an adequate number of cleaning professionals for the <strong>best home cleaning</strong> possible. Our professionals will finish the job in no time, leaving you with a clean and shiny home.
                        </p>

                        <h3 className="text-xl font-bold mt-8 mb-2 text-[#4A4A4A]">
                            2. General Home Cleaning Services
                        </h3>
                        <p className="mt-5 mb-5 text-lg text-[#4A4A4A]">
                            Professional house cleaning includes general cleaning of the entire house. This includes vacuuming the carpet, mopping the floors, cleaning the windows, and so on. When you finish rough cleaning, many dirty surfaces and corners remain. These are the specific parts, but it does not end here.
                        </p>

                        <h3 className="text-xl font-bold mt-8 mb-2 text-[#4A4A4A]">
                            3. Deep Cleaning Services
                        </h3>
                        <p className="mt-5 mb-5 text-lg text-[#4A4A4A]">
                            <Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]">
                                Deep cleaning
                            </Link>{" "}
                            is another service offered by Justlife, which involves even more things. When you hire professionals for deep cleaning, they will also clean air filters, ceiling fans, wash curtains, and more.
                        </p>

                        <h3 className="text-xl font-bold mt-8 mb-2 text-[#4A4A4A]">
                            4. Bedroom Cleaning Services
                        </h3>
                        <p className="mt-5 mb-5 text-lg text-[#4A4A4A]">
                            No matter how messy your house is, Justlife's professionals will clean the whole room with ease. Our professionals will change your bed sheets if necessary, dust all the wardrobes, and ensure that your bedroom is fresh after they leave. While they are cleaning your house, you can sit back and relax.
                        </p>

                        <h3 className="text-xl font-bold mt-8 mb-2 text-[#4A4A4A]">
                            5. Kitchen Cleaning Services
                        </h3>
                        <p className="mt-5 mb-5 text-lg text-[#4A4A4A]">
                            This is probably the most challenging part for everyone who tried cleaning their kitchens once. The oily surfaces on the oven, the dusty shelves, and many more problems occur when you try to clean your kitchen thoroughly. However, <strong>professional house cleaning</strong> is much more comprehensive. When you hire the{" "}
                            <Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]">
                                kitchen cleaning service
                            </Link>{" "}
                            from Justlife, cleaning professionals will scrub cabinets and countertops and clean all the appliances, such as the refrigerator. They will also remove the kitchen hood and clean everything needed.
                        </p>

                        <h3 className="text-xl font-bold mt-8 mb-2 text-[#4A4A4A]">
                            6. Bathroom Cleaning Services
                        </h3>
                        <p className="mt-5 mb-5 text-lg text-[#4A4A4A]">
                            Many people hate cleaning bathrooms because they can get dirty very quickly. You probably don't have time to clean your bathroom comprehensively when you come back from work. Then just let us know, and we will send the best professionals for you. The{" "}
                            <Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]">
                                bathroom cleaning
                            </Link>{" "}
                            includes scrubbing sinks and bathtubs, disposing of waste in your bathroom, and cleaning the mats. Professional{" "}
                            <Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]">
                                home cleaning services
                            </Link>{" "}
                            is essential for bathrooms as a dirty bathroom is both unpleasant and a health hazard.
                        </p>

                        <h3 className="text-xl font-bold mt-8 mb-2 text-[#4A4A4A]">
                            Which Professional House Cleaner Will Come To My Place?
                        </h3>
                        <p className="mt-5 mb-5 text-lg text-[#4A4A4A]">
                            We will send you the best and most qualified cleaning professionals to clean your house. Depending on the size of your home and your needs, we choose one or more professional cleaners to take care of your chores. You do not have to worry about picking a professional, as we will take care of it.
                        </p>

                        <h3 className="text-xl font-bold mt-8 mb-2 text-[#4A4A4A]">
                            How Can I Skip or Reschedule House Cleaning Bookings?
                        </h3>
                        <p className="mt-5 mb-5 text-lg text-[#4A4A4A]">
                            It is easy to reschedule your house cleaning appointments with Justlife! You can take care of it from your profile on our website or application. You won't be charged when you reschedule your work 2 hours prior. When you reschedule for less than 2 hours, you will pay a small amount. You can check our FAQ for more payment information.
                        </p>

                        <h3 className="text-xl font-bold mt-8 mb-2 text-[#4A4A4A]">
                            How Much Do Cleaning Services Cost?
                        </h3>
                        <p className="mt-5 mb-5 text-lg text-[#4A4A4A]">
                            House cleaning prices can vary from house to house, as every home has different needs. It can also differ when you choose additional services, such as disinfecting or deep cleaning. You can get an estimate from the Justlife app or website after giving your house information and what you desire. We will make sure that you get the best offer possible.
                        </p>

                        <h3 className="text-xl font-bold mt-8 mb-2 text-[#4A4A4A]">
                            Are Home Cleaning Services Worth It?
                        </h3>
                        <p className="mt-5 mb-5 text-lg text-[#4A4A4A]">
                            Many people find home cleaning services very convenient because these days it is hard to spend your time on house cleaning. When you hire a <strong>house cleaning company</strong>, you will save a lot of time to spend with your loved ones. Also, professional house cleaners are the best choice if you find it boring or hard to do the physical work.
                        </p>

                        <h3 className="text-xl font-bold mt-8 mb-2 text-[#4A4A4A]">
                            Why Should I Get My House Cleaned?
                        </h3>
                        <p className="mt-5 mb-5 text-lg text-[#4A4A4A]">
                            A clean house is convenient, always. When you get your home cleaned, you won't have to worry about a monotonous routine and the weekly rush of cleaning. Moreover, professionals will probably do a much better job than you cleaning your house thoroughly.
                        </p>

                        <h3 className="text-xl font-bold mt-8 mb-2 text-[#4A4A4A]">
                            How Much Do You Tip For A Cleaning Service?
                        </h3>
                        <p className="mt-5 mb-5 text-lg text-[#4A4A4A]">
                            All our tips are directly paid to our professionals, and the amount you tip is solely at your own discretion. A little tip can go a long way toward rewarding our hardworking professionals. However, it's not mandatory. You only have to pay for your initial booking, and no additional payments are needed.
                        </p>

                        <h3 className="text-xl font-bold mt-8 mb-2 text-[#4A4A4A]">
                            How Long Does It Take To Clean A House Professionally?
                        </h3>
                        <p className="mt-5 mb-8 text-lg text-[#4A4A4A]">
                            It heavily depends on the size of your house and how cluttered it is, but our professionals are trained to be efficient. Usually, a house cleaning can range from anywhere between 1 hour to 4 hours.
                        </p>

                        <p className="mt-5 mb-8 text-lg text-[#4A4A4A]">
                            For the service areas we operate, kindly visit:
                            <Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]">Cleaning Services Dubai</Link>,
                            <Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]"> Cleaning Services Abu Dhabi</Link>,
                            <Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]"> Cleaning Services Sharjah</Link>,
                            <Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]"> Cleaning Services Ajman.</Link>
                        </p>

                        <p className="mt-8 mb-5 text-lg text-[#4A4A4A]"  >
                            For more information about other services we provide, kindly visit: <Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]">Apartment Cleaning</Link>,
                            <Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]"> Apartment Cleaning</Link>,<Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]">Babysitting at Home</Link>,<Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]">Bathroom Cleaning Service</Link>,
                            <Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]">Car Cleaning at Home</Link>,
                            <Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]">Carpet and Rug Cleaning</Link>,
                            <Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]"> Commercial Cleaning Service</Link>,<Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]">Curtain Cleaning Service</Link>,<Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]">Deep Cleaning</Link>,<Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]">Electric Services</Link>,<Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]">Floor Cleaning</Link>,<Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]">Handyman and Maintenance Services</Link>,<Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]">House Painting Services</Link>,
                            <Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]">House Cleaning Services</Link>,
                            <Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]">Housekeeping</Link>,
                            <Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]"> Kitchen Cleaning Service</Link>,
                            <Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]">Laundry and Dry Cleaning Service</Link>
                            <Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]">Mattress Cleaning and Washing Service</Link>
                            <Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]">Move in & Move out Cleaning</Link>
                            <Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]">Babysitting Service</Link>
                            <Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]">Bathroom Cleaning</Link>
                            <Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]"> Car Cleaning Service at Home</Link>
                            <Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]">Carpet Cleaning</Link>

                            <Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]"> Commercial Cleaning</Link>

                            <Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]">Curtain Cleaning </Link>
                            <Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]"> Deep Cleaning</Link>

                            <Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]"> Disinfection Service</Link>
                            <Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]"> Electrician Services</Link>
                            <Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]"> Floor Cleaning</Link>
                            <Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]"> Furniture Cleaning</Link>
                            <Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]"> Handyman Services</Link>
                            <Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]"> Home Painting</Link>

                            <Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]"> Cleaning Services</Link><Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]"> Laundry and Dry Cleaning</Link>
                            <Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]"> Housekeeping, Kitchen Cleaning</Link>
                            <Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]">  Maid Service</Link>
                            <Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]">  Mattress Cleaning</Link>
                            <Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]"> Move in and out Cleaning</Link>
                            <Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]">  Office Cleaning</Link>
                            <Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]"> Packers and Movers</Link>
                            <Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]"> Part Time Maid Services</Link>

                            <Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]">   Plumber Services</Link>
                            <Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]"> Room Cleaning</Link>
                            <Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]"> Sofa Cleaning </Link> or
                            <Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]"> Villa  Cleaning</Link>
                        </p>
                    </div>

                </div>

            </div>
            <Scrollimg/>
        </>
    );
}