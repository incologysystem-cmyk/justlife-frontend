// components/PCRTestPage.jsx
import Link from "next/link";
import Scrollimg from "./Scroll-img";
import { ChevronLeft } from "lucide-react";

function Pestcontrol() {
    return (
        <>
            <div className="container w-[190vh] mx-auto px-5 py-4 ">
                {/* Breadcrumb / Link */}
                <div className="flex items-center text-sm text-gray-400 tracking-wide">
                    <Link href="/" className="underline">
                        HOME
                    </Link>
                    <ChevronLeft className="mx-2 w-4 h-4" />
                    <span className="uppercase">Pest Control</span>
                </div>

                {/* Hero Section */}
                <div
                    className="relative bg-cover h-[550px] mt-6 rounded-xl shadow-lg flex items-end justify-start"
                    style={{ backgroundImage: "url('/Images/pest-control.webp')" }}
                >
                    <div className="absolute inset-0 bg-black/40 rounded-xl"></div>
                    <div className="relative z-10 p-10 pb-12 text-white">
                        <h1 className="md:text-5xl font-bold leading-snug mb-4">
                            Pest Control Services in the United Arab Emirates
                        </h1>
                        <p className="text-base md:text-lg mb-8">Now book the best affordable, simple and convenient pest control service.</p>
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
                <div className="mt-8 cust-font">
                    <div className="leading-relaxed">


                        <h1 className="text-2xl mt-8 pt-5 font-bold text-[#4A4A4A]">
                            Importance of Pest Control in Homes
                        </h1>

                        <p className="mb-6 text-lg text-[#4A4A4A]">
                            <strong>  Pest control is essential for maintaining a clean and healthy home by eliminating unwanted pests such as cockroaches, rodents, bed bugs, ants, and termites. The UAE's warm and humid climate provides an ideal breeding ground for these pests, increasing the risk of infestations.</strong>
                            Routine pest control services guarantee that these risks are never present in your house, giving you peace of mind and a healthy place to live.

                        </p>
                        <h1 className="text-2xl font-bold mb-4 text-[#4A4A4A]">
                            Why Is Professional Pest Control Service a Necessity in the UAE?

                        </h1>


                        <h3 className="text-xl font-bold mt-8 text-[#4A4A4A]">1. Professional Expertise</h3>
                        <p className="mb-8 text-lg text-[#4A4A4A]">
                            <strong> Hiring a pest control company gives you access to experienced professionals who understand the habits and life cycles of various pests.</strong> These trained experts know how to assess the problem accurately and apply <strong>the best pest control solution</strong> for long-term results. Whether you're dealing with termites, cockroaches, or rodents, expert knowledge ensures the right approach every time.
                        </p>

                        <h3 className="text-xl font-bold mt-8 text-[#4A4A4A]">2. Safe and Effective Methods</h3>
                        <p className="mb-8 text-lg text-[#4A4A4A]">
                            <strong> A professional pest control service uses municipality-approved chemicals and equipment that are both powerful and safe.</strong> These advanced techniques are not available to the public and are carefully chosen to protect your family, pets, and the environment while effectively eliminating pests.                        </p>

                        <h3 className="text-xl font-bold mt-8 text-[#4A4A4A]">
                            3. Save Time and Money
                        </h3>
                        <p className="mb-8 text-lg text-[#4A4A4A]">
                            Hiring a professional pest control company in the UAE with experts will quickly identify the root of the issue and provide lasting treatments, saving you money on repeated services and preventing costly property damage caused by unchecked infestations.

                        </p>

                        <h3 className="text-xl font-bold mt-8 text-[#4A4A4A]">4. Personalized Treatment Plans</h3>
                        <p className="mb-8 text-lg text-[#4A4A4A]">
                            <strong>Professional pest control companies provide customized treatment plans tailored to unique needs.</strong> Whether you're facing issues with cockroaches, bed bugs, ants, or rodents, these experts adjust their methods to deliver the most effective results. This personalized approach ensures that every part of the infestation is properly identified and treated, offering a complete and targeted pest control solution.

                        </p>

                        <h3 className="text-xl font-bold mt-8 text-[#4A4A4A]">5. Preventative Strategies</h3>
                        <p className="mb-8 text-lg text-[#4A4A4A]">
                            Along with treating existing infestations, professional pest control companies also take proactive steps to prevent future pest problems. They inspect your property to spot possible entry points and nesting areas, offering expert advice to keep your home pest-free over time.

                        </p>

                        <h3 className="text-xl font-bold mt-8 text-[#4A4A4A]">6. Protecting Your Health and Home
                        </h3>
                        <p className="mb-8 text-lg text-[#4A4A4A]">
                            Hiring a professional pest control company in the UAE plays an important role in protecting your family’s health. By effectively removing pests that carry bacteria and allergens, these services help reduce the risk of illness and allergic reactions.

                        </p>
                        <h3 className="text-xl font-bold mt-8 text-[#4A4A4A]"> 7. Total Peace of Mind
                        </h3>
                        <p className="mb-8 text-lg text-[#4A4A4A]">
                            When you hire a professional pest control company in the UAE, you can rest easy knowing your home is in expert hands. Trained technicians handle the issue efficiently, using safe and effective methods that deliver lasting results. With pests taken care of, you’re free to focus on your day-to-day life stress-free.


                        </p>
                        <h3 className="text-xl font-bold mt-8 text-[#4A4A4A]">8. Ongoing Support and Follow-Up

                        </h3>
                        <p className="mb-8 text-lg text-[#4A4A4A]">
                            A  pest control service doesn’t stop at the first visit. Many professional pest control companies in the UAE offer follow-up inspections to ensure the treatment works and pests haven’t returned. These visits help monitor progress, make adjustments if needed, and give you added confidence that your home will stay pest-free long after the initial treatment.


                        </p>
                        <h3 className="text-xl font-bold mt-8 text-[#4A4A4A]">9. Regulation Compliant Services

                        </h3>
                        <p className="mb-8 text-lg text-[#4A4A4A]">
                            Reputable pest control companies in the UAE follow strict guidelines set by local authorities and health departments. By choosing a Municipality approved pest control service, you can be confident that all treatments are carried out using approved methods and Municipality-approved products.


                        </p>

                        <h1 className="text-2xl font-bold text-[#4A4A4A]">
                            Pest Control Services Offered by Justlife in the UAE
                        </h1>
                        <p className="mb-8 text-lg text-[#4A4A4A]">
                            <strong>Justlife offers professional pest control services across the UAE, tailored for all property types, from studio apartments to 5BHK villas</strong>. Whether you're in Dubai, Abu Dhabi, or Sharjah, we provide safe, effective, and reliable solutions to keep your home pest-free.
                        </p>

                        <h3 className="text-xl font-bold mt-8 text-[#4A4A4A]">
                            1. General Pest Control:
                        </h3>
                        <p className="mb-8 text-lg text-[#4A4A4A]">
                            Our general pest control service covers common pests like ants, cockroaches, and spiders. Our trained experts will carry out a detailed inspection, identify the source of the infestation, and perform the initial treatment using Municipality-approved chemicals.This service is designed to offer a safe, effective, and reliable solution for long-term pest control in homes across the UAE.



                        </p>

                        <h3 className="text-xl font-bold mt-8 text-[#4A4A4A]">
                            2. Cockroach Pest Control:

                        </h3>
                        <p className="mb-8 text-lg text-[#4A4A4A]">
                            Cockroaches are tough pests that can spread diseases and contaminate food. Our cockroach pest control service in the UAE is designed to eliminate infestations safely and effectively.
                            Our professionals arrive fully equipped with Municipality-approved chemicals to ensure thorough and reliable treatment.                        </p>

                        <h3 className="text-xl font-bold mt-8 text-[#4A4A4A]">
                            3. Rodent Pest Control:

                        </h3>
                        <p className="mb-8 text-lg text-[#4A4A4A]">
                            Rats and mice can damage property and spread disease. Our rodent control service targets these pests using safe, effective methods across the UAE.

                            Experts arrive with Municipality-approved chemicals, using either secure bait boxes or traditional traps—based on the infestation type and location.                        </p>

                        <h3 className="text-xl font-bold mt-8 text-[#4A4A4A]">4. Bed Bugs Pest Control
                        </h3>
                        <p className="text-lg text-[#4A4A4A] mb-8">
                            Bed bugs cause itchy bites and sleepless nights, making them a major concern for many UAE homeowners. Our bed bug treatment combines thorough inspections with Municipality-approved chemicals to eliminate infestations effectively and prevent their return.

                        </p>

                        <h3 className="text-xl font-bold text-[#4A4A4A]">
                            5. Ants Pest Control:
                        </h3>
                        <p className="mb-8 text-lg text-[#4A4A4A]">
                            Ants often invade homes in large numbers, entering through small cracks and building colonies around your property. Our ant pest control service in the UAE targets these infestations using safe, effective treatments. We not only remove existing ants but also help prevent future invasions, ensuring a clean, ant-free living space.

                        </p>

                        <h3 className="text-xl font-bold text-[#4A4A4A]">
                            6. Mosquito Pest Control:

                        </h3>
                        <p className="mb-8 text-lg text-[#4A4A4A]">
                            Mosquitoes and flies are known carriers of diseases such as malaria, dengue, and Zika virus. Our mosquito pest control service is designed to target breeding sites and high-risk areas to drastically reduce mosquito populations around your home. We use safe and effective treatments that provide both immediate relief and long-term control.


                        </p>
                        <p className="mb-8 text-lg text-[#4A4A4A]">
                            Each of these specialized services offered by Justlife addresses specific pest challenges with precision and expertise, ensuring that your home remains safe, clean, and comfortable.


                        </p>

                        <h1 className="text-2xl font-bold text-[#4A4A4A]">
                            Why Choose Justlife for Pest Control Service in the UAE?</h1>

                        <ul className="list-disc pl-6 space-y-3  mt-4 text-lg text-[#4A4A4A]">
                            <li>
                                <strong>Competitive & Transparent Pricing </strong>– No hidden fees, affordable pest control across the UAE.
                            </li>
                            <li>
                                <strong>Municipality-Approved</strong> – All our treatments comply with UAE’s respective Municipality standards.
                            </li>
                            <li>
                                <strong>Wide Range of Services</strong>: We offer comprehensive pest control services customised to your specific needs.

                            </li>
                            <li>
                                <strong>Safe & Odorless Chemicals</strong> – Our methods are family- and pet-friendly.

                            </li>
                            <li>
                                <strong>Trained Professionals</strong> – Expert technicians using the latest methods.

                            </li>
                            <li>
                                <strong>Free Follow-Up</strong> – If pests persist after 2 weeks, we do a complimentary revisit.

                            </li>
                            <li>
                                <strong>Easy Online Booking</strong> – Book same-day pest control through our app or website.
                            </li>
                        </ul>

                        <h1 className="text-2xl mt-8 font-bold text-[#4A4A4A]">
                            Who Provides Pest Control Services in the UAE?
                        </h1>
                        <p className="mb-8 text-lg text-[#4A4A4A]">
                            Justlife’s pest control services in the UAE are carried out by a team of experienced and trained Municipality-approved professionals. Our experts are highly trained and equipped with all the necessary tools and materials to ensure a smooth and effective treatment.
                            We use safe, odorless chemicals that are both family- and pet-friendly, giving you a hassle-free and reliable pest control experience across the Emirates.                        </p>
                        <h1 className="text-2xl font-bold text-[#4A4A4A]">
                            What Steps Do We Take for Pest Control Services?
                        </h1>
                        <p className="mb-8 text-lg text-[#4A4A4A]">
                            At Justlife, our pest control process begins with a detailed inspection to identify the type and extent of the infestation. Based on our findings, we select the most suitable treatment method using Municipality-approved chemicals.

                            Our trained professionals then apply targeted solutions to affected areas, ensuring the safety of your family and pets. We also identify and treat common entry points and breeding sites to prevent future infestations. After the treatment, we provide expert advice on maintenance and, when needed, offer follow-up services to ensure long-lasting results and a pest-free home.                        </p>
                        <h1 className="text-2xl font-bold text-[#4A4A4A]">
                            What Are the Service Areas for Pest Control Services in UAE?
                        </h1>
                        <p className="mb-8 text-lg text-[#4A4A4A]">
                            We offer professional pest control services across the UAE, covering major cities and neighborhoods, and can reach you quickly in any of these locations:

                        </p>

                        <p className="text-lg text-[#4A4A4A]">
                            <strong>Dubai</strong>: Complete pest control coverage across all Dubai neighborhoods and business districts. Some of the common areas include:

                        </p>

                        <ul className="list-disc pl-6  text-lg text-[#4A4A4A]">
                            <li>Al Barsha </li>
                            <li>Dubai Marina</li>
                            <li>Silicon Oasis</li>
                            <li>Discovery Gardens</li>
                            <li>Business Bay</li>
                            <li>JVC</li>

                        </ul>
                        <p className=" text-lg text-[#4A4A4A]">
                            <strong>Abu Dhabi</strong>: Services available in Abu Dhabi city including but not limited to:
                        </p>
                        <ul className="list-disc pl-6  text-lg text-[#4A4A4A]">
                            <li>Mussafah</li>
                            <li>Khalifa City</li>
                            <li>Al Reem Island</li>
                            <li>Yas Island</li>
                            <li>Al Bateen</li>
                            <li>Saadiyat Island</li>

                        </ul>
                        <p className=" text-lg text-[#4A4A4A]">
                            <strong>Sharjah</strong>: Expert pest control for all residential areas in Sharjah such as:
                        </p>
                        <ul className="list-disc pl-6  text-lg text-[#4A4A4A]">
                            <li>Muwaileh Commercial</li>
                            <li>Al Taawun</li>
                            <li>Al Khan</li>
                            <li>Al Qasimiya</li>
                            <li>Abu Shagara</li>
                            <li>Industrial Area</li>

                        </ul>
                        <p className="mb-8 text-lg text-[#4A4A4A]">
                            If you're searching for pest control near me, Justlife has you covered.

                        </p>

                        <h1 className="text-2xl font-bold text-[#4A4A4A]">
                            How Much Is Pest Control in the UAE?
                        </h1>
                        <p className="mb-8 text-lg text-[#4A4A4A]">
                            Pricing depends on your property size and infestation type. Justlife offers competitive rates with no hidden fees. You can view detailed pricing for <strong>pest control services in the UAE</strong> on our <Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]">website</Link>.

                        </p>
                        <h1 className="text-2xl font-bold text-[#4A4A4A]">
                            How to Prepare for Your Pest Control Service
                        </h1>
                        <p className="mb-8 text-lg text-[#4A4A4A]">
                            To ensure the best results from your <strong>pest control treatment</strong>, we recommend following these simple steps before and after the service:
                        </p>

                        <h3 className="text-2xl font-semibold text-[#4A4A4A]">
                            Pre-Treatment Checklist:
                        </h3>
                        <ul className="list-disc pl-6 space-y-3 text-lg text-[#4A4A4A]">
                            <li>
                                <strong>Clear access</strong> to key areas like the kitchen, bathroom, and living spaces so our technicians can reach all necessary spots.
                            </li>
                            <li>
                                <strong>Store food</strong>, <strong>utensils</strong>,<strong>and pet items</strong>  in sealed containers to avoid contamination.
                            </li>
                            <li>
                                <strong>Keep people and pets</strong> outside the home during the treatment and for a short time afterward.

                            </li>
                            <li>
                                <strong>Ensure someone is available</strong> to grant our team access to the property at the scheduled time.
                            </li>
                        </ul>

                        <h3 className="text-2xl font-semibold text-[#4A4A4A]">
                            Post-Treatment Guidelines:
                        </h3>
                        <ul className="list-disc pl-6 space-y-3   text-lg text-[#4A4A4A]">
                            <li>
                                <strong>Stay out of the treated area</strong> for 3 to 4 hours after the service.
                            </li>
                            <li>
                                <strong>Ventilate your home</strong> by opening windows for at least 30 minutes when you return.
                            </li>
                            <li>
                                <strong>Avoid cleaning</strong> treated surfaces for at least 7 days to allow the pest control solution to work fully.

                            </li>
                            <li>
                                <strong>Maintain cleanliness</strong> and store food in sealed containers to prevent re-infestation.
                            </li>
                            <li>
                                <strong>Follow your scheduled follow-ups</strong> for ongoing pest management and monitoring.
                            </li>
                            <li>
                                <strong>Seal cracks and gaps</strong> around windows, doors, and walls to block future pest entry.
                            </li>
                            <li>
                                <strong>Give the treatment 2 full weeks</strong> to show complete results.

                            </li>


                        </ul>

                        <h1 className="text-2xl mt-8 font-bold text-[#4A4A4A]">
                            Are Your Pest Control Treatments Municipality Approved?
                        </h1>
                        <p className="mb-8 text-lg text-[#4A4A4A]">
                            Yes, all of our <strong>pest control services in the UAE</strong> are fully approved by the local Municipality. This means we follow strict safety and quality guidelines to ensure every treatment is both effective and compliant with government regulations.
                            We only use <strong>Municipality-approved chemicals and techniques</strong>, which are proven to be safe for humans, pets, and the environment while still delivering powerful results against pests.   </p>
                        <h1 className="text-2xl font-bold text-[#4A4A4A]">
                            What Steps Do We Take for Pest Control Services?
                        </h1>
                        <h1 className="text-2xl mt-8 font-bold text-[#4A4A4A]">
                            How to Book Pest Control in UAE From Justlife?
                        </h1>
                        <p className="mb-8 text-lg text-[#4A4A4A]">
                            Scheduling your <strong>pest control service</strong> with Justlife is quick and hassle-free: </p>
                        <ol className=" list-decimal pl-6 space-y-3  mt-4 text-lg text-[#4A4A4A]">
                            <li><strong>Visit the Justlife</strong> <Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]">Website </Link> or <strong>download the</strong><Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]">mobile app</Link>.</li>
                            <li>Head to the <strong>‘Pest Control’ section</strong> and select the service that matches your needs.</li>
                            <li><strong>Choose your preferred date and time</strong> for the treatment.</li>
                            <li>Proceed to the checkout and <strong>complete your payment</strong>.</li>
                        </ol>


                    </div>



                    {/* FAQs */}
                    <h3 className="text-2xl mt-8 font-bold mb-6 text-[#4A4A4A]">FAQs</h3>
                    <div className="text-lg font-normal leading-[1.33] text-[#4A4A4A] space-y-5">
                        <div>
                            <h3 className="text-xl font-bold mt-5 text-[#4A4A4A]">
                                Q1: How often do I need to book pest control services?
                            </h3>
                            <p className="text-lg text-[#4A4A4A]">
                                It’s recommended to schedule pest control at least twice a year
                                to effectively prevent and manage infestations.
                            </p>

                            <h3 className="text-xl font-bold mt-5 text-[#4A4A4A]">
                                Q2: When is the right time to carry out pest control treatment?
                            </h3>
                            <p className="text-lg text-[#4A4A4A]">
                                The ideal time is <strong>right before summer</strong> or{" "}
                                <strong>before moving into a new or vacant apartment</strong>.
                            </p>

                            <h3 className="text-xl font-bold mt-5 text-[#4A4A4A]">
                                Q3: Is pest control safe for families with children and animals?
                            </h3>
                            <p className="text-lg text-[#4A4A4A]">
                                Yes, all of our pest control solutions are{" "}
                                <strong>safe for both children and pets</strong>.
                            </p>

                            <h3 className="text-xl font-bold mt-5 text-[#4A4A4A]">
                                Q4: What is the typical duration of a pest control service?
                            </h3>
                            <p className="text-lg text-[#4A4A4A]">
                                The duration of pest control treatment varies based on the size
                                of the property and infestation severity.
                            </p>

                            <h3 className="text-xl font-bold mt-5 text-[#4A4A4A]">
                                Q5: How do I pay for pest control in the UAE?
                            </h3>
                            <p className="text-lg text-[#4A4A4A]">
                                You can conveniently pay via credit card, Google Pay, or cash.
                            </p>

                            <h3 className="text-xl font-bold mt-5 text-[#4A4A4A]">
                                Q6: Can I book your pest control service in the UAE for a
                                specific time slot?
                            </h3>
                            <p className="text-lg text-[#4A4A4A]">
                                Absolutely! You can select your preferred date and time when
                                booking.
                            </p>

                            <h3 className="text-xl font-bold mt-5 text-[#4A4A4A]">
                                Q7: Can I book your pest control service on Sundays in the UAE?
                            </h3>
                            <p className="text-lg text-[#4A4A4A]">
                                Yes, we operate <strong>7 days a week</strong>, including Sundays.
                            </p>

                             <p className="mt-8 text-lg text-[#4A4A4A]">For more information about other services we provide, kindly visit:
                <Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]">  Pest Control Dubai </Link> <Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]">Pest Control Abu Dhabi</Link>
                <Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]">Pest Control Sharjah</Link>.</p>
                        </div>
                    </div>
                </div>

            </div>
            <Scrollimg />

        </>
    )
}
export default Pestcontrol;


{/* <p className="mt-8 text-lg text-[#4A4A4A]">For more information about other services we provide, kindly visit:
                <Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]">  Pest Control Dubai </Link> <Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]">Pest Control Abu Dhabi</Link>
                <Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]">Pest Control Sharjah</Link>.</p> */}