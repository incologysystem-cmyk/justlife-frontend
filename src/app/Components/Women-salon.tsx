// women salon component
import Link from "next/link";
import Scrollimg from "./Scroll-img";
import { ChevronLeft } from "lucide-react";

function WomenSalon() {
    return (
        <>
            <div className="container w-[190vh] mx-auto px-5 py-4 ">
              
                <div className="flex items-center text-sm text-gray-400 tracking-wide">
                    <Link href="/" className="underline">
                        HOME
                    </Link>
                    <ChevronLeft className="mx-2 w-4 h-4" />
                    <span className="uppercase">Women's Salon at Home</span>
                </div>

                {/* Hero Section */}
                <div
                    className="relative bg-cover h-[550px] mt-6 rounded-xl shadow-lg flex items-end justify-start"
                    style={{ backgroundImage: "url('/Images/women-salon-at-home.webp')" }}
                >
                    <div className="absolute inset-0 bg-black/40 rounded-xl"></div>
                    <div className="relative z-10 p-10 pb-12 text-white">
                        <h1 className="md:text-5xl font-bold leading-snug mb-4">
                            Women's Salon and Beauty Services at Home in the United Arab Emirates
                        </h1>
                        <p className="text-base md:text-lg mb-8">Now book the best women's salon services at home in just 60 seconds</p>
                        <div className="flex flex-col md:flex-row gap-4">
                            <Link href="/pcr-at-home/booking">
                                <span className="hidden md:inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-bold uppercase rounded-full px-8 py-3 transition-all duration-300 cursor-pointer">
                                    Book Now
                                </span>
                            </Link>
                            <Link href="/pcr-at-home/booking">
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
                            Expert professionals offer you multiple salon services at your home. Manicures, pedicures, massages, and more—there are many service options under Justlife's Salon at Home. At Justlife, we care about your comfort and value your time.
                        </p>
                        <p className="mb-6 text-lg text-[#4A4A4A]">
                            A home service salon is a convenient and luxurious way to enjoy beauty and wellness treatments without leaving your house. Whether it's a quick manicure or a relaxing massage, our at-home salon services bring the expertise of a women salon at home directly to your doorstep. Justlife provides a comprehensive range of home services salon options, ensuring you receive the best beauty service at home.
                        </p>
                        <p className="mb-10 text-lg text-[#4A4A4A]">
                            Our salon-at-home offerings include everything from online salon services to parlor services at home, making it easy to book and enjoy high-quality treatments. So, let's examine what services you can benefit from, their inclusions, and their advantages.
                        </p>

                        <h3 className="text-2xl font-bold mb-5 text-[#4A4A4A]">
                            What is a Salon at Home?
                        </h3>

                        <p className="mb-8 text-lg text-[#4A4A4A]">
                            Salon at Home is a convenient and luxurious way to enjoy beauty and wellness treatments without leaving your house. Whether it's a quick manicure or a relaxing massage, our home beauty services bring the expertise of a salon directly to your doorstep. So, let's examine what services you can benefit from, their inclusions, and their advantages. </p>

                        <h3 className="text-2xl font-bold mb-2 mt-4 text-[#4A4A4A]">Beauty Services at Home</h3>
                        <p className="mt-4 text-lg text-[#4A4A4A]">
                            A: A swab sample is taken from the nose & throat. Your sample is then submitted to a certified lab for examination. Your test results can be shared as early as 5 hours, depending on the chosen service and location.
                        </p>

                        <h3 className="text-2xl font-bold mb-2 mt-4 text-[#4A4A4A]">1. Manicure & Pedicure at Home</h3>
                        <p className="mt-4 text-lg text-[#4A4A4A]">
                            Our skilled professionals are always ready to deliver hygienic home salon services with great care and high-quality tools and equipment.
                        </p>

                        <h3 className="text-lg font-bold mb-2 mt-4 text-[#4A4A4A]">1.1. Jelly Spa Manicure & Pedicure at Home</h3>
                        <p className="mt-4 text-lg text-[#4A4A4A]">
                            Experience a luxurious jelly spa manicure and pedicure that caters to the specific needs of your skin and nails. Justlife uses top-quality products that prevent nail breakage, strengthen them against cold, and ensure healthy growth. The luxurious jelly bath hydrates and moisturizes your skin, leaving your hands and feet soft and supple. This service includes cuticle care, nail shaping, and a relaxing hand and foot massage, providing a complete pampering experience.
                        </p>

                        <h3 className="text-lg font-bold mb-2 mt-4 text-[#4A4A4A]">1.2. Classic Manicure & Pedicure</h3>
                        <p className="mt-4 text-lg text-[#4A4A4A]">
                            Enjoy a thorough 90-minute classic manicure and pedicure session. This service includes nail trimming, shaping, cuticle care, exfoliation, and a soothing massage. We finish with the application of your chosen nail polish. This traditional treatment ensures your nails are clean, well-groomed, and polished to perfection, offering a classic home salon service experience.
                        </p>

                        <h3 className="text-lg font-bold mb-2 mt-4 text-[#4A4A4A]">1.3. Gel Polish Manicure & Pedicure</h3>
                        <p className="mt-4 text-lg text-[#4A4A4A]">
                            Opt for a long-lasting and chip-resistant gel polish manicure and pedicure. This 130-minute service includes nail prep, cuticle care, and the application of gel polish, which is cured under a UV lamp for durability. Gel polish keeps your nails strong and promotes faster, healthier growth. Enjoy beautiful, glossy nails that last for weeks without chipping.
                        </p>

                        <h3 className="text-lg font-bold mb-2 mt-4 text-[#4A4A4A]">1.4. French Manicure & Pedicure</h3>
                        <p className="mt-4 text-lg text-[#4A4A4A]">
                            The French manicure and pedicure are timeless and elegant. This service includes nail shaping, cuticle care, and the application of a nude or pink base color with white tips. It takes 50 minutes for a French manicure and 60 minutes for a French pedicure. This classic look is perfect for any occasion and reflects the aesthetic sophistication of French beauty culture.
                        </p>

                        <h3 className="text-2xl font-bold mb-2 mt-4 text-[#4A4A4A]">2. Acrylic Extension & Nail Polish Application at Home</h3>
                        <p className="mt-4 text-lg text-[#4A4A4A]">
                            Enhance your nails with our acrylic extension and nail polish services, providing durable and stylish options for your hands and feet.
                        </p>

                        <h3 className="text-lg font-bold mb-2 mt-4 text-[#4A4A4A]">2.1. Nail Cut / File</h3>
                        <p className="mt-4 text-lg text-[#4A4A4A]">
                            This quick 15-minute service includes expertly cutting and filing your nails to the desired shape. Our professionals ensure your nails look perfect and ready for further treatments.
                        </p>

                        <h3 className="text-lg font-bold mb-2 mt-4 text-[#4A4A4A]">2.2. Nail Acrylic Extensions Removal (Hands or Feet)</h3>
                        <p className="mt-4 text-lg text-[#4A4A4A]">
                            Remove acrylic extensions or hard gel nails professionally without damaging your natural nails. This 60-minute service uses disposable sheets and gentle techniques to ensure a safe and hygienic removal process.
                        </p>

                        <h3 className="text-lg font-bold mb-2 mt-4 text-[#4A4A4A]">2.3. Nail Acrylic Extensions Removal Combo</h3>
                        <p className="mt-4 text-lg text-[#4A4A4A]">
                            In just 120 minutes, our experts will remove acrylic extensions from both your hands and feet. This comprehensive package ensures your nails are left healthy and ready for new treatments.
                        </p>

                        <h3 className="text-lg font-bold mb-2 mt-4 text-[#4A4A4A]">2.4. Nail Gel Polish Removal (Hands or Feet)</h3>
                        <p className="mt-4 text-lg text-[#4A4A4A]">
                            Our 20-minute gel polish removal service gently removes old gel polish from your fingernails or toenails without causing any damage. This service ensures your nails are clean and ready for a fresh application.
                        </p>

                        <h3 className="text-lg font-bold mb-2 mt-4 text-[#4A4A4A]">2.5. Classic Nail Polish Application (Hands or Feet)</h3>
                        <p className="mt-4 text-lg text-[#4A4A4A]">
                            Choose from a wide variety of nail polish colors and types to suit your style and mood. This service includes nail clipping, filing, and the application of OPI or Essie products. You can also request additional nail art during booking.
                        </p>


                        <h3 className="text-lg font-bold mb-2 mt-4 text-[#4A4A4A]">2.6. French-Polish Application (Hands or Feet)</h3>
                        <p className="mt-4 text-lg text-[#4A4A4A]">
                            Enjoy a French polish application for a classic and sophisticated look. This service includes the application of a nude or pink base color with white tips, providing a timeless and elegant finish.
                        </p>

                        <h3 className="text-lg font-bold mb-2 mt-4 text-[#4A4A4A]">2.7. Gel Nail Polish Application (Hands or Feet)</h3>
                        <p className="mt-4 text-lg text-[#4A4A4A]">
                            Get long-lasting and durable nails with our gel polish application service. Using CND Shellac Gel Polish, this treatment ensures your nails are hard, shiny, and smudge-free immediately after application.
                        </p>

                        <h3 className="text-lg font-bold mb-2 mt-4 text-[#4A4A4A]">2.8. Gel French Polish Application (Hands or Feet)</h3>
                        <p className="mt-4 text-lg text-[#4A4A4A]">
                            Combine the durability of gel polish with the elegance of a French manicure. This service uses CND Shellac Gel Polish to create a stylish and long-lasting French look.
                        </p>
                        <h3 className="text-2xl font-bold mb-2 mt-4 text-[#4A4A4A]">3. Massage at Home</h3>
                        <p className="mt-4 text-lg text-[#4A4A4A]">
                            Relax in the comfort of your home with our professional massage services. Our home service makes you feel like you're in a massage parlor or on vacation in Thailand. Let's explore our special massage packages.

                        </p>
                        <h3 className="text-lg font-bold mb-2 mt-4 text-[#4A4A4A]">3.1. Head Massage</h3>
                        <p className="mt-4 text-lg text-[#4A4A4A]">
                            Alleviate stress and reduce headaches with our 20-minute head massage. Our experts offer both dry and oil massages, using disposable towels to ensure hygiene. This relaxing treatment targets pressure points on your scalp, neck, and shoulders, providing relief from tension and promoting overall relaxation.

                        </p>
                        <h3 className="text-lg font-bold mb-2 mt-4 text-[#4A4A4A]">3.2. Foot Massage</h3>
                        <p className="mt-4 text-lg text-[#4A4A4A]">
                            Stimulate your muscles and improve blood circulation with our 20-minute foot massage. This treatment reduces tension, and promotes relaxation throughout your body. Our experts offer both dry and oil foot massages, tailored to your preferences.

                        </p>
                        <h3 className="text-2xl font-bold mb-2 mt-4 text-[#4A4A4A]">4. Waxing at Home
                        </h3>
                        <p className="mt-4 text-lg text-[#4A4A4A]">
                            Enjoy smooth skin with our waxing services at home. We work with the most professional experts in the business, offering two types of waxing: honey and Rica. Choose from single-area waxing or full-body waxing packages, all at affordable prices.

                        </p>
                        <h3 className="text-lg font-bold mb-2 mt-4 text-[#4A4A4A]">4.1. Single Area Waxing
                        </h3>
                        <p className="mt-4 text-lg text-[#4A4A4A]">
                            Target specific areas such as arms, legs, underarms, or the bikini line with our single-area waxing services. Our experts use high-quality wax to ensure a smooth and painless experience.

                        </p>
                        <h3 className="text-lg font-bold mb-2 mt-4 text-[#4A4A4A]">4.2. Full Body Waxing
                        </h3>
                        <p className="mt-4 text-lg text-[#4A4A4A]">
                            Opt for a comprehensive full-body waxing package that includes waxing for all desired areas. This service ensures your skin is smooth and hair-free, providing long-lasting results.

                        </p>
                        <h3 className="text-2xl font-bold mb-2 mt-4 text-[#4A4A4A]">5. Hair Services at Home
                        </h3>
                        <p className="mt-4 text-lg text-[#4A4A4A]">
                            Our salon home service extends to professional hair treatments. We have separate packages for short and long hair, including Blow Dry, Blow Dry with curls, hair straightening with Iron, and L'Oréal Hair Spa. This 45-minute hair treatment strengthens your hair follicles and heals damage, providing a salon-like experience at home.

                        </p>
                        <h3 className="text-lg font-bold mb-2 mt-4 text-[#4A4A4A]">5.1. Blow Dry (Short Hair)
                        </h3>
                        <p className="mt-4 text-lg text-[#4A4A4A]">
                            Achieve a sleek and polished look with our blow dry service for short hair. Our professionals will style your hair to perfection, giving you a fresh and vibrant appearance.

                        </p>
                        <h3 className="text-lg font-bold mb-2 mt-4 text-[#4A4A4A]">5.2. Blow Dry (Long Hair)</h3>
                        <p className="mt-4 text-lg text-[#4A4A4A]">
                            Enjoy a smooth and voluminous finish with our blow dry service for long hair. Our experts will style your hair to enhance its natural beauty and shine.

                        </p>
                        <h3 className="text-lg font-bold mb-2 mt-4 text-[#4A4A4A]">5.3. Blow Dry with Curls
                        </h3>
                        <p className="mt-4 text-lg text-[#4A4A4A]">
                            Add beautiful curls to your blow dry for a glamorous look. This service includes styling with curls to give your hair extra bounce and texture.

                        </p>
                        <h3 className="text-lg font-bold mb-2 mt-4 text-[#4A4A4A]">5.4. Hair Straightening with Iron
                        </h3>
                        <p className="mt-4 text-lg text-[#4A4A4A]">
                            Get perfectly straight hair with our hair straightening service using a flat iron. This treatment smooths out frizz and leaves your hair looking sleek and shiny.

                        </p>
                        <h3 className="text-2xl font-bold mb-2 mt-4 text-[#4A4A4A]">6. Facial Care & Treatment at Home
                        </h3>
                        <p className="mt-4 text-lg text-[#4A4A4A]">
                            Facial care is as crucial as hair care. Our experts offer treatments that cleanse, nourish, and enrich your skin with vitamins, smooth your skin, and tighten pores. We provide various facial treatments tailored to your needs at very affordable prices.

                        </p>

                        <h3 className="text-lg font-bold mb-2 mt-4 text-[#4A4A4A]">6.1. Deep Cleansing Facial
                        </h3>
                        <p className="mt-4 text-lg text-[#4A4A4A]">
                            Our deep cleansing facial removes impurities and unclogs pores, leaving your skin refreshed and revitalized. This treatment includes exfoliation, steam, extraction, and a nourishing mask.


                        </p>
                        <h3 className="text-lg font-bold mb-2 mt-4 text-[#4A4A4A]">6.2. Hydrating Facial

                        </h3>
                        <p className="mt-4 text-lg text-[#4A4A4A]">
                            Replenish and hydrate your skin with our hydrating facial. This treatment uses moisturizing products and techniques to restore your skin's natural moisture balance, leaving it soft and glowing.


                        </p>
                        <h3 className="text-lg font-bold mb-2 mt-4 text-[#4A4A4A]">6.3. Anti-Aging Facial

                        </h3>
                        <p className="mt-4 text-lg text-[#4A4A4A]">
                            Combat signs of aging with our anti-aging facial treatment. This service includes the use of specialized products and techniques to reduce fine lines, wrinkles, and age spots, promoting a youthful and radiant complexion.


                        </p>
                        <h3 className="text-2xl font-bold mb-2 mt-4 text-[#4A4A4A]">7. Threading at Home

                        </h3>
                        <p className="mt-4 text-lg text-[#4A4A4A]">
                            Our experts provide threading services with great care and high hygiene standards. Get threading services for your entire face, with 15 minutes for eyebrows, 10 minutes for the upper lip, and 25 minutes for the entire face.
                        </p>
                        <h3 className="text-lg font-bold mb-2 mt-4 text-[#4A4A4A]">7.1. Eyebrow Threading
                        </h3>
                        <p className="mt-4 text-lg text-[#4A4A4A]">
                            Achieve perfectly shaped eyebrows with our 15-minute eyebrow threading service. Our experts use precise techniques to create clean and defined brows.
                        </p>
                        <h3 className="text-lg font-bold mb-2 mt-4 text-[#4A4A4A]">7.2. Upper Lip Threading
                        </h3>
                        <p className="mt-6 mb-[25px] text-lg text-[#4A4A4A]">
                            Remove unwanted hair from your upper lip with our quick 10-minute threading service. This treatment ensures smooth and hair-free skin.                         </p>



                        {/*beauty salon services  */}
                        <div>
                            <h1 className="text-3xl font-bold mt-8 text-[#4A4A4A]">Why Should You Book a Beauty Salon Service at Home?</h1>

                            <p className="mt-8 mb-8 text-lg text-[#4A4A4A]">Booking a beauty salon service at home offers unparalleled convenience and flexibility. Here are some compelling reasons to choose Justlife's salon at-home services:</p>

                            <ol className="list-decimal ms-4 ps-3 text-[#4A4A4A]">
                                <li className="text-lg">
                                    Convenience and Flexibility:
                                    <ul className="list-disc ms-6 ps-3 marker:text-[1.4rem] marker:tabular-nums marker:normal-case marker:text-start marker:indent-0">
                                        <li className="text-lg">
                                            Enjoy salon services at home whenever it suits you. There's no need to spend time traveling to a salon or waiting for your appointment. With Justlife, you can schedule your home beauty services at your preferred time, ensuring you never disrupt your daily routine.
                                        </li>
                                    </ul>
                                </li>

                                <li className="text-lg">
                                    Personalized Experience:
                                    <ul className="list-disc ms-6 ps-3 marker:text-[1.4rem] marker:tabular-nums marker:normal-case marker:text-start marker:indent-0">
                                        <li className="text-lg">
                                            Customize your beauty treatments to suit your individual needs. Whether you require a quick manicure or an elaborate spa day, you can determine and book the services you need in advance. This personalized approach ensures you get exactly what you want, without any compromises.
                                        </li>
                                    </ul>
                                </li>
                                <li className="text-lg">
                                    Hygiene and Safety:
                                    <ul className="list-disc ms-6 ps-3 marker:text-[1.4rem] marker:tabular-nums marker:normal-case marker:text-start marker:indent-0">
                                        <li className="text-lg">
                                            Our salon home services prioritize hygiene and safety. All tools and equipment are thoroughly sanitized before use, and our professionals follow strict hygiene protocols. This means you can enjoy your treatments with complete peace of mind, knowing your health and safety are our top priorities.

                                        </li>
                                    </ul>
                                </li>
                                <li className="text-lg">
                                    Professional Expertise:
                                    <ul className="list-disc ms-6 ps-3 marker:text-[1.4rem] marker:tabular-nums marker:normal-case marker:text-start marker:indent-0">
                                        <li className="text-lg">
                                            Justlife's home salon services are delivered by a team of highly trained and experienced professionals. Our experts are skilled in a wide range of beauty treatments, ensuring you receive high-quality service every time. From manicures and pedicures to massages and facials, our team is equipped to provide you with the best care.

                                        </li>
                                    </ul>
                                </li>
                                <li className="text-lg">
                                    Affordable Pricing:
                                    <ul className="list-disc ms-6 ps-3 marker:text-[1.4rem] marker:tabular-nums marker:normal-case marker:text-start marker:indent-0">
                                        <li className="text-lg">
                                            Enjoy premium beauty services at home without breaking the bank. Justlife offers competitive pricing for all our at-home salon services, making luxury treatments accessible and affordable. Our transparent pricing ensures there are no hidden costs, allowing you to enjoy your pampering session worry-free.

                                        </li>
                                    </ul>
                                </li>
                                <li className="text-lg">
                                    Easy Booking Process:
                                    <ul className=" mb-5 list-disc ms-6 ps-3 marker:text-[1.4rem] marker:tabular-nums marker:normal-case marker:text-start marker:indent-0">
                                        <li className="text-lg">
                                            Booking your home beauty services is quick and hassle-free through the Justlife website. Our user-friendly platform allows you to browse, select, and schedule your desired treatments in just a few clicks. This seamless booking experience saves you time and effort, making it easier than ever to enjoy salon-quality services at home.

                                        </li>
                                    </ul>
                                </li>

                            </ol>
                            <p className="mb-9 mt-8 text-lg text-[#4A4A4A]">By choosing Justlife's salon at-home services, you are opting for a convenient, personalized, and professional beauty experience right in the comfort of your own home. Enjoy the luxury of top-tier treatments without any of the usual hassles associated with traditional salon visits. Book your home salon services today and discover the Justlife difference.</p>

                        </div>

                    </div>

                    {/* home services cost  */}

                    <div className="leading-relaxed text-[#4A4A4A] mt-9">
                        <h1 className="text-3xl font-bold text-[#4A4A4A]">How Much Do Salon at Home Services Cost?</h1>

                        <p className="mb-6 text-lg mt-6 text-[#4A4A4A]">
                            Manicure and pedicure services range from 109-169 AED. Nail extensions and nail polish applications also range from 20-79 AED. Massages are starting from 30 AED.
                        </p>

                        <p className="mb-6 text-lg text-[#4A4A4A]">
                            Waxes range from AED 29-89 for single areas, while total body waxes range from Brazilian and without Brazilian. With Brazilian, it is 249 AED, without Brazilian, it is 179 AED.
                        </p>

                        <p className="mb-6 text-lg text-[#4A4A4A]">
                            Hair treatments also range from AED 99-119.
                        </p>

                        <p className="mb-6 text-lg text-[#4A4A4A]">
                            With Justlife, you can create a beauty salon at home. We offer you high-quality services, hygienic tools, and massages. We offer you a high-level experience with Justlife's expert team
                        </p>
                    </div>


                    <div>
                        <h1 className="text-3xl font-bold text-[#4A4A4A]">How Long Does a Typical Home Salon Service Last? </h1>


                        <ul className="mt-8 list-disc ms-6 ps-3 marker:text-[1.4rem] marker:tabular-nums marker:normal-case marker:text-start marker:indent-0 mb-8 text-[#4A4A4A]">
                            <li className="text-lg">
                                The duration of home salon services varies depending on the type of treatment. For example, a classic manicure and pedicure typically take about 90 minutes, while a gel polish application can take up to 130 minutes. Massage services range from 20 minutes for a head massage to 60 minutes for a full-body massage. Hair treatments generally last between 45 to 90 minutes. Each service is designed to provide comprehensive care within a reasonable timeframe.                            </li>
                        </ul>

                        <h1 className="text-3xl font-bold text-[#4A4A4A]">Are the Products Used Safe and of Good Quality? </h1>


                        <ul className="mt-8 list-disc ms-6 ps-3 marker:text-[1.4rem] marker:tabular-nums marker:normal-case marker:text-start marker:indent-0 mb-6 text-[#4A4A4A]">
                            <li className="text-lg">
                                Absolutely. Justlife prioritizes the safety and satisfaction of our clients. We use high-quality, reputable products such as OPI, Essie, and CND Shellac for nail treatments, and L'Oréal for hair treatments. All tools and equipment are thoroughly sanitized before use to ensure the highest standards of hygiene. Our professionals are trained to use these products effectively, providing you with safe and exceptional beauty care.

                            </li>
                        </ul>

                        <h1 className="text-3xl font-bold text-[#4A4A4A]">How to Book Home Salon Services? </h1>


                        <ul className="mt-8 list-disc ms-6 ps-3 marker:text-[1.4rem] marker:tabular-nums marker:normal-case marker:text-start marker:indent-0 mb-6 text-[#4A4A4A]">
                            <li className="text-lg">
                                Booking home salon services with Justlife is quick and easy. Simply visit our website and browse through the range of services we offer. Select the treatments you desire, choose a convenient time slot, and confirm your booking. Our user-friendly platform allows you to schedule appointments with just a few clicks. Alternatively, you can also book through our mobile app for added convenience. Enjoy the luxury of salon-quality services delivered right to your doorstep with Justlife.
                            </li>
                        </ul>

                        <p className="mb-5 text-lg text-[#4A4A4A]">
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

export default WomenSalon;