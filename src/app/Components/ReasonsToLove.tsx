import React from 'react'
import Image from 'next/image'
const ReasonsToLove = () => {
    return (
        <>
            <section className='bg-[#FAFAFA] w-full'>
                <div className='text-center py-15'>
                    <h1 className='text-3xl font-bold'>There are so many reasons to love Justlife!</h1>
                    <p className='mt-5 text-lg'>Here are the top 4!</p>
                </div>

                <div className="w-full flex justify-center pb-12 items-center">
                    <div className="flex flex-wrap justify-center gap-7">
                        <div className='card  w-[260px] h-[400px] rounded-2xl px-5 bg-white py-10 flex flex-col items-center'>
                            <div >
                                <Image className='mb-7' src="/Images/star.svg" width={100} height={100} alt="star" />
                            </div>
                            <div className='text-center mb-4'>
                                <h1 className='text-2xl font-bold '>Top rated professionals</h1>
                            </div>
                            <div className='text-center'>
                                <p className='text-lg'>Our professionals are reliable & well-trained, with an average rating of 4.78 out of 5!</p>
                            </div>
                        </div>

                        <div className='card  w-[260px] h-[400px] rounded-2xl px-5 bg-white py-10 flex flex-col items-center'>
                            <div >
                                <Image className='mb-7' src="/Images/schdle.svg" width={100} height={100} alt="star" />
                            </div>
                            <div className='text-center mb-4'>
                                <h1 className='text-2xl font-bold '>Same-day availability</h1>
                            </div>
                            <div className='text-center'>
                                <p className='text-lg'>Book in less than 60 seconds, and even select same-day slots.</p>
                            </div>
                        </div>

                        <div className='card  w-[260px] h-[400px] rounded-2xl px-5 bg-white py-10 flex flex-col items-center'>
                            <div >
                                <Image className='mb-7' src="/Images/gph.svg" width={100} height={100} alt="star" />
                            </div>
                            <div className='text-center mb-4'>
                                <h1 className='text-2xl font-bold '>Top quality, value for money services</h1>
                            </div>
                            <div className='text-center'>
                                <p className='text-lg'>Our professionals are equipped with the best tools and our services are always priced with you in mind.</p>
                            </div>
                        </div>

                        <div className='card  w-[260px] h-[400px] rounded-2xl px-5 bg-white py-10 flex flex-col items-center'>
                            <div >
                                <Image className='mb-7' src="/Images/frame.svg" width={100} height={100} alt="star" />
                            </div>
                            <div className='text-center mb-4'>
                                <h1 className='text-2xl font-bold '>Super app</h1>
                            </div>
                            <div className='text-center'>
                                <p className='text-lg'>Being a Super app means we&apos;ve got the widest range of home services, so we’ve got you covered!</p>
                            </div>
                        </div>


                    </div>
                </div>
            </section>

        </>
    )
}

export default ReasonsToLove