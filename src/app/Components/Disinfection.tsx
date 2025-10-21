// components/FurnitureClean.jsx
import Link from "next/link";
import Scrollimg from "./Scroll-img";
import { ChevronLeft } from "lucide-react";

function Disinfecation() {
    return (
        <>
            <div className="container w-[190vh] mx-auto px-5 py-4">
                {/* Breadcrumb / Link */}
                <div className="flex items-center text-sm text-gray-400 tracking-wide">
                    <Link href="/" className="underline">
                        HOME
                    </Link>
                    <ChevronLeft className="mx-2 w-4 h-4" />
                    <span className="uppercase">Disinfection and Sanitization</span>
                </div>

                {/* Hero Section */}
                <div
                    className="relative bg-cover h-[550px] mt-6 rounded-xl shadow-lg flex items-end justify-start"
                    style={{ backgroundImage: "url('/Images/disinfection.webp')" }}
                >
                    <div className="absolute inset-0 bg-black/40 rounded-xl"></div>
                    <div className="relative z-10 p-10 pb-12 text-white">
                        <h1 className="md:text-5xl font-bold leading-snug mb-4">
                            Disinfection and Sanitization Services in the United Arab Emirates
                        </h1>
                        <p className="text-base md:text-lg mb-8">
                           Sanitize and disinfect your home and office in the United Arab Emirates.
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
                            With the help of Justlife, you can easily get your house sanitized without moving a finger. <strong>Disinfection and sanitization</strong> are both cleanup techniques. Disinfection negates viruses and removes the most dangerous microorganisms from items or surfaces. As a <strong>disinfection company</strong>, we provide you with safe, practical, and effective techniques to keep you and your family safe.

                        </p>
                    </div>

                    <div className="mt-10 text-[18px] font-normal not-italic leading-[1.33]">
                        <h1 className="text-2xl font-bold mb-6 text-[#4A4A4A]">
                            Why Is There a Need to Disinfect or Sanitize the House?
                        </h1>

                        <p className="mb-4 mt-5 text-lg text-[#4A4A4A]">
                            Everybody needs a safe place to call home. For this, we need to regularly clean our home and disinfect it. Every nutrient fragment that falls to the ground, especially protein-rich foods, encourages the growth of bacteria and contaminates the environment. In addition to this, pests can enter a house simply by smelling meals. A healthy life is provided by a sterile environment. By disinfecting your home, you’ll be able to eradicate unsanitary and microbe surroundings that are dangerous to your health. The goal of the <strong>disinfectant cleaning services</strong> process is to eliminate any microbes or viruses inside the home.
                        </p>


                        <p className="mb-4 mt-5 text-lg text-[#4A4A4A]">
                            The provision of a healthier place is the <strong>sanitizing company’s</strong> most significant advantage. A safe environment with few diseases is provided by a sanitary and clean environment. This procedure must be followed for a room to become a microorganism-free environment. Receiving this service offers defense against many illnesses and organisms and creates a healthy living environment.
                        </p>

                        <p className="mb-4 mt-5 text-lg text-[#4A4A4A] ">
                            <span className="ms-5">Not just the areas of the room that are visible are cleaned. The room's finer details are also sprayed with disinfectant. For instance, most</span> microorganisms can be found in infrequently used areas like behind the closet and beneath the counter. The accumulation of food scraps, pests, or other toxins that escape into these spaces promotes the growth of microbes as well as the establishment of nests by small animals. Such minute details also guarantee that microbes are eradicated from every nook and cranny of the home and that pests are prevented from spreading.


                        </p>

                        <p className="mb-4 mt-5 text-lg text-[#4A4A4A] ">
                            <span className="ms-5">As an employee, you might notice you’re becoming ill more frequently. Compared to homes, workplaces are dirtier. Since there are</span> numerous people working there. The area becomes more and faster polluted as a result. This is a significant situation that encourages a variety of illnesses. Disinfection service can be used to provide defense against this circumstance.
                        </p>

                        <p className="mb-4 mt-5 text-lg text-[#4A4A4A]">
                            With our home disinfection service, you can rest assured that you’ll have a healthy home environment. You can book our services via app or website. Please note the below points and consider implementing them before the start of your appointment.
                        </p>



                        <ul className="list-disc pl-6  mt-4 text-lg text-[#4A4A4A]">
                            <li>
                                Do a series of cleaning just before disinfestation.
                            </li>
                            <li>
                                During disinfection, all food that is left outside should be covered and kept in the fridge or cabinets.
                            </li>
                            <li>
                                All windows, doors, and the air conditioner must be shut during the process and for 15 to 20 minutes after the sanitation session is finished.
                            </li>

                        </ul>


                        <h1 className="text-2xl font-bold mt-6 mb-2 text-[#4A4A4A]">
                            Which Disinfectants Are Used?
                        </h1>
                        <p className="mb-5 mt-5  text-lg text-[#4A4A4A]">
                            When booking a disinfect house service, our professionals will bring all the supplies required for disinfection. These consist of a sprayer, disinfectant solution, microfiber clothes and shoes, mask, overalls, gloves, and galoshes besides the solutions used. The solution is a mixture of water and disinfectant and is safe to use around children, pets, and on all surface types. No rinse or wipe is required as it breaks down into simple salt-producing no harmful by-products.
                        </p>
                        <p className="mb-5 mt-5  text-lg text-[#4A4A4A]">
                            Several <strong>sanitizing and cleaning</strong> techniques include;
                        </p>

                        <ul className="list-disc pl-6  mt-4 text-lg text-[#4A4A4A]">
                            <li>
                                Utilizing UVC lamps and ultraviolet light to disinfect
                            </li>
                            <li>
                                Ozone ionization for cleaning
                            </li>
                            <li>
                                Using high-efficiency particulate air filters to clean
                            </li>
                            <li>
                                Cleaning with chemicals
                            </li>
                        </ul>

                        <h1 className="text-2xl font-bold mt-6 mb-2 text-[#4A4A4A]">
                            Disinfection and Sanitizing Company in the United Arab Emirates
                        </h1>
                        <p className="mb-5 mt-5  text-lg text-[#4A4A4A]">
                            We guarantee that all of our employees work neatly and meticulously so that we can give you the best service possible. It equips our helpful staff with the necessary skills to fulfill your requests and fulfill your desires.   </p>

                        <p className="mb-5 mt-5  text-lg text-[#4A4A4A]">
                            Sanitizing home services is to offer the top cleaning that each individual and every segment requires as we set out on this path to keep each point of your living areas sanitary and clean with Quality and Assurance. Sanitization and disinfection services are your best pick for on-site and quick cleaning solutions because of all of our staff, who are trained, confirmed, and trustworthy experts in the disinfecting service sector.

                        </p>
                        <p className="mb-5 mt-5  text-lg text-[#4A4A4A]">
                            Home sanitizing services bring all the supplies required for disinfection. These include a spray bottle, <strong>deep cleaning and sanitizing services</strong> solution, microfiber cloths, mask, overalls, hand covers, and galoshes besides the drugs used. <strong>Home sanitizing</strong> is much more important than you think!

                        </p>


                        <h1 className="text-2xl font-bold mt-6 mb-2 text-[#4A4A4A]">
                            How to Get Disinfection & Sanitization Service?

                        </h1>
                        <p className="mb-3 mt-5  text-lg text-[#4A4A4A]">
                            You can reach us through our website or app and schedule an appointment for home sanitization and office disinfecting. We have successful and qualified experts on staff in the most relevant fields. Our happiness depends on your satisfaction, so you can trust us with any service you require at your house. Get your <strong>home sanitization services</strong> easily with Justlife!


                        </p>

                        <h1 className="text-2xl font-bold mt-6 mb-2 text-[#4A4A4A]">
                            What Is The Price of Disinfection & Sanitization Service in the United Arab Emirates?

                        </h1>
                        <p className="mb-3 mt-5  text-lg text-[#4A4A4A]">
                            The service is offered by the best experts in their field. Prices vary according to the size of the area. We have overall budget-friendly prices. You can view them all on our <strong>app or website. Make your home clean with a cleaning and sanitizing company</strong>.</p>

                    
                       <p className="mt-8 mb-5 text-lg text-[#4A4A4A]"  >
                            For more information about other services we provide, kindly visit:<Link className="text-[#485fc7] hover:text-[#4A4A4A]"href="">AC Cleaning Service</Link> <Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]">Apartment Cleaning</Link>,
                            <Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]"> Apartment Cleaning</Link>,
                            <Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]">Babysitting at Home</Link>,
                            <Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]">Bathroom Cleaning Service</Link>,
                            <Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]">Car Cleaning at Home</Link>,
                            <Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]">Carpet and Rug Cleaning</Link>,
                            <Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]"> Commercial Cleaning Service</Link>,<Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]">Curtain Cleaning Service</Link>,<Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]">Deep Cleaning</Link>,<Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]">Electric Maintenance Company</Link>,<Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]">Floor Cleaning</Link>,<Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]"> Handyman and Maintenance Company</Link>,<Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]">House Painting Services</Link>,
                            <Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]">House Cleaning Services</Link>,
                            <Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]">Housekeeping</Link>,
                            <Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]"> Kitchen Cleaning Service</Link>,
                            <Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]">Laundry and Dry Cleaning Service</Link>,
                            <Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]">Mattress Cleaning and Washing Service</Link>,
                            <Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]">Move in & Move out Cleaning</Link>,
                            <Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]">Babysitting Service</Link>,
                            <Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]">Bathroom Cleaning</Link>,
                            <Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]"> Car Cleaning Service at Home</Link>,
                            <Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]">Carpet Cleaning</Link>,

                            <Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]"> Commercial Cleaning</Link>,

                            <Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]">Curtain Cleaning </Link>,
                            <Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]"> Deep Cleaning</Link>,

                            <Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]"> Disinfection Service</Link>,
                            <Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]"> Electrician Services</Link>,
                            <Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]"> Floor Cleaning</Link>,
                            <Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]"> Furniture Cleaning</Link>,
                            <Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]"> Handyman Services</Link>,
                            <Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]"> Home Painting</Link>,

                            <Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]"> Cleaning Services</Link>,<Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]"> Laundry and Dry Cleaning</Link>,
                            <Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]"> Housekeeping, Kitchen Cleaning</Link>,
                            <Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]">  Maid Service</Link>,
                            <Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]">  Mattress Cleaning</Link>,
                            <Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]"> Move in and out Cleaning</Link>,
                            <Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]">  Office Cleaning</Link>,
                            <Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]"> Packers and Movers</Link>,
                            <Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]"> Part Time Maid Services</Link>,
,
                            <Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]">   Plumber Services</Link>,
                            <Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]"> Room Cleaning</Link>,
                            <Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]"> Sofa Cleaning </Link> or
                            <Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]"> Villa  Cleaning</Link>
                        </p>

                    </div>
                </div>
            </div>
            <Scrollimg />
        </>
    );
}

export default Disinfecation;
