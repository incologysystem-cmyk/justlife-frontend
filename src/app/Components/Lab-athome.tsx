// women salon component
import Link from "next/link";
import Scrollimg from "./Scroll-img";
import { ChevronLeft } from "lucide-react";

function LabTest() {
    return (
        <>
            <div className="container w-[190vh] mx-auto px-5 py-4 ">

                <div className="flex items-center text-sm text-gray-400 tracking-wide">
                    <Link href="/" className="underline">
                        HOME
                    </Link>
                    <ChevronLeft className="mx-2 w-4 h-4" />
                    <span className="uppercase">Lab Tests at Home</span>
                </div>

                {/* Hero Section */}
                <div
                    className="relative bg-cover h-[550px] mt-6 rounded-xl shadow-lg flex items-end justify-start"
                    style={{ backgroundImage: "url('/Images/lab-test.webp')" }}
                >
                    <div className="absolute inset-0 bg-black/40 rounded-xl"></div>
                    <div className="relative z-10 p-10 pb-12 text-white">
                        <h1 className="md:text-5xl font-bold leading-snug mb-4">
                            Lab Test at Home: Diagnostic Blood Test
                        </h1>
                        <p className="text-base md:text-lg mb-8">Now book to get your blood test done at the comfort of your home.</p>
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
                            With Justlife, getting your blood tested is now simpler than ever. Most individuals find it challenging to leave their homes for blood tests. And for others, it may be risky. It can be risky for some individuals to go outside for blood checks, and health cannot be neglected. Diagnostic blood test and lab at home services are helpful for many patients in this sense.</p>
                        <p className="mb-6 text-lg text-[#4A4A4A]">
                            You may receive blood tests conveniently at home at a low cost without sacrificing your safety with the Metropolis home collection service.


                        </p>
                        <p className="mb-6 text-lg text-[#4A4A4A]">
                            The <strong>blood test home</strong> service is particularly beneficial for patients with weakened immune systems and those who are more likely to have serious consequences from illnesses like covid. Therefore, it is better to have home service for blood test so that all medical requirements are met rather than going outside.

                        </p>
                        
                        <h1 className="text-3xl mt-8 font-bold mb-6 text-[#4A4A4A]">
                           Blood Test at Home Service
                        </h1>


                        <p className="mb-6 text-lg text-[#4A4A4A]">
                           It is less stressful to get home lab tests. Simply enter your location to request a home visit, and trained phlebotomists will arrive at your door to take blood at your house. You can schedule an appointment to <strong>get blood test at home</strong> at a time that works for you, and your blood can be securely taken from home. On Sundays, the service for collecting blood samples at home is also available.</p>


                        <p className="mb-6 text-lg text-[#4A4A4A]">
                          Get your medical test at home results through email within 24 to 48 hours after collecting your samples. With this service, you may read your reports conveniently online while having the assurance that your blood sample will be obtained securely at home. The blood checkup at home is fast with Justlife’s service. </p>

                        <h1 className="text-3xl mt-8 font-bold mb-6 text-[#4A4A4A]">
                          Importance of Getting Regular Checkups & Blood Tests

                        </h1>

                        <p className="mb-6 text-lg text-[#4A4A4A]">
                         Early warning indications of health problems might be found by getting <strong>medical tests at home</strong>. Health checkup test may help with identifying any health problems before they become serious. Regular visits to the doctor allow them to catch illnesses or disorders early. You have the greatest chance of receiving the proper care immediately and avoiding problems if you are diagnosed early. You may live a longer, healthier life by receiving the appropriate <strong>medical checkup</strong>, tests, and treatment</p>

                        <p className="mb-6 text-lg text-[#4A4A4A]">
                           Early issue detection increases the likelihood of successful therapy. Your age, health, family history, and lifestyle choices are just a few of the many variables that affect how often you require checkups..</p>



                        <h1 className="text-3xl mt-8 font-bold mb-6 text-[#4A4A4A]">What Services Are What Packages Are Included in Blood Tests?</h1>

                        <p className="text-lg text-[#4A4A4A] mb-3">
                         Let's see which kind of tests are included in Justlife's checks conducted by DHA licensed nurses.
                        </p>


                        <h3 className="text-[21.06px] font-bold  mt-4 text-[#4A4A4A]">1. Basic Wellness Packages</h3>
                        <p className="text-lg text-[#4A4A4A]">
                            Regular check-ups may help in identifying any health problems before they become serious. Regular visits to the doctor allow them to catch illnesses or disorders early. You have the greatest chance of receiving the proper care immediately and avoiding problems if you are diagnosed early. You may live a longer, healthier life by receiving the appropriate health services, tests, and treatment.
                        </p>

                         <p className="text-lg text-[#4A4A4A]">
                          Your doctor may use some blood tests to find out how well your body's organs are functioning. Your thyroid, liver, or kidneys are a few examples of organs whose issues might be detected in a <strong>blood test</strong>.
                        </p>
                        <h3 className="text-[21.06px] font-bold  mt-4 text-[#4A4A4A]">2. Premium Wellness Packages</h3>
                        <p className="text-lg text-[#4A4A4A]">
                           So, you may choose the premium wellness packages as well if you want a more detailed analysis of your blood levels. More than 60 blood biomarkers are included in this package to provide you a complete picture of your body's organs and systems, including the hormonal system. By doing this, you can guarantee that no part of a blood test is missed.
                        </p>

                        <h3 className="text-[21.06px] font-bold  mt-4 text-[#4A4A4A]">3. Diabetics Profile Test </h3>
                        <p className="text-lg text-[#4A4A4A]">
                          A <strong>diabetics test</strong> kit is a diagnostic test kit that also contains tests for the hemogram profile and blood component counts in addition to checking your blood for hyperglycemia, or high blood sugar levels. Additionally, it checks for iron deficiency, salt levels, liver and kidney test, as well as cholesterol or lipid profiles and other conditions.


                        </p>

                          <p className="text-lg text-[#4A4A4A]">
                           The <strong>home diabetes test</strong> may be used to monitor your general health since both Type 1 and Type 2 diabetes can cause a variety of concurrent conditions. A doctor might advise preventative lifestyle modifications or medicines to ward off related illnesses in the event of any irregularity. In addition, depending on your medical state, the doctors could advise that you do a particular <strong>blood test at home</strong>.


                        </p>

                        <h1 className="text-3xl mt-8 font-bold mb-6 text-[#4A4A4A]">
                            Prices of Blood Test At Home
                        </h1>

                    
                        <p className="text-lg text-[#4A4A4A]">
                        You can see the costs for Justlife's <strong>lab test at home</strong> service through our booking page, and check out our other health services such as PCR test and teledoctor
                        </p>

                       


                        <p className="mb-5 mt-8 text-lg text-[#4A4A4A]">
                            For more information about other services we provide, kindly visit: <Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]">Body Adjustment at Home</Link>,
                            <Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]">Doctor at Home</Link>,<Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]"> Flu Vaccine at Home</Link>,<Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]">IV Therapy at Home</Link>,
                            <Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]">Mobile Ice Bath</Link>,
                            <Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]"> Nurse at Home</Link>,
                            <Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]">Oxygen Therapy at Home</Link>,<Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]">PCR Test at Home</Link>,<Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]">Online Nutritionist Consultation</Link>,<Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]">Personal Trainer at Home</Link>,<Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]">Physiotherapy at Home</Link>,<Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]"> Online Psychotherapy</Link>,<Link href="" className="text-[#485fc7] hover:text-[#4A4A4A]">Vaccination at Home</Link>.

                        </p>

                    </div>

                </div>
            </div>
            <Scrollimg />
        </>
    );
}

export default LabTest;