import React from "react";
import img from "../../assets/img2.webp";
import "./AboutUs.scss";
const AboutUs = () => {
  return (
    <>
      <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12  mt-4 md:px-6 py-9 px-4">
        <p class=" mb-4 block text-3xl font-bold text-center main-color">
          About Us
        </p>
        <div className="flex lg:flex-row flex-col lg:gap-8 sm:gap-10 gap-12 remove-flex-sm">
          <div className="w-full lg:w-6/12">
            <h2 className="orange-text w-full font-bold lg:text-4xl text-3xl lg:leading-10 leading-9 ">
              At ROOM SCOUT,
              <bR></bR>we're passionate about providing affordable room rentals
              and top-notch facilities.{" "}
            </h2>
            <p className="font-normal text-base leading-6 text-gray-600 mt-6">
              We're always committed to ensuring that you can find comfortable
              and budget-friendly accommodation options. Room Scout is dedicated to
              offer the best room rental experience by providing high-quality
              rooms and exceptional facilities at affordable prices. Our aim is
              to make sure that you and your family have access to the best
              accommodation within your budget.<bR></bR>
              <bR></bR>
              Whether you're looking for short-term or long-term rentals, Room Scout
              has got you covered. We offer a wide range of room as well as flat
              options to suit your needs, and our facilities include 24/7
              security, drinking water facility and much more. Our friendly team
              is always ready to assist you in finding the perfect room and
              ensuring a comfortable stay.
            </p>
          </div>
          <div className="w-full lg:w-6/12">
            <img className="lg:block hidden w-full" src={img} alt="grocery" />
          </div>
        </div>

        <div className="flex lg:flex-row flex-col md:gap-14 gap-16 justify-between lg:mt-20 mt-16 remove-flex-sm">
          <div className="w-full lg:w-6/12">
            <h2 className="font-bold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800">
              Our Mission
            </h2>
            <p className="font-normal text-base leading-6 text-gray-600 mt-6 w-full lg:w-10/12 xl:w-9/12">
              Our mission is to provide exceptional room rentals and facilities
              that exceed your expectations. We focus on three key principles to
              ensure value and a satisfying experience for our guests:
            </p>
            <p className="font-normal text-base leading-6 text-gray-600 w-full lg:w-10/12 xl:w-9/12 mt-10">
              1. Affordable Prices: We offer competitive rental rates and
              packages, ensuring that you get the best value for your money.
              <br />
              <br />
              2. Quality Facilities: Our rooms are equipped with top-notch
              amenities, including comfortable furnishings, high-speed internet.
              <br />
              <br />
              3.Customer Satisfaction: we prioritize customer satisfaction by
              offering competitive and affordable room rental rates without
              compromising on quality or comfort.
            </p>
          </div>
          <div className="w-full lg:w-6/12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 lg:gap-12 gap-10">
              {/* <!-- Team Card --> */}
              <div className="flex p-4 shadow-md">
                <div className="mr-6">
                  <svg
                    className="mr-6"
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    fill="none"
                    xmlns={img}
                  >
                    <path
                      d="M18 15C20.4853 15 22.5 12.9853 22.5 10.5C22.5 8.01472 20.4853 6 18 6C15.5147 6 13.5 8.01472 13.5 10.5C13.5 12.9853 15.5147 15 18 15Z"
                      stroke="#1F2937"
                      strokeWidth="2.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M25.5 28.5C27.9853 28.5 30 26.4853 30 24C30 21.5147 27.9853 19.5 25.5 19.5C23.0147 19.5 21 21.5147 21 24C21 26.4853 23.0147 28.5 25.5 28.5Z"
                      stroke="#1F2937"
                      strokeWidth="2.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10.5 28.5C12.9853 28.5 15 26.4853 15 24C15 21.5147 12.9853 19.5 10.5 19.5C8.01472 19.5 6 21.5147 6 24C6 26.4853 8.01472 28.5 10.5 28.5Z"
                      stroke="#1F2937"
                      strokeWidth="2.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="">
                  <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800">
                    Team
                  </p>
                  <p className="mt-2 font-normal text-base leading-6 text-gray-600">
                    Our platform offers highly flexible and accommodating work
                    schedules, empowering you to manage your rental space on
                    your own terms.
                  </p>
                </div>
              </div>

              {/* <!-- Board Card --> */}
              <div className="flex p-4 shadow-md">
                <div className="mr-6">
                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.5 10.5C12.1569 10.5 13.5 9.15685 13.5 7.5C13.5 5.84315 12.1569 4.5 10.5 4.5C8.84315 4.5 7.5 5.84315 7.5 7.5C7.5 9.15685 8.84315 10.5 10.5 10.5Z"
                      stroke="#1F2937"
                      strokeWidth="2.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7.5 33V25.5L6 24V18C6 17.6022 6.15804 17.2206 6.43934 16.9393C6.72064 16.658 7.10218 16.5 7.5 16.5H13.5C13.8978 16.5 14.2794 16.658 14.5607 16.9393C14.842 17.2206 15 17.6022 15 18V24L13.5 25.5V33"
                      stroke="#1F2937"
                      strokeWidth="2.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M25.5 10.5C27.1569 10.5 28.5 9.15685 28.5 7.5C28.5 5.84315 27.1569 4.5 25.5 4.5C23.8431 4.5 22.5 5.84315 22.5 7.5C22.5 9.15685 23.8431 10.5 25.5 10.5Z"
                      stroke="#1F2937"
                      strokeWidth="2.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M22.5 33V27H19.5L22.5 18C22.5 17.6022 22.658 17.2206 22.9393 16.9393C23.2206 16.658 23.6022 16.5 24 16.5H27C27.3978 16.5 27.7794 16.658 28.0607 16.9393C28.342 17.2206 28.5 17.6022 28.5 18L31.5 27H28.5V33"
                      stroke="#1F2937"
                      strokeWidth="2.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="">
                  <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800">
                    Board
                  </p>
                  <p className="mt-2 font-normal text-base leading-6 text-gray-600">
                    You'll get to work in an inclusive environment and make a
                    difference in the community we serve.
                  </p>
                </div>
              </div>

              {/* <!-- Press Card --> */}
              <div className="flex p-4 shadow-md">
                <div className="mr-6">
                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M28.5 7.5H7.5C5.84315 7.5 4.5 8.84315 4.5 10.5V25.5C4.5 27.1569 5.84315 28.5 7.5 28.5H28.5C30.1569 28.5 31.5 27.1569 31.5 25.5V10.5C31.5 8.84315 30.1569 7.5 28.5 7.5Z"
                      stroke="#1F2937"
                      strokeWidth="2.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4.5 10.5L18 19.5L31.5 10.5"
                      stroke="#1F2937"
                      strokeWidth="2.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="">
                  <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800">
                    Press
                  </p>
                  <p className="mt-2 font-normal text-base leading-6 text-gray-600">
                    Our dedicated team will work tirelessly to ensure maximum
                    visibility and reach for your rental listings.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
