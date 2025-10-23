// components/FurnitureClean.jsx
import Link from "next/link";
import Scrollimg from "./Scroll-img";
import { ChevronLeft } from "lucide-react";

function FurnitureClean() {
    return (
        <>
            <div className="container w-[190vh] mx-auto px-5 py-4">
                {/* Breadcrumb / Link */}
                <div className="flex items-center text-sm text-gray-400 tracking-wide">
                    <Link href="/" className="underline">
                        HOME
                    </Link>
                    <ChevronLeft className="mx-2 w-4 h-4" />
                    <span className="uppercase">Furniture Cleaning</span>
                </div>

                {/* Hero Section */}
                <div
                    className="relative bg-cover h-[550px] mt-6 rounded-xl shadow-lg flex items-end justify-start"
                    style={{ backgroundImage: "url('/Images/furniture-cleaning.webp')" }}
                >
                    <div className="absolute inset-0 bg-black/40 rounded-xl"></div>
                    <div className="relative z-10 p-10 pb-12 text-white">
                        <h1 className="md:text-5xl font-bold leading-snug mb-4">
                            Professional Furniture Cleaning Services in the United Arab Emirates
                        </h1>
                        <p className="text-base md:text-lg mb-8">
                            Now book the best affordable, simple and convenient furniture cleaning service in just 60 seconds.
                        </p>
                        <div className="flex flex-col md:flex-row gap-4">
                            <Link href="">
                                <span className="hidden md:inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-bold uppercase rounded-full px-8 py-3 transition-all duration-300 cursor-pointer">
                                    Book Now
                                </span>
                            </Link>
                            <Link href="">
                                <span className="md:hidden inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-bold uppercase rounded-full px-8 py-3 w-full text-center transition-all duration-300 cursor-pointer">
                                    Book Now
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Intro / Description */}
                <div className="mt-8 text-[#4A4A4A] cust-font">
                    <div className="leading-relaxed">
                        <p className="mb-6 text-lg">
                            Most of the time, cleaning means a lot of work but it's important to do it properly to keep your home and family healthy. And we know that it becomes a more challenging task if you live in a city such as Dubai, where dust sneakily waits on the corner to accumulate on your furniture, especially on dust-trapping items such as couches and carpets. Luckily, you don’t have to think about such problems anymore as Justlife provides you with well-trained professionals in <strong>cleaning the furniture</strong>! The only thing you have to do is to choose which furniture cleaning package suits your needs best.
                        </p>
                    </div>

                    <div className="mt-10 text-[18px] font-normal not-italic leading-[1.33]">
                        <h3 className="text-2xl font-bold mb-6 text-[#4A4A4A]">
                            Why is Furniture Cleaning Important?
                        </h3>

                        <p className="mb-4 mt-5 text-lg text-[#4A4A4A]">
                            Have you ever heard that allergens such as dust and mold can accumulate in upholstery? Also, bacteria can penetrate the fibers and, if left too long, can cause allergies or even diseases. If a family member is sensitive to dust or mold, it means double trouble for them. That’s the reason why <strong>professional furniture cleaning</strong> is important in a house. Fortunately, there is a very simple and quick solution to prevent such health problems and keep your family safe: regular furniture cleaning!
                        </p>

                        <h1 className="text-2xl font-bold mt-6 mb-2 text-[#4A4A4A]">
                            Travel Destination Requirements:
                        </h1>
                        <p className="mb-5 mt-5  text-lg text-[#4A4A4A]">
                            Justlife will not be liable for any compensation owing to the service user's misinformation regarding travel destination needs. Kindly check the entry requirements of the destination you are traveling to on the onward carrier's website before booking an appointment.
                        </p>

                        <h1 className="text-2xl font-bold mt-6 mb-2 text-[#4A4A4A]">
                            Why Should You Hire Furniture Cleaning Company?
                        </h1>
                        <p className="mb-5 mt-5  text-lg text-[#4A4A4A]">
                            Of course, you know what is best for your house but when it comes to complex processes such as furniture cleaning, you may need some extra help from a <strong>furniture company cleaning company</strong> that works with professionals. They know the <strong>best furniture cleaners,</strong> methods, and solutions for cleaning and stain removal from different surfaces such as cushions and carpets. Justlife professionals use special tools that clean furniture such as couches and curtains from stubborn stains while not damaging the fabric or causing discoloration.
                        </p>

                        <h1 className="text-2xl font-bold mt-6 mb-2 text-[#4A4A4A]">
                            Why Should You Choose Justlife for Your Furniture Cleanings?
                        </h1>
                        <p className="mb-3 mt-5  text-lg text-[#4A4A4A]">
                            On Justlife, you can book a furniture cleaning or any other services needed in less than 1 minute. Our well-trained home cleaners will thoroughly clean your upholstery with the highest technology equipment and high-quality cleaning materials without any delay or additional cost. By choosing us, you will have peace of mind and your house will be treated kindly.
                        </p>

                        <h1 className="text-2xl font-bold mt-6 mb-2 text-[#4A4A4A]">
                            Furniture Cleaning Packages We Offer
                        </h1>
                        <p className="mb-3 mt-5  text-lg text-[#4A4A4A]">
                            Because your furniture accumulates most of the things that are in the environment of your house, it can be full of allergens that make you sick. Regular cleaning of the upholstery removes these and lets your furniture breathe. Thus, a <strong>professional furniture cleaning company</strong> should take care of it for you. We, as Justlife, take care of every piece of furniture you have in your home from pillows to mattresses and we offer different packages that suit everyone from a person who lives alone or who lives in a big house with a big family!
                        </p>

                        <h3 className="text-2xl font-bold mb-2 mt-4 text-[#4A4A4A]">
                            1. Furniture Packages
                        </h3>
                        <p className="mt-8 mb-8 text-lg text-[#4A4A4A]">
                            As the <strong>best furniture cleaning service </strong>company in the UAE, Justlife has a wide range of selection of <strong>furnish cleaning</strong> packages. Whether it is time for deep cleaning of your sofa or carpet, don’t worry, we got your back!
                        </p>

                        <p className="mt-8 mb-8 text-lg text-[#4A4A4A]">
                            For your basic needs, our Basic Package includes 60 minutes of vacuuming, wet-cleaning, and wet-vacuuming of a 3-seater sofa, 4 chairs, and a medium-sized carpet.
                        </p>

                        <p className="mt-8 mb-8 text-lg text-[#4A4A4A]">
                            If you don’t need a carpet cleaning, our economic Best Seller package offers a quick and efficient deep cleaning of your most used 3-seater sofa and 6 standard-sized cushions.
                        </p>

                        <p className="mt-8 mb-8 text-lg text-[#4A4A4A]">
                            For bigger families with larger sofas, we recommend the Family Package for cleaning. This package includes 50 minutes of deep cleaning that will get rid of all dust and bacteria of a 4-seater sofa and includes the cleaning of up to 8 standard-sized cushions.
                        </p>

                        <p className="mt-8 mb-8 text-lg text-[#4A4A4A]">
                            We got you covered with our Majestic Package if you have a huge 5-seater sofa set and a large carpet to be deep cleaned and sanitized. 6 dining chairs are included in this 90 minutes package.
                        </p>

                        <p className="mt-8 mb-8 text-lg text-[#4A4A4A]">
                            Wet-vacuuming is offered in all packages after a thorough cleaning to speed up the drying process. Special shampoos are used for scrubbing and <strong>cleaning</strong> different types of <strong>furniture</strong> to avoid any damage to the fabric.
                        </p>

                        <h3 className="text-2xl font-bold mt-4 text-[#4A4A4A]">
                            2. Sofa Cleaning Packages
                        </h3>
                        <p className="mt-4 text-lg text-[#4A4A4A]">
                            Prolonged exposure to odor, dirt, and grime can damage your upholstery. Thus, experts recommend following a 6 monthly cleaning schedule for the sofas. But if you have pets, you may need to clean your sofas even more often. To help you with this challenging task, <strong>furniture cleaning at home</strong>, we offer several sofa cleaning packages which consist of 4 cleaning steps:
                        </p>

                        <ul className="list-disc pl-6 leading-tight text-[#4A4A4A]">
                            <li>Dry-vacuuming</li>
                            <li>Prices are non-negotiable and subject to change by the company's management.</li>
                            <li>Wet cleaning with a special shampoo</li>
                            <li>Wet-vacuuming</li>
                            <li>Steam cleaning</li>
                        </ul>

                        <p className="mt-7 text-lg text-[#4A4A4A]">
                            You could choose the best <Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]">sofa cleaning</Link> package among the four packages we offer.
                        </p>

                        <h1 className="text-2xl font-bold mt-4 text-[#4A4A4A]">
                            How Much Does Furniture Cleaning Cost?
                        </h1>
                        <p className="mt-4 text-lg text-[#4A4A4A]">
                            <strong>Furniture cleaning prices</strong> depend on the amount of furniture in your home and its size. Justlife offers reliable cleaning services at affordable prices. The price of our packages varies from AED 35 to AED 549.
                        </p>
                        <p className="mt-4 text-lg text-[#4A4A4A]">
                            <Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]">Booking furniture cleaning service</Link> will give you an insight into what you can expect at the end of the day. To get more detailed info, please visit Justlife app or Justlife website.

                        </p>

                        <p className="mt-8 mb-5 text-lg" >
                            For more information about other services we provide, kindly visit: <Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]">AC Duct Cleaning</Link>,
                            <Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]"> Apartment Cleaning</Link>,<Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]">Babysitting at Home</Link>,<Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]">Bathroom Cleaning Service</Link>,
                            <Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]">Car Cleaning at Home</Link>,
                            <Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]">Carpet and Rug Cleaning</Link>,
                            <Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]"> Commercial Cleaning Service</Link>,<Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]">Curtain Cleaning Service</Link>,<Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]">Deep Cleaning</Link>,<Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]">Electric Services</Link>,<Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]">Floor Cleaning</Link>,<Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]">Handyman and Maintenance Services</Link>,<Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]">House Painting Services</Link>,
                            <Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]">House Cleaning Services</Link>,
                            <Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]">Housekeeping</Link>,
                            <Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]"> Kitchen Cleaning Service</Link>,
                            <Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]">Laundry and Dry Cleaning Service</Link>,
                            <Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]">Mattress Cleaning and Washing Service</Link>,
                            <Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]">Move in & Move out Cleaning</Link>,
                            <Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]">Office Cleaning</Link>,
                            <Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]">Home Packing and Moving Service</Link>,
                            <Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]"> Part Time Maid, Pest Control Treatment</Link>,
                            <Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]">Plumber Services</Link>,

                            <Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]"> Room Cleaning</Link>,

                            <Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]">Sofa and Upholstery Cleaning </Link> or
                            <Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]"> Villa Cleaning.</Link>
                        </p>
                       

                    </div>
                </div>
            </div>
            <Scrollimg />
        </>
    );
}

export default FurnitureClean;
