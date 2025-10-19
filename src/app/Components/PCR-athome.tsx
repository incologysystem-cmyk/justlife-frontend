// components/PCRTestPage.jsx
import Link from "next/link";
import Scrollimg from "./Scroll-img";
import { ChevronLeft } from "lucide-react";

function PCRTestPage() {
  return (
    <>
      <div className="container w-[190vh] mx-auto px-5 py-4 ">
        {/* Breadcrumb / Link */}
        <div className="flex items-center text-sm text-gray-400 tracking-wide">
          <Link href="/" className="underline">
            HOME
          </Link>
          <ChevronLeft className="mx-2 w-4 h-4" />
          <span className="uppercase">Covid 19 PCR Test At Home in UAE</span>
        </div>

        {/* Hero Section */}
        <div
          className="relative bg-cover h-[550px] mt-6 rounded-xl shadow-lg flex items-end justify-start"
          style={{ backgroundImage: "url('/Images/pcr-test-at-home.webp')" }}
        >
          <div className="absolute inset-0 bg-black/40 rounded-xl"></div>
          <div className="relative z-10 p-10 pb-12 text-white">
            <h1 className="md:text-5xl font-bold leading-snug mb-4">
              PCR Test at Home
            </h1>
            <p className="text-base md:text-lg mb-8">Book Your Test Now</p>
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
        <div className="mt-8 cust-font">
          <div className="leading-relaxed">
            <p className="mb-6 text-lg text-[#4A4A4A]">
              As the world grappled with the COVID-19 pandemic, testing has
              become a crucial tool in the fight against the virus. But getting
              tested for COVID-19 can be a hassle, requiring you to leave your
              home. Fortunately, Justlife's PCR Test at Home in UAE is here to
              provide you with a convenient, safe, and reliable way to get tested
              for COVID-19.
            </p>

            <p className="mb-6 text-lg text-[#4A4A4A]">
              Justlife's PCR Test at Home service allows you to get tested for
              COVID-19 in the comfort and privacy of your own home. The test is
              performed by a licensed healthcare professional, who will visit your
              home at a time that is convenient for you. The healthcare
              professional will administer the PCR test, which is considered the
              gold standard for COVID-19 testing and will take all necessary
              precautions to ensure your safety.
            </p>

            <p className="mb-6 text-lg text-[#4A4A4A]">
              Once the test is complete, the healthcare professional will
              transport the sample to a lab for analysis. The results will be sent
              to you electronically within 24 to 48 hours, so you can quickly take
              the necessary steps to protect yourself and those around you.
              Justlife's PCR Test at Home service is not only convenient but also
              highly accurate.
            </p>

            <h3 className="text-xl font-semibold mb-4 text-[#4A4A4A]">
              Benefits of At-Home PCR Test
            </h3>

            <h3 className="text-xl font-bold mt-8 text-[#4A4A4A]">Convenience</h3>
            <p className="mb-8 text-lg text-[#4A4A4A]">
              One of the primary benefits of PCR testing at home is the convenience it provides. Rather than having to travel to a testing site or laboratory, a licensed professional can perform an <strong>RT PCR</strong> test at your home. This <strong>RT PCR test</strong> is particularly beneficial for individuals who live in remote areas or have mobility issues. A <strong>rapid PCR</strong> test at home allows individuals to test themselves quickly and easily, without having to leave their homes.
            </p>

            <h3 className="text-xl font-bold mt-8 text-[#4A4A4A]">Privacy</h3>
            <p className="mb-8 text-lg text-[#4A4A4A]">
              <strong>PCR home service </strong>
              also provides individuals with privacy. Some individuals may feel uncomfortable being tested in a public setting, or they may not want to disclose their health status to others. PCR testing at home allows individuals to test themselves in private, without having to interact with healthcare professionals or other individuals who may be infected.
            </p>

            <h3 className="text-xl font-bold mt-8 text-[#4A4A4A]">
              Reduced risk of exposure
            </h3>
            <p className="mb-8 text-lg text-[#4A4A4A]">
              Another benefit of a <strong>PCR home test</strong> is the reduced risk of exposure to the virus. Going to a testing site or laboratory can increase an individual's risk of exposure to the virus, particularly if they are in close contact with others who may be infected. PCR testing at home eliminates this risk, as individuals do not need to come into contact with others while testing themselves.
            </p>

            <h3 className="text-xl font-bold mt-8 text-[#4A4A4A]">Accuracy</h3>
            <p className="mb-8 text-lg text-[#4A4A4A]">
              A PCR test is considered to be one of the most accurate methods for diagnosing COVID-19. This method of testing can accurately detect the virus even in low concentrations. PCR testing at home is no exception to this, and individuals can be confident in the accuracy of their results.
            </p>

            <h3 className="text-xl font-bold mt-8 text-[#4A4A4A]">Quicker results</h3>
            <p className="mb-8 text-lg text-[#4A4A4A]">
              <strong>At home, PCR testing</strong> is generally quicker than traditional laboratory testing. Once an individual collects their sample, they can send it to the laboratory for analysis. The laboratory will then analyze the sample using PCR technology and provide the results to the individual via email or phone within a few days. This is much quicker than traditional laboratory testing, which can take several days or even weeks.
            </p>

            <h3 className="text-xl font-bold mt-8 text-[#4A4A4A]">Reduced stress</h3>
            <p className="mb-8 text-lg text-[#4A4A4A]">
              <strong>PCR testing at home</strong> can also reduce stress for individuals who may be anxious about being tested for COVID-19. Some individuals may be worried about the testing process or the potential results of the test. PCR testing at home allows individuals to test themselves in a familiar setting, which can reduce anxiety and stress.
            </p>

            <h1 className="text-2xl font-bold text-[#4A4A4A]">
              Why Get A Justlife PCR Test At Home Service?
            </h1>

            <h3 className="text-xl font-bold mt-8 text-[#4A4A4A]">
              DHA Licensed Technicians
            </h3>
            <p className="mb-8 text-lg text-[#4A4A4A]">
              Justlife <strong>PCR test home</strong> service employs DHA-licensed technicians who are highly trained and equipped with all the necessary Personal Protective Equipment (PPE). Our technicians strictly follow the guidelines from healthcare authorities to ensure safety, health, and hygiene are upheld to the highest standards. With Justlife PCR Test at Home, individuals can rest assured that they are being tested by qualified and experienced professionals.
            </p>

            <h3 className="text-xl font-bold mt-8 text-[#4A4A4A]">
              Comfortable and Hassle-Free
            </h3>
            <p className="mb-8 text-lg text-[#4A4A4A]">
              The testing process can be uncomfortable and unpleasant for many individuals. However, Justlife PCR Test at Home uses a 3 mm flocked nasal swab that is gentle and sufficient in collecting enough genetic material for testing. The use of this technology ensures a comfortable and pleasant experience for the individual being tested. Furthermore, the hassle-free process allows individuals to test themselves quickly and easily without having to leave their homes.
            </p>

            <h3 className="text-xl font-bold mt-8 text-[#4A4A4A]">
              Safety Guaranteed
            </h3>
            <p className="mb-8 text-lg text-[#4A4A4A]">
              Justlife PCR Test at Home is committed to ensuring the safety of our clients. Our technicians strictly follow the guidelines from healthcare authorities to ensure that all safety protocols are adhered to. Justlife PCR Test at Home provides individuals with a safe and hygienic testing option that reduces their risk of exposure to the virus.
            </p>

            <h3 className="text-xl font-bold mt-8 text-[#4A4A4A]">
              Same-Day Availability
            </h3>
            <p className="mb-8 text-lg text-[#4A4A4A]">
              At Justlife PCR Test at Home, we understand that time is of the essence when it comes to testing for COVID-19. Our team is available for home testing in only 60 minutes. This is a <strong>fast pcr test</strong> service which will take less than 10 minutes. This quick and efficient service allows individuals to receive their results in a timely manner, enabling them to take necessary precautions if they test positive for the virus.
            </p>

            <h3 className="text-xl font-bold mt-8 text-[#4A4A4A]">Results</h3>
            <p className="text-lg text-[#4A4A4A] mb-8">
              Justlife PCR Test at Home guarantees that results will be shared with clients within 5 hours to 24 hours after the test is completed. We offer 5 hour, 7 hour, 12 hour and 24 hour pcr test service. Individuals should monitor their inbox and spam for the report. The results provided are accurate and reliable, allowing individuals to make informed decisions about their health and the health of those around them.
            </p>

            <h3 className="text-xl font-bold text-[#4A4A4A]">
              Results Validated for Traveling (PCR Test for Travel)
            </h3>
            <p className="mb-8 text-lg text-[#4A4A4A]">
              The testing process can be uncomfortable and unpleasant for many individuals. However, Justlife PCR Test at Home uses a 3 mm flocked nasal swab that is gentle and sufficient in collecting enough genetic material for testing. The use of this technology ensures a comfortable and pleasant experience for the individual being tested. Furthermore, the hassle-free process allows individuals to test themselves quickly and easily without having to leave their homes.
            </p>
          </div>



          {/* FAQs */}

          <h3 className="text-2xl font-bold mb-6 text-[#4A4A4A]">FAQs</h3>

          <div className="text-lg font-normal not-italic leading-[1.33] text-[#4A4A4A] space-y-5">
            <div>
              <h3 className="text-xl font-bold mb-2 text-[#4A4A4A]">How is a Covid-19 test done?</h3>
              <p className="text-lg text-[#4A4A4A]">
                A: A swab sample is taken from the nose & throat. Your sample is then submitted to a certified lab for examination. Your test results can be shared as early as 5 hours, depending on the chosen service and location.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2 text-[#4A4A4A]">Is a Covid-19 test painful?</h3>
              <p className="text-lg text-[#4A4A4A]">
                A: Covid-19 tests can be uncomfortable but are not painful. Swab tests are done thoroughly yet gently using a cotton swab to penetrate the nose or throat; this can lead to slight discomfort & a gagging or coughing sensation.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2 text-[#4A4A4A]">What is a Covid-19 PCR test?</h3>
              <p className="text-lg text-[#4A4A4A]">
                A: A Covid-19 PCR test is used to detect the presence of infection with SARS-CoV2 (the coronavirus that causes COVID-19 disease). This very sensitive test looks for the RNA of the virus using a technique called RT-PCR. The test can detect as little as one virus particle in swabs taken from inside the mouth or nose & is recognized as the most reliable test for Covid-19.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2 text-[#4A4A4A]">Can I have a Covid-19 test at home?</h3>
              <p className="text-lg text-[#4A4A4A]">
                A: Yes, we can visit your home, hotel, or office to conduct a Covid-19 swab test. Our qualified nurses will come to your location, fully equipped with protective gear, to take your test swab at your convenient time. Your sample is then submitted to a certified lab for examination. Your test results will be shared with you within 5, 7, 12, or 24 hours depending upon the chosen service and location.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2 text-[#4A4A4A]">Which test is better: A Covid-19 antibody test or a Covid-19 PCR test?</h3>
              <p className="text-lg text-[#4A4A4A]">
                A: A Covid-19 PCR test will detect whether you currently have Covid-19. A Covid-19 antibody test will see whether you have had Covid-19 in the past & have recovered from it by checking the Covid-19 antibody level in your body.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2 text-[#4A4A4A]">What should I do if I test positive for Covid-19?</h3>
              <p className="text-lg text-[#4A4A4A]">
                A: If you test positive for Covid-19, you must self-isolate for 14 days. You may wish to consult with a doctor from the comfort of your home.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2 text-[#4A4A4A]">Do I need to take a Covid-19 test before flying out of Dubai?</h3>
              <p className="text-lg text-[#4A4A4A]">
                A: Please check the regulations of your arrival destination before travel since the travel requirement varies from country to country.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2 text-[#4A4A4A]">Will there be a delay in reports?</h3>
              <p className="text-lg text-[#4A4A4A]">
                A: If the client is presumptive positive or the viral load is inconclusive in the first run, the lab must rerun the sample, which may delay the delivery of the reports. Justlife will not be accountable for any reimbursement in such situations. Reruns may require an additional 2 to 24 hours to complete. This procedure must be followed to ensure that the reports are accurate. The lab cannot provide false positive, false negative, or presumptive positive reports; instead, they must rerun the sample.
              </p>
            </div>
          </div>



          {/* Terms & Conditions */}
          <div className="mt-10 text-lg font-normal not-italic leading-[1.33] text-[#4A4A4A]">
            <h3 className="text-2xl font-bold mb-6 text-[#4A4A4A]">Terms and Conditions:</h3>

            <p className="mb-4 text-lg text-[#4A4A4A]">
              Justlife is a third party that provides a platform where the customer and the service provider can be linked together. Justlife shall not be responsible or liable for any loss or damage (direct, indirect, special, consequential, or incidental) of any sort whatsoever incurred as the result of any transaction.
            </p>

            <h1 className="text-2xl font-bold mt-6 mb-2 text-[#4A4A4A]">
              Travel Destination Requirements:
            </h1>
            <p className="mb-5 text-lg text-[#4A4A4A]">
              Justlife will not be liable for any compensation owing to the service user's misinformation regarding travel destination needs. Kindly check the entry requirements of the destination you are traveling to on the onward carrier's website before booking an appointment.
            </p>

            <h1 className="text-2xl font-bold mt-6 mb-2 text-[#4A4A4A]">
              Compensations / Liability :
            </h1>
            <p className="mb-5 text-lg text-[#4A4A4A]">
              Justlife's maximum total liability is limited to the total amount of service fees paid by the Service User.
            </p>

            <h1 className="text-2xl font-bold mt-6 mb-2 text-[#4A4A4A]">
              Refund Policy Limitations:
            </h1>
            <p className="mb-3 text-lg text-[#4A4A4A]">
              The Justlife Refund Policy does not cover the following conditions:
            </p>

            <ul className="list-disc pl-6 leading-tight text-lg text-[#4A4A4A]">
              <li>Refunds, discounts, or price modifications cannot be applied post receiving the PCR test.</li>
              <li>Prices are non-negotiable and subject to change by the company's management.</li>
              <li>
                If the PCR results are not received within the agreed-upon time frame due to unforeseen circumstances, we will work with you and the Service Provider to examine the situation and resolve it to the best of our ability, or we will provide a partial refund. Circumstances include but are not limited to:
              </li>
              <li>
                Justlife does not cover unforeseen circumstances related to delays in Hasana or Al Hosn application status. Disclaimer: If the Al-Hosn is not up to date, the user can contact Al Hosn by phone at 800 HOSN (4676) or email at mailto:info@alhosnapp.ae
              </li>
              <li>
                Justlife will only be obliged to return the agreed amount to a UAE account in case of a refund; Justlife will not be able to refund the compensation to an international account.
              </li>
              <li>
                For a potential flight loss/missed, Justlife will not be liable for the expenses endured.
              </li>
              <li>
                All refund requests or queries related to the booking must be made within 48 hours of the booking.
              </li>
            </ul>

          </div>
          {/* cancelation policy */}
          <div className="mt-10 text-lg font-normal not-italic leading-[1.33] text-[#4A4A4A]">
            <h3 className="text-2xl font-bold mb-6 text-[#4A4A4A]">Cancellation Policy:</h3>
            <ul className="list-disc pl-6 space-y-3 mt-4 text-lg text-[#4A4A4A]">
              <li>The Service User can cancel the appointment for free within 10 minutes of making it and/or up to 12 hours before the scheduled start time.</li>
              <li>The Service User acknowledges that the following cancellation reasons are not attributable to Justlife. Such as but not limited to: <br />
                1.Providing incorrect information, i.e., incorrect name, phone number, and\or address. <br />
                2.Being unresponsive, not reachable, or unavailable to fulfill the services offered to you.
              </li>
              <p className="text-lg text-[#4A4A4A]">Such cases will be treated as No Show, and late cancellation charges, as outlined below, will be applied.</p>
              <li>
                12+ hours before the appointment - Free of charge
              </li>
              <li>
                12 to 2 hours before the appointment - 25% of the appointment value.
              </li>
              <li>
                Less than 2 hours before the appointment - 50% of the appointment value.
              </li>
              <li>
                On-the-spot cancellation - 100% of the appointment value.

              </li>
            </ul>
          </div>

          {/* Reshedule policy */}

             {/* cancelation policy */}
          <div className="mt-10 text-lg font-normal not-italic leading-[1.33] text-[#4A4A4A]">
            <h3 className="text-2xl font-bold mb-6 text-[#4A4A4A]">Reschedule Policy:</h3>
            <p className="mt-5 text-lg text-[#4A4A4A]">In the case of any last-minute booking modifications, the Reschedule Policy is meant to safeguard both the Service User and the Service Provider. We understand that plans sometimes change. Therefore, we've created a rescheduling option for Service Users and Service Providers.</p>
            <ul className="list-disc pl-6 mt-4 text-lg text-[#4A4A4A]">
             
              <p className="mx-[-25px] text-lg text-[#4A4A4A]">The rescheduling fee applies as our nurse's schedule is pre-arranged. Kindly see the below table for your reference</p>
              <li className="mt-8">
                12+ hours before the appointment - Free of charge
              </li>
              <li>
                12 to 2 hours before the appointment - 25% of the appointment value.
              </li>
              <li>
                Less than 2 hours before the appointment - 50% of the appointment value.
              </li>
              <li>
                On-the-spot cancellation - 100% of the appointment value.

              </li>
            </ul>
            <p className="mt-8 text-lg text-[#4A4A4A]">For more information about other services we provide, kindly visit: 
               <Link href="" className="text-[#485fc7]"> Lab Test at Home </Link> and <Link href="" className="text-[#485fc7]">IV Therapy at Home </Link>.</p>
          </div>
        </div>
      </div>
      <Scrollimg/>
    </>
  );
}

export default PCRTestPage;