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
                    <div className="flex flex-col justify-center items-center">
                        <div className="py-3 px-10 flex justify-center items-center w-[195px] h-[95px] border border-gray-200 hover:bg-gray-50 rounded-xl">
                            <Image src="/Images/home-cleaning.svg" width={60} height={60} alt="" />
                        </div>
                        <p className="mt-3">Home Cleaning</p>
                    </div>

                    <div className="flex flex-col justify-center items-center">
                        <div className="py-3 px-10  flex justify-center items-center w-[195px] h-[95px]  border border-gray-200 hover:bg-gray-50 rounded-xl">
                            <Image src="/Images/pcr-at-home.svg" width={80} height={80} alt="" />
                        </div>
                        <p className="mt-3">PCR at Home</p>
                    </div>

                    <div className="flex flex-col justify-center items-center">
                        <div className="py-3 px-10 flex justify-center items-center w-[195px] h-[95px] border border-gray-200 hover:bg-gray-50 rounded-xl">
                            <Image src="/Images/women-salon.svg" width={45} height={45} alt="" />
                        </div>
                        <p className="mt-3">Women’s Salon</p>
                    </div>

                    <div className="flex flex-col justify-center items-center">
                        <div className="py-3 px-10 flex justify-center items-center w-[195px] h-[95px] border border-gray-200 hover:bg-gray-50 rounded-xl">
                            <Image src="/Images/women-spa.svg" width={60} height={60} alt="" />
                        </div>
                        <p className="mt-3">Women’s Spa</p>
                    </div>

                    <div className="flex flex-col justify-center items-center">
                        <div className="py-3 px-10 flex justify-center items-center w-[195px] h-[95px] border border-gray-200 hover:bg-gray-50 rounded-xl">
                            <Image src="/Images/furniture-cleaning.svg" width={60} height={60} alt="" />
                        </div>
                        <p className="mt-3">Furniture Cleaning</p>
                    </div>

                </div>
                <div className="flex gap-10 mt-15">
                    <div className="flex flex-col justify-center items-center">
                        <div className="py-3 px-10 flex justify-center items-center w-[195px] h-[95px] border border-gray-200 hover:bg-gray-50 rounded-xl">
                            <Image src="/Images/ac-cleaning.svg" width={60} height={60} alt="" />
                        </div>
                        <p className="mt-3">A/C Cleaning</p>
                    </div>

                    <div className="flex flex-col justify-center items-center">
                        <div className="py-3 px-10 flex justify-center items-center w-[195px] h-[95px] border border-gray-200 hover:bg-gray-50 rounded-xl">
                            <Image src="/Images/mens-grooming.svg" width={45} height={45} alt="" />
                        </div>
                        <p className="mt-3">Premium Men’s Grooming</p>
                    </div>

                    <div className="flex flex-col justify-center items-center">
                        <div className="py-3 px-10 flex justify-center items-center w-[195px] h-[95px] border border-gray-200 hover:bg-gray-50 rounded-xl">
                            <Image src="/Images/lab-at-home.svg" width={60} height={60} alt="" />
                        </div>
                        <p className="mt-3">Lab at Home</p>
                    </div>

                    <div className="flex flex-col justify-center items-center">
                        <div className="py-3 px-10 flex justify-center items-center w-[195px] h-[95px] border border-gray-200 hover:bg-gray-50 rounded-xl">
                            <Image src="/Images/pest-control.svg" width={60} height={60} alt="" />
                        </div>
                        <p className="mt-3">Pest Control</p>
                    </div>

                    <div className="flex flex-col justify-center items-center">
                        <div className="py-3 px-10 flex justify-center items-center w-[195px] h-[95px] border border-gray-200 hover:bg-gray-50 rounded-xl">
                            <Image src="/Images/disinfection.svg" width={60} height={60} alt="" />
                        </div>
                        <p className="mt-3">Disinfection</p>
                    </div>

                </div>
            </div>
        </section>
    )
};
