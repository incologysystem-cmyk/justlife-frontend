// women spa component
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import Scrollimg from "./Scroll-img";
// import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Womenspa() {
    return (
        <>


            <div className="container w-[190vh] mx-auto px-5 py-4  ">
                {/*  Link */}
                <div className="flex items-center text-sm text-gray-400 tracking-wide">
                    <Link href="/" className="underline">
                        HOME
                    </Link>
                    <ChevronLeft className="mx-2 w-4 h-4" />
                    <span className="uppercase">Women's Spa at Home</span>
                </div>


                {/* Hero Section */}
                <div
                    className="relative bg-cover  h-[550px] mt-6 rounded-xl shadow-lg flex items-end justify-start"
                    style={{ backgroundImage: "url('/Images/womens-spa.webp')" }}
                >
                    {/* Dark overlay */}
                    <div className="absolute p-5 inset-0 bg-black/40 rounded-2xl"></div>

                    {/* Text + Button  */}
                    <div className="relative z-10 p-10 pb-12 ">
                        <h1 className="md:text-5xl custom-font font-bold text-white leading-snug mb-4">
                           Spa and Massage Services at Home in the United Arab Emirates
                        </h1>

                        <p className="text-base md:text-lg text-gray-200 mb-8">
                           Now book the best women's spa and massage services in just 60 seconds.
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
                <div className="cust-font text-[#4A4A4A] leading-relaxed">
                    <div>
                        <p className="mt-8 mb-10 text-lg text-[#4A4A4A]">
                            There is no limit to the services you can get at home. You can continue to feel very special with our massage for women at home service. At Justlife, we try to create the best experience for you. In this way, we are making you feel relaxed and good. For this reason, we offer you a unique massage experience accompanied by skilled therapists. It would be helpful to look at the massage spa services you can get at home.  </p>

                        <h1 className="text-2xl font-bold mt-10 mb-8 text-[#4A4A4A]">
                            What is The Difference Between Spa and Massage?
                        </h1>
                        <p className="mt-5 mb-3 text-lg text-[#4A4A4A]">
                            A spa is a place built and prepared to allow people to relax and de-stress. Relax, refresh, and rejuvenate your mind to resume your normal activities without any psychological or physical hindrance.  </p>
                        <p className="mt-5 text-lg text-[#4A4A4A]">
                            <strong>Massage </strong>aims to completely relieve fatigue or pain through individual pressure pulses in the muscles. Our experts apply this massage to one part of your body or the whole body. You can choose whatever you want. As a client, you need to know your fitness goals so that appropriate interventions can be made.  </p>

                        <p className="mt-5 mb-3 text-lg text-[#4A4A4A]">
                            Spa and massage are always combined for people to achieve full recovery. Spa is the hydrotherapy section. Massage is the physical therapy section. While being massaged by a therapist, a spa massage involves immersing yourself in a tub of mineralized water. </p>

                        <h1 className="text-2xl font-bold mt-10 mb-8 text-[#4A4A4A]">
                            What to Expect from Massage and Spa Service?

                        </h1>
                        <p className="mt-8 mb-8 text-lg text-[#4A4A4A]">
                            First, the client is assessed and evaluated to identify all problems. Massage therapy will then begin on the parts that the client has complained about. After the pressures or strokes are applied, the client can relax and finally, health education is offered. Spa therapy does not involve these processes, clients simply go through the phases, enjoy a warm mineral water bath, and then go out after the session is over.
                        </p>

                        <p className="mt-5 mb-2 text-lg text-[#4A4A4A]">
                            For this reason, your expectations from a massage should be to feel that your problem areas are focused on and that there is relaxation in those areas and healing in the muscles.

                        </p>

                        <h1 className="text-2xl font-bold mt-8 mb-2 text-[#4A4A4A]">
                            Which Massage & Spa Services are Offered at Home?
                        </h1>
                        <p className="mt-5 mb-2 text-lg text-[#4A4A4A]">
                            As Justlife, we also have massage services among at-home services. From our 8 different massage packages, you can choose the one that best suits your needs. Then put your feet up and enjoy your home.


                        </p>

                        <h3 className="text-xl font-bold mt-8 mb-2 text-[#4A4A4A]">
                            1. Body Scrub Service
                        </h3>
                        <p className="mt-5 mb-2 text-lg text-[#4A4A4A]">
                            A body scrub is a popular body treatment that is a facial for the body: it soothes and hydrates your skin, leaving it smooth and soft. Our experts are applying body scrub massage with oil.

                        </p>
                        <p className="mt-5 mb-2 text-lg text-[#4A4A4A]"><strong>At-home massage therapists</strong> begin by gently rubbing your back, the backs of your arms, and the backs of your legs and feet. This is a unique body massage and takes 20 minutes</p>

                        <h3 className="text-xl font-bold mt-8 mb-2 text-[#4A4A4A]">

                            2. Relaxation Massage Services
                        </h3>
                        <p className="mt-5 mb-5 text-lg text-[#4A4A4A]">
                            Relaxation massage helps you relax. The massage therapist moves at a slower pace and uses lighter pressure. In a relaxation massage, there is less emphasis on working on the underlying muscle tension and muscle constraints in the muscle tissue. Because deep tissue work can be uncomfortable, and you just want to drift off and feel good during a relaxation massage.
                        </p>
                        <p className="mt-5 mb-5 text-lg text-[#4A4A4A]">With Justlife, you can customize single and couple massage options and duration selections. You can choose single or couple relaxation massages for 60 minutes, 90 minutes and 120 minutes. Our 2 expert massage therapists serve in couple massages. Single massages are only for our female customers.

                        </p>

                        <h3 className="text-xl font-bold mt-8 mb-2 text-[#4A4A4A]">

                            3. Anti-Cellulite Massage Service
                        </h3>
                        <p className="mt-5 mb-5 text-lg text-[#4A4A4A]">
                            It takes 60 minutes. It is a type of massage performed with special techniques to reduce the appearance of cellulite and prevent its formation. It balances blood circulation. Induces a feeling of relaxation and well-being.

                        </p>

                        <h3 className="text-xl font-bold mt-8 mb-2 text-[#4A4A4A]">

                            4. Deep Tissue Massage Service
                        </h3>
                        <p className="mt-5 mb-5 text-lg text-[#4A4A4A]">
                            It is a special massage for your muscles or sports injuries that cause pain in your body. This massage also has single or couple options. You can choose 60-, 90- or 120-minute massages.

                        </p>

                        <h3 className="text-xl font-bold mt-8 mb-2 text-[#4A4A4A]">
                            5. Hot Stone Massage Service
                        </h3>
                        <p className="mt-5 mb-5 text-lg text-[#4A4A4A]">
                            Our experts are using hot stones for making your massage experience better.The stones are volcanic stones that have been specially selected for massage and can retain heat for a long time. Therefore, during the massage, the stones preserve their heat and preserve the heat in the chakra areas of the body.

                        </p>

                        <p className="mt-5 mb-5 text-lg text-[#4A4A4A]">
                            Combining the energy that the expert therapists will give to your body and the massage will make you feel better, alive, and fit. In this massage, you can choose single or couple massage packages with 60-, 90- or 120-minute options.

                        </p>

                        <h3 className="text-xl font-bold mt-8 mb-2 text-[#4A4A4A]">

                            6. Thai Massage Services
                        </h3>
                        <p className="mt-5 mb-5 text-lg text-[#4A4A4A]">
                            In practice, mostly pressure and stretching movements are made. You can examine the 60-, 90- or 120-minute packages of this massage, which includes There are types of pressure and stretching moves.. The four most important parts of the body, the feet, legs, back and neck, are the areas studied in Thai massage. Sessions take place on a semi-hard floor. Unlike other types of massage, Thai massage does not remove clothes and does not use oil. The entire session consists of the therapist's practices on special massage beds.

                        </p>
                        <p className="mt-5 mb-5 text-lg text-[#4A4A4A]">With Thai massage, the range of motion and flexibility of the body increase. In addition, it has a positive effect on all kinds of muscle pain in the body, especially low back, and neck pain.

                        </p>

                        <h3 className="text-xl font-bold mt-8 mb-2 text-[#4A4A4A]">

                            7. Head Neck & Shoulder Massage Services
                        </h3>
                        <p className="mt-5 mb-5 text-lg text-[#4A4A4A]">
                            It is an application for the head, neck, and shoulder area only. It is especially therapeutic and effective in relieving problems such as headaches, insomnia, tension, back and neck pain, and stiffness. In addition, it is very useful in strengthening and health of the hair, with its nourishing effect on the hair and scalp. It is a single massage package. 30- or 60-minute packages are available.

                        </p>

                        <h3 className="text-xl font-bold mt-8 mb-2 text-[#4A4A4A]">
                            8. Foot Massage Services

                        </h3>
                        <p className="mt-5 mb-5 text-lg text-[#4A4A4A]">
                            Each area on our feet represents certain organs and tissues in our body. The person who has a foot massage feels more alive and fit. You can choose 30 minutes or 60 minutes.

                        </p>

                        <p className="mt-5 mb-5 text-lg text-[#4A4A4A]">
                            Foot massage: balances cholesterol, improves blood circulation and relieves discomfort such as fatigue, insomnia, and stomach problems.
                        </p>


                        <h1 className="text-2xl font-bold mt-8 mb-2 text-[#4A4A4A]">
                            Why Choose Justlife's Massage & Spa Service?
                        </h1>
                        <p className="mt-5 mb-2 text-lg text-[#4A4A4A]">
                            With Justlife, we make you comfortable at home without tiring you out. We bring our massage beds to your home. We prepare the massage ambience for you and make you feel like you are in a private massage parlour. Moreover, all these services are performed by our very professional massage therapists meticulously and with great hygiene.

                        </p >
                        <p className="mt-5 mb-5 text-lg text-[#4A4A4A]">You can review all the women's spa and massage services mentioned above on the Justlife website and make a reservation very easily and quickly. Moreover, you are at the right address to get high-quality service at very affordable prices.

                        </p>

                         <p className="mt-8 mb-5 text-lg text-[#4A4A4A]" >
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
            <Scrollimg/>
        </>
    );
}