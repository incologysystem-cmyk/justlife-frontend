import React from "react";
import Image from "next/image";

const PromiseSection = () => {
    return (
        <section>
            <div className=" text-white py-13 px-6 md:px-20 flex flex-col md:flex-row items-center justify-center gap-8 relative overflow-hidden">

                <div className="absolute inset-0 bg-[#00b7ff] opacity-87"></div>
                <div className="absolute inset-0 bg-[url('/Images/pattern.webp')]   bg-center"></div>

                <div className="relative z-10 flex-shrink-0">

                    <Image src="/Images/jl-insurance-logo.svg" alt="Shield Icon" width={110} height={100} />

                </div>

                <div className="relative z-10 max-w-2xl text-center md:text-left">
                    <h2 className="text-3xl md:text-[28px] font-semibold mb-4">
                        The Justlife Promise – Excellence in Every Home
                    </h2>
                    <p className="text-lg leading-relaxed">
                        At Justlife, we commit to the highest standards of home care.
                        Our trained professionals deliver a superior service experience,
                        ensuring your home is in expert hands. Your peace of mind is our promise.
                    </p>
                </div>
            </div>


          
        </section>
    );
};

export default PromiseSection;
