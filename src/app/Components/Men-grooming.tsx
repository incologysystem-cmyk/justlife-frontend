// women salon component
import Link from "next/link";
import Scrollimg from "./Scroll-img";
import { ChevronLeft } from "lucide-react";

function Mengrooming() {
    return (
        <>
            <div className="container w-[190vh] mx-auto px-5 py-4 ">

                <div className="flex items-center text-sm text-gray-400 tracking-wide">
                    <Link href="/" className="underline">
                        HOME
                    </Link>
                    <ChevronLeft className="mx-2 w-4 h-4" />
                    <span className="uppercase">Men's Salon Home Services</span>
                </div>

                {/* Hero Section */}
                <div
                    className="relative bg-cover h-[550px] mt-6 rounded-xl shadow-lg flex items-end justify-start"
                    style={{ backgroundImage: "url('/Images/mens-salon.webp')" }}
                >
                    <div className="absolute inset-0 bg-black/40 rounded-xl"></div>
                    <div className="relative z-10 p-10 pb-12 text-white">
                        <h1 className="md:text-5xl font-bold leading-snug mb-4">
                            Premium Men's Salon & Barber Services at Home in the United Arab Emirates
                        </h1>
                        <p className="text-base md:text-lg mb-8">Now book the premium men's salon service at home.</p>
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
                <div className="mt-8 text-gray-800 cust-font">
                    <div className="leading-relaxed text-[#4A4A4A]">
                        <p className="mb-6 text-lg text-[#4A4A4A]">
                            You will receive the best <strong>men's salon </strong> services at home from our trained grooming specialists. You have seven days a week to choose these services. Our barbers have many years of experience. So, you can anticipate receiving top-notch service each and every time. We offer home nail services, facials, waxing, haircuts, and massages. </p>
                        <p className="mb-6 text-lg text-[#4A4A4A]">
                            You need grooming services because they not only ensure that you look good but also make you feel good inside, allowing you to take a break from your hectic schedule to unwind. However, we are aware that finding time for yourself can be difficult at times. As a result, we provide grooming services in your home in the UAE. You can avoid the hassle of going to the barber by doing this.
                        </p>
                        <p className="mb-6 text-lg text-[#4A4A4A]">
                            It is a huge blessing to have a <strong>men's parlor</strong> , right at home. After all, this makes it easier for people to get haircuts, particularly for men who find it challenging to take time out of their busy schedules. They only need to call a local <strong>barber home service</strong> to get a fashionable look without having to leave their house.

                        </p>
                        <p className="mb-6 text-lg text-[#4A4A4A]">
                            That's where Justlife comes in with our professional AC cleaning service in the UAE. We provide comprehensive air conditioner cleaning solutions to enhance the performance of your air conditioning system and promote clean, and healthy indoor air.
                        </p>
                        <p className="mb-6 text-lg text-[#4A4A4A]">
                            Having a <strong>barber at home</strong> is very convenient. Additionally, it isn't as costly as most people think, it’s actually quite affordable for the value and quality of the services.  </p>
                        <h1 className="text-3xl mt-8 font-bold mb-6 text-[#4A4A4A]">
                            Men's Salon & Barber Services at Home
                        </h1>


                        <p className="mb-6 text-lg text-[#4A4A4A]">
                            Even though taking a break from your hectic schedule can be challenging, pampering yourself is equally important. Even hard workers occasionally need to take a break to reflect, breathe, and unwind. So how about a home massage or manicure and pedicure? Men's grooming services are now available for booking at home, making it simple to schedule any <strong> salon for men </strong> service.</p>


                        <p className="mb-6 text-lg text-[#4A4A4A]">
                            You can discover the perfect barber at-home service in the UAE at Justlife. You can rely on these experienced professional <strong>men's hair stylists</strong> to provide you with a top-notch haircut at home service by the best men's hair stylists. After the service, you will feel and look fantastic! </p>


                        <p className="mb-6 text-lg text-[#4A4A4A]">
                            It's not new to receive a men's <strong>beauty parlor</strong> at home. However, using a men's salon services at home is an untapped market. As an increasing number of people try it out, its popularity has only recently begun to grow.</p>

                        <p className="mb-6 text-lg text-[#4A4A4A]">
                            Although it is incredibly convenient to be able to use a men's salon service from your own home, many people are hesitant to give it a shot. This is due to their perception that it will be expensive. But in reality, this isn't the case. In fact, you'll discover that services are quite reasonable. You can get an idea of how much various <strong>men's salon at-home</strong> services will cost by visiting our app or website.</p>



                        <h1 className="text-3xl mt-8 font-bold mb-6 text-[#4A4A4A]">What Services Are Which Men's Salon Services Are Offered at Home?</h1>

                        <p className="text-lg text-[#4A4A4A] mb-3">
                            You can't take certain men's grooming customs for granted. Because <strong>men's haircut salons</strong> are aware of this, even when appointments are made at home, all grooming services are carried out by professionals. The highest caliber grooming services are provided at your location at the time of your choosing by a group of courteous and expertly trained beauticians and technicians. Justlife allows you to schedule any salon service from facials and massages to nails and <strong>home service haircuts.</strong>
                        </p>


                        <h3 className="text-[21.06px] font-bold  mt-4 text-[#4A4A4A]">Haircut</h3>
                        <p className="text-lg text-[#4A4A4A]">
                            Honestly, not everyone is able to cut their hair at home. For some, it is hard, especially complex hairstyles, and for others it is a time consuming task. Even if we want to get our haircut at the barber or at the haircut salons, due to our hectic schedules, some of us still end up skipping the haircut appointments from <strong>men's hairdressers</strong>. With the help of Justlife,<strong> mens haircuts</strong> are easier than ever.
                        </p>
                        <h3 className="text-[21.06px] font-bold  mt-4 text-[#4A4A4A]">Shaving and Beard Care</h3>
                        <p className="text-lg text-[#4A4A4A]">
                            Not only do a well-groomed beard and mustache look professional, but they also prevent skin conditions and itching. The most popular basic grooming service, beard shaping, is definitely available as well at <strong>gents salon at home</strong>.
                        </p>
                        <h3 className="text-[21.06px] font-bold  mt-4 text-[#4A4A4A]">Waxing</h3>
                        <p className="text-lg text-[#4A4A4A]">
                            Although waxing can be uncomfortable, it's a fantastic option to shaving to remove unwanted body and facial hair. Waxing gets rid of hair from the roots, leaving your skin smoother for a longer period of time. You won't need to groom as frequently as a result. Three to five weeks may pass between treatments.
                        </p>

                        <h1 className="text-3xl mt-8 font-bold mb-6 text-[#4A4A4A]">
                            Why Should You Book a Men's Salon Service at Home?
                        </h1>

                        <h3 className="text-[21.06px] font-bold  mt-4 text-[#4A4A4A]">1. Save time by avoiding the need to wait at the salon.</h3>
                        <p className="text-lg text-[#4A4A4A]">
                            Let's face it; nobody enjoys standing in line. You can avoid the lengthy waits at salons when you schedule a <strong>gents beauty parlour</strong> at home. Additionally, you won't have to sacrifice any of your valuable free time because you can book salon services whenever it suits you.
                        </p>
                        <h3 className="text-[21.06px] font-bold  mt-4 text-[#4A4A4A]">2. Select the experts you want</h3>
                        <p className="text-lg text-[#4A4A4A]">
                            Not everyone feels comfortable entrusting a stranger with their self-care. Reserving salon services at home offers you the opportunity to select your own professional, ensuring that you're receiving the best service possible.

                        </p>
                        <h3 className="text-[21.06px] font-bold  mt-4 text-[#4A4A4A]">3. Receive the services you need</h3>
                        <p className="text-lg text-[#4A4A4A]">
                            You might not always get the exact service you want when visiting a <strong>salon for men</strong>. You might have to settle for just a pedicure, for instance, if you want a pedicure but don't have time for a full mani/pedi.

                        </p>
                        <h3 className="text-[21.06px] font-bold  mt-4 text-[#4A4A4A]">4. Spend less by avoiding salon fees</h3>
                        <p className="text-lg text-[#4A4A4A]">
                            It is common knowledge that salons can be pricey. You can save a lot of money by selecting grooming services that are provided at home.
                        </p>

                        <p className="text-lg text-[#4A4A4A] mb-3 mt-6">
                            You wouldn't believe how several at-home grooming services are less expensive than comparable services offered in salons. By having an expert visit you at home, you could save money on anything from mani/pedis to haircuts..</p>

                        <p className="text-lg text-[#4A4A4A] mb-3 mt-6">
                            You'll not only save finances, but you'll also stay away from pricey salon extras.
                        </p>

                        <h3 className="text-[21.06px] font-bold  mt-4 text-[#4A4A4A]">5.Get the same superior service you would receive at a salon, only in the convenience of your own home.</h3>
                        <p className="text-lg text-[#4A4A4A]">
                            Get quality grooming services from a seasoned professional while also enjoying privacy and comfort at home! The privacy and comfort of receiving special <strong>hair designs for men</strong> at home are one of our best features. You can take your time, unwind, and enjoy the service without being concerned about shameful beauty gaffes.

                        </p>


                        <h1 className="text-3xl mt-8 font-bold mb-6 text-[#4A4A4A]">
                            Why Should You Choose Men's Salon Services From Justlife?
                        </h1>

                        <ol className="list-decimal text-lg ms-6 p-4 mb-6">
                            <li>Save time by skipping the need to wait for a meeting and go outside.</li>
                            <li>Pick your own beauty specialists.</li>
                            <li>Obtain the service you want</li>
                            <li>Save cash by avoiding salon fees.</li>
                            <li>Receive the same high-quality service delivered to you at home as you would in a barbershop.</li>

                        </ol>


                        <h1 className="text-3xl mt-8 font-bold mb-6 text-[#4A4A4A]">
                            How Much Do Barber Home Services Cost?
                        </h1>

                        <p className="mt-4 text-lg text-[#4A4A4A]">
                            The type of service you choose, the expert performing those services, and the products they use all affect the cost of men's salon services. So, in order to get an accurate cost for the service that you will take, please visit our app or website.
                        </p>


                        <p className="mb-5 mt-8 text-lg text-[#4A4A4A]">
                            For more information about other services we provide, kindly visit: <Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]">Eyebrow Threading Home Service</Link>,
                            <Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]">Facial Treatment Home Service</Link>,<Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]">Balinese Massage Home Service</Link>,<Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]">Haircut Home Services</Link>,
                            <Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]">Henna Home Service</Link>,
                            <Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]">Lashes Home Service</Link>,
                            <Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]">Manicure and Pedicure Home Service</Link>,<Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]">Kids Nail Salon Home Service</Link>,<Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]">Men's Grooming Service at Home</Link>,<Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]">Home Salon Services for Men</Link>,<Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]">Men's Massage Home Service</Link>,<Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]"> x Home Nail Extension Service</Link>,<Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]">Pet Grooming Home Service</Link>,
                            <Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]">Massage for Women at Home</Link>,
                            <Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]">Spray Tan at Home</Link>,
                            <Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]">Home Waxing Services</Link>,
                            <Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]">Mobil Ice Bath</Link>,and our top-notch <Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]">Cleaning Service .</Link>

                        </p>

                    </div>

                </div>
            </div>
            <Scrollimg />
        </>
    );
}

export default Mengrooming;