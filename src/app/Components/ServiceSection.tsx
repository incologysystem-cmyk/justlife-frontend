import Link from "next/link";
import Image from "next/image";

export default function ServicesSection() {
    return (
        <section className="py-16 text-center bg-white">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                Leave your to-do list to us!
            </h2>
            <p className="text-black mt-3 text-lg mb-10">
                Check out some of our top home services:
            </p>

            <div className="w-full flex flex-col justify-center items-center">
                <div className="flex gap-10">
                    {/* Home Cleaning */}
                    <div className="flex flex-col justify-center items-center">
                        <Link href="/AllPage/homecleaning">
                            <div className="py-3 px-10 flex justify-center items-center w-[195px] h-[95px] border border-gray-200 hover:bg-gray-50 rounded-xl cursor-pointer">
                                <Image src="/Images/home-cleaning.svg" width={60} height={60} alt="Home Cleaning" />
                            </div>
                            <p className="mt-3 text-[#4A4A4A] font-medium hover:underline">Home Cleaning</p>
                        </Link>
                    </div>

                    <div className="flex flex-col justify-center items-center">
                        <Link href="/AllPage/PCRathome">
                        <div className="py-3 px-10  flex justify-center items-center w-[195px] h-[95px]  border border-gray-200 hover:bg-gray-50 rounded-xl">
                            <Image src="/Images/pcr-at-home.svg" width={80} height={80} alt="" />
                        </div>
                        <p className="mt-3">PCR at Home</p>
                        </Link>
                    </div>

                    <div className="flex flex-col justify-center items-center">
                        <Link href="/AllPage/women-salon">
                        <div className="py-3 px-10 flex justify-center items-center w-[195px] h-[95px] border border-gray-200 hover:bg-gray-50 rounded-xl">
                            <Image src="/Images/women-salon.svg" width={45} height={45} alt="" />
                        </div>
                        <p className="mt-3">Women’s Salon</p>
                        </Link>
                    </div>

                    <div className="flex flex-col justify-center items-center">
                       <Link href="/AllPage/women-spa">
                        <div className="py-3 px-10 flex justify-center items-center w-[195px] h-[95px] border border-gray-200 hover:bg-gray-50 rounded-xl">
                            <Image src="/Images/women-spa.svg" width={60} height={60} alt="" />
                        </div>
                        <p className="mt-3">Women’s Spa</p>
                       </Link>
                    </div>

                    <div className="flex flex-col justify-center items-center">
                        <Link href="/AllPage/furniture">
                        <div className="py-3 px-10 flex justify-center items-center w-[195px] h-[95px] border border-gray-200 hover:bg-gray-50 rounded-xl">
                            <Image src="/Images/furniture-cleaning.svg" width={60} height={60} alt="" />
                        </div>
                        <p className="mt-3">Furniture Cleaning</p>
                        </Link>
                    </div>

                </div>
                <div className="flex gap-10 mt-15">
                    <div className="flex flex-col justify-center items-center">
                       <Link href="/AllPage/ACcleaning">
                       
                        <div className="py-3 px-10 flex justify-center items-center w-[195px] h-[95px] border border-gray-200 hover:bg-gray-50 rounded-xl">
                            <Image src="/Images/ac-cleaning.svg" width={60} height={60} alt="" />
                        </div>
                        <p className="mt-3">A/C Cleaning</p></Link>
                    </div>

                    <div className="flex flex-col justify-center items-center">
                       <Link href="/AllPage/mengrooming">
                        <div className="py-3 px-10 flex justify-center items-center w-[195px] h-[95px] border border-gray-200 hover:bg-gray-50 rounded-xl">
                            <Image src="/Images/mens-grooming.svg" width={45} height={45} alt="" />
                        </div>
                        <p className="mt-3">Premium Men’s Grooming</p>
                       </Link>
                    </div>

                    <div className="flex flex-col justify-center items-center">
                        <Link href="/AllPage/labTest">
                        <div className="py-3 px-10 flex justify-center items-center w-[195px] h-[95px] border border-gray-200 hover:bg-gray-50 rounded-xl">
                            <Image src="/Images/lab-at-home.svg" width={60} height={60} alt="" />
                        </div>
                        <p className="mt-3">Lab at Home</p>
                        </Link>
                    </div>

                    <div className="flex flex-col justify-center items-center">
                        <Link href="/AllPage/pestcontrol">
                        <div className="py-3 px-10 flex justify-center items-center w-[195px] h-[95px] border border-gray-200 hover:bg-gray-50 rounded-xl">
                            <Image src="/Images/pest-control.svg" width={60} height={60} alt="" />
                        </div>
                        <p className="mt-3">Pest Control</p>
                        </Link>
                    </div>

                    <div className="flex flex-col justify-center items-center">
                      <Link href="/AllPage/disinfection">
                        <div className="py-3 px-10 flex justify-center items-center w-[195px] h-[95px] border border-gray-200 hover:bg-gray-50 rounded-xl">
                            <Image src="/Images/disinfection.svg" width={60} height={60} alt="" />
                        </div>
                        <p className="mt-3">Disinfection</p>
                      </Link>
                    </div>

                </div>
            </div>
        </section>
    )
};
