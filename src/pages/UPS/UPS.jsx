import React from "react";
import { Link } from "react-router-dom";
import "./UPS.css";
const UPS = () => {
  return (
    <div className=" bg-white">
      <div className="ups-container flex flex-col gap-15 bg-[#eceef0] py-27 pb-33">
        <h1 className="text-2xl font-[600] text-[#112949] text-center lg:text-5xl">
          What makes us so special?
        </h1>
        <div className="flex w-full flex-col-reverse  items-center gap-22 xl:flex-row xl:gap-0 ">
          <div className="leftSide  flex flex-col gap-7 md:px-6 xl:w-1/2">
            <h1 className="text-[25px] font-[600] text-[#112949] text-center md:text-[31px]">
              The 10-20-30 Rule at EZ
            </h1>

            <div className="flex w-max m-auto gap-5 justify-center align-center xl:gap-10">
              <dir className=" flex items-center gap-1 flex-col py-12">
                <div className="dot h-[16px] w-[16px] rounded-full bg-[#112949] shrink-0"></div>
                <div className="verticleLine bg-[#68788d] w-[5px] rounded-t-md rounded-b-md h-full"></div>
                <div className="dot h-[16px] w-[16px] rounded-full bg-[#112949] shrink-0"></div>
                <div className="verticleLine bg-[#68788d] w-[5px] rounded-t-md rounded-b-md h-full"></div>
                <div className="dot h-[16px] w-[16px] rounded-full bg-[#112949] shrink-0"></div>
              </dir>

              <div className=" flex flex-col grow-1 gap-15 md:gap-19 ">
                <div className="flex items-center  justify-between gap-3  w-full xl:gap-12">
                  <h1 className="text-[#112949] flex items-end text-xl md:text-2xl">
                    <span className="text-5xl font-[700] md:text-7xl">10</span>
                    Minutes
                  </h1>

                  <div className="bg-[#d1d4da] h-[80px] w-[180px] flex items-center text-center justify-center  py-6  rounded-lg text-[18px] text-[#112949] md:py-9 md:text-[23px] md:w-[290px] md:h-max">
                    Acknowledge Request
                  </div>
                </div>

                <div className="flex items-center justify-between gap-3  w-full xl:gap-12">
                  <h1 className="text-[#112949] flex items-end text-xl md:text-2xl">
                    <span className="text-5xl font-[700] md:text-7xl">20</span>
                    Minutes
                  </h1>

                  <div className="bg-[#d1d4da] h-[80px] w-[180px] flex items-center text-center justify-center  py-6  rounded-lg text-[18px] text-[#112949] md:py-9 md:text-[23px] md:w-[290px] md:h-max">
                    Allocate Experts
                  </div>
                </div>

                <div className="flex items-center justify-between gap-3  w-full xl:gap-12">
                  <h1 className="text-[#112949] flex items-end text-xl md:text-2xl">
                    <span className="text-5xl font-[700] md:text-7xl">30</span>
                    Minutes
                  </h1>

                  <div className="bg-[#d1d4da] h-[80px] w-[180px] flex items-center text-center justify-center  py-6  rounded-lg text-[18px] text-[#112949] md:py-9 md:text-[23px] md:w-[290px] md:h-max">
                    Begin Assignment
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="rightSide pl-3 pr-3 w-full flex items-center  justify-center gap-15 flex-col xl:pl-15  xl:w-1/2 xl:gap-12">
            <div className="flex items-center justify-center flex-col gap-15 xl:flex-row w-full md:flex-row xl:gap-12">
              <Link
                to="https://www.ez.works/ez/consistently-high-quality"
                className="card h-[230px] relative w-full perspective-[1000px]  cursor-pointer sm:w-[350px] sm:h-[240px] md:w-[255px] md:h-[230px] "
              >
                <div className="relative h-full z-[10] rounded-xl w-full duration-600 [transform-style:preserve-3d] group hover:[transform:rotateY(180deg)] shadoww">
                  <div className="frontSide  absolute cursor-pointer w-full h-full flex items-end p-4 py-8  text-center rounded-xl bg-gradient-to-br from-[#112949] to-[#03080f] [backface-visibility:hidden]">
                    <div className="stars flex items-center justify-center absolute top-3 left-5 ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="65.418"
                        height="56"
                        viewBox="0 0 65.418 56"
                      >
                        <defs>
                          <style>
                            {`.cls-1 {
        fill: #3d3d3d;
        opacity: 0;
      }
      .cls-2 {
        fill: #fff;
      }`}
                          </style>
                        </defs>
                        <g
                          id="Group_3028"
                          data-name="Group 3028"
                          transform="translate(16527.543 -7661)"
                        >
                          <rect
                            id="Rectangle_4106"
                            data-name="Rectangle 4106"
                            class="cls-1"
                            width="56"
                            height="56"
                            transform="translate(-16523 7661)"
                          />
                          <g
                            id="Group_3018"
                            data-name="Group 3018"
                            transform="translate(-16992.479 948.981)"
                          >
                            <path
                              id="Icon_awesome-star"
                              data-name="Icon awesome-star"
                              class="cls-2"
                              d="M10.043.641,7.691,5.41l-5.262.767a1.153,1.153,0,0,0-.638,1.967L5.6,11.853l-.9,5.241a1.152,1.152,0,0,0,1.671,1.214l4.708-2.474,4.708,2.474a1.153,1.153,0,0,0,1.671-1.214l-.9-5.241,3.807-3.71a1.153,1.153,0,0,0-.638-1.967L14.462,5.41,12.11.641A1.154,1.154,0,0,0,10.043.641Z"
                              transform="translate(463.493 6721.992)"
                            />
                            <path
                              id="Icon_awesome-star-2"
                              data-name="Icon awesome-star"
                              class="cls-2"
                              d="M10.043.641,7.691,5.41l-5.262.767a1.153,1.153,0,0,0-.638,1.967L5.6,11.853l-.9,5.241a1.152,1.152,0,0,0,1.671,1.214l4.708-2.474,4.708,2.474a1.153,1.153,0,0,0,1.671-1.214l-.9-5.241,3.807-3.71a1.153,1.153,0,0,0-.638-1.967L14.462,5.41,12.11.641A1.154,1.154,0,0,0,10.043.641Z"
                              transform="translate(486.568 6721.992)"
                            />
                            <path
                              id="Icon_awesome-star-3"
                              data-name="Icon awesome-star"
                              class="cls-2"
                              d="M10.043.641,7.691,5.41l-5.262.767a1.153,1.153,0,0,0-.638,1.967L5.6,11.853l-.9,5.241a1.152,1.152,0,0,0,1.671,1.214l4.708-2.474,4.708,2.474a1.153,1.153,0,0,0,1.671-1.214l-.9-5.241,3.807-3.71a1.153,1.153,0,0,0-.638-1.967L14.462,5.41,12.11.641A1.154,1.154,0,0,0,10.043.641Z"
                              transform="translate(509.643 6721.992)"
                            />
                            <path
                              id="Icon_awesome-star-4"
                              data-name="Icon awesome-star"
                              class="cls-2"
                              d="M10.043.641,7.691,5.41l-5.262.767a1.153,1.153,0,0,0-.638,1.967L5.6,11.853l-.9,5.241a1.152,1.152,0,0,0,1.671,1.214l4.708-2.474,4.708,2.474a1.153,1.153,0,0,0,1.671-1.214l-.9-5.241,3.807-3.71a1.153,1.153,0,0,0-.638-1.967L14.462,5.41,12.11.641A1.154,1.154,0,0,0,10.043.641Z"
                              transform="translate(475.031 6739.763)"
                            />
                            <path
                              id="Icon_awesome-star-5"
                              data-name="Icon awesome-star"
                              class="cls-2"
                              d="M10.043.641,7.691,5.41l-5.262.767a1.153,1.153,0,0,0-.638,1.967L5.6,11.853l-.9,5.241a1.152,1.152,0,0,0,1.671,1.214l4.708-2.474,4.708,2.474a1.153,1.153,0,0,0,1.671-1.214l-.9-5.241,3.807-3.71a1.153,1.153,0,0,0-.638-1.967L14.462,5.41,12.11.641A1.154,1.154,0,0,0,10.043.641Z"
                              transform="translate(498.105 6739.763)"
                            />
                          </g>
                        </g>
                      </svg>
                    </div>

                    <div className="uparrow  flex items-center justify-center absolute top-4 right-4 h-8">
                      <svg
                        stroke="white"
                        fill="white"
                        stroke-width="0"
                        viewBox="0 0 256 256"
                        height="100%"
                        width="100%"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M168,96v48a8,8,0,0,1-16,0V115.31l-50.34,50.35a8,8,0,0,1-11.32-11.32L140.69,104H112a8,8,0,0,1,0-16h48A8,8,0,0,1,168,96Zm64,32A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"></path>
                      </svg>
                    </div>

                    <h1 className="text-white text-2xl px-4 leading-[28px] text-center">
                      Consistently High Quality
                    </h1>
                  </div>

                  <div className="backSide absolute p-3 px-4 cursor-pointer w-full h-full flex flex-col  rounded-xl bg-gradient-to-br from-[#112949] to-[#03080f] [backface-visibility:hidden] [transform:rotateY(180deg)]">
                    <h1 className="text-white text-2xl">
                      Consistently High Quality
                    </h1>
                    <p className="text-[#bebebe] text-lg mt-2 leading-[20px] line-clamp-5">
                      Technology has brought us to the threshold of a variety of
                      high-quality services. However, as a team of
                      ex-consultants from top consulting firms, we are confident
                      that we can deliver the best service to you.
                    </p>
                    <span className="text-white underline text-lg mt-1 ">
                      Read More
                    </span>
                  </div>
                </div>

                <div className="stars w-[100px] z-[-5] left-[50%] top-[-24%]  flex items-center justify-center absolute translate-x-[-50%] xl:w-[140px]  xl:top-[-32%]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    viewBox="0 0 65.418 56"
                  >
                    <defs>
                      <style>
                        {`.cls-1 {
        fill: #3d3d3d;
        opacity: 0;
      }
      .cls-2 {
        fill: #fff;
      }`}
                      </style>
                    </defs>
                    <g
                      id="Group_3028"
                      data-name="Group 3028"
                      transform="translate(16527.543 -7661)"
                    >
                      <rect
                        id="Rectangle_4106"
                        data-name="Rectangle 4106"
                        class="cls-1"
                        width="56"
                        height="56"
                        transform="translate(-16523 7661)"
                      />
                      <g
                        id="Group_3018"
                        data-name="Group 3018"
                        transform="translate(-16992.479 948.981)"
                      >
                        <path
                          id="Icon_awesome-star"
                          data-name="Icon awesome-star"
                          class="cls-2"
                          d="M10.043.641,7.691,5.41l-5.262.767a1.153,1.153,0,0,0-.638,1.967L5.6,11.853l-.9,5.241a1.152,1.152,0,0,0,1.671,1.214l4.708-2.474,4.708,2.474a1.153,1.153,0,0,0,1.671-1.214l-.9-5.241,3.807-3.71a1.153,1.153,0,0,0-.638-1.967L14.462,5.41,12.11.641A1.154,1.154,0,0,0,10.043.641Z"
                          transform="translate(463.493 6721.992)"
                        />
                        <path
                          id="Icon_awesome-star-2"
                          data-name="Icon awesome-star"
                          class="cls-2"
                          d="M10.043.641,7.691,5.41l-5.262.767a1.153,1.153,0,0,0-.638,1.967L5.6,11.853l-.9,5.241a1.152,1.152,0,0,0,1.671,1.214l4.708-2.474,4.708,2.474a1.153,1.153,0,0,0,1.671-1.214l-.9-5.241,3.807-3.71a1.153,1.153,0,0,0-.638-1.967L14.462,5.41,12.11.641A1.154,1.154,0,0,0,10.043.641Z"
                          transform="translate(486.568 6721.992)"
                        />
                        <path
                          id="Icon_awesome-star-3"
                          data-name="Icon awesome-star"
                          class="cls-2"
                          d="M10.043.641,7.691,5.41l-5.262.767a1.153,1.153,0,0,0-.638,1.967L5.6,11.853l-.9,5.241a1.152,1.152,0,0,0,1.671,1.214l4.708-2.474,4.708,2.474a1.153,1.153,0,0,0,1.671-1.214l-.9-5.241,3.807-3.71a1.153,1.153,0,0,0-.638-1.967L14.462,5.41,12.11.641A1.154,1.154,0,0,0,10.043.641Z"
                          transform="translate(509.643 6721.992)"
                        />
                        <path
                          id="Icon_awesome-star-4"
                          data-name="Icon awesome-star"
                          class="cls-2"
                          d="M10.043.641,7.691,5.41l-5.262.767a1.153,1.153,0,0,0-.638,1.967L5.6,11.853l-.9,5.241a1.152,1.152,0,0,0,1.671,1.214l4.708-2.474,4.708,2.474a1.153,1.153,0,0,0,1.671-1.214l-.9-5.241,3.807-3.71a1.153,1.153,0,0,0-.638-1.967L14.462,5.41,12.11.641A1.154,1.154,0,0,0,10.043.641Z"
                          transform="translate(475.031 6739.763)"
                        />
                        <path
                          id="Icon_awesome-star-5"
                          data-name="Icon awesome-star"
                          class="cls-2"
                          d="M10.043.641,7.691,5.41l-5.262.767a1.153,1.153,0,0,0-.638,1.967L5.6,11.853l-.9,5.241a1.152,1.152,0,0,0,1.671,1.214l4.708-2.474,4.708,2.474a1.153,1.153,0,0,0,1.671-1.214l-.9-5.241,3.807-3.71a1.153,1.153,0,0,0-.638-1.967L14.462,5.41,12.11.641A1.154,1.154,0,0,0,10.043.641Z"
                          transform="translate(498.105 6739.763)"
                        />
                      </g>
                    </g>
                  </svg>
                </div>
              </Link>

              <Link
                to="https://www.ez.works/ez/round-the-clock-availability"
                className="card h-[230px] relative w-full perspective-[1000px]  cursor-pointer sm:w-[350px] sm:h-[240px] md:w-[255px] md:h-[230px]"
              >
                <div className="relative h-full z-[10] rounded-xl w-full duration-600 [transform-style:preserve-3d] group hover:[transform:rotateY(180deg)] shadoww">
                  <div className="frontSide  absolute cursor-pointer w-full h-full flex items-end p-4 py-8  text-center rounded-xl bg-gradient-to-br from-[#112949] to-[#03080f] [backface-visibility:hidden]">
                    <div className="stars flex items-center justify-center absolute top-3 left-5 ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="56"
                        height="56"
                        viewBox="0 0 56 56"
                      >
                        <defs>
                          <style>
                            {`.cls-1 {
        fill: #3d3d3d;
        opacity: 0;
      }
      .cls-2 {
        fill: #fff;
        fill-rule: evenodd;
      }`}
                          </style>
                        </defs>
                        <g
                          id="Group_3027"
                          data-name="Group 3027"
                          transform="translate(16405.844 -7661)"
                        >
                          <rect
                            id="Rectangle_4105"
                            data-name="Rectangle 4105"
                            class="cls-1"
                            width="56"
                            height="56"
                            transform="translate(-16405.844 7661)"
                          />
                          <g
                            id="Group_3019"
                            data-name="Group 3019"
                            transform="translate(-20370.465 -7109.242)"
                          >
                            <path
                              id="Path_2699"
                              data-name="Path 2699"
                              class="cls-2"
                              d="M250.587,503.621h7.96v5.332h-7.96Z"
                              transform="translate(3738.064 14273.693)"
                            />
                            <path
                              id="Path_2700"
                              data-name="Path 2700"
                              class="cls-2"
                              d="M249.707,502.322h13.275V506.3H249.707Z"
                              transform="translate(3736.242 14270.999)"
                            />
                            <path
                              id="Path_2701"
                              data-name="Path 2701"
                              class="cls-2"
                              d="M260.047,525.835l-1.984,1.984-6.621-6.621V509.245h2.629v10.614Z"
                              transform="translate(3739.706 14284.198)"
                            />
                            <path
                              id="Path_2702"
                              data-name="Path 2702"
                              class="cls-2"
                              d="M264.619,506.211a19.025,19.025,0,1,0,19.22,19.024A19.107,19.107,0,0,0,264.619,506.211Zm0,34.243A15.22,15.22,0,1,1,280,525.235,15.278,15.278,0,0,1,264.619,540.454Z"
                              transform="translate(3728 14279.063)"
                            />
                            <path
                              id="Path_2703"
                              data-name="Path 2703"
                              class="cls-2"
                              d="M254,509.017l-4.786,2.753-2.654-4.637,4.762-2.753Z"
                              transform="translate(3730.408 14275.265)"
                            />
                            <path
                              id="Path_2704"
                              data-name="Path 2704"
                              class="cls-2"
                              d="M259.511,511.77l-4.737-2.753,2.629-4.637,4.761,2.753Z"
                              transform="translate(3746.053 14275.265)"
                            />
                          </g>
                        </g>
                      </svg>
                    </div>

                    <div className="uparrow  flex items-center justify-center absolute top-4 right-4 h-8">
                      <svg
                        stroke="white"
                        fill="white"
                        stroke-width="0"
                        viewBox="0 0 256 256"
                        height="100%"
                        width="100%"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M168,96v48a8,8,0,0,1-16,0V115.31l-50.34,50.35a8,8,0,0,1-11.32-11.32L140.69,104H112a8,8,0,0,1,0-16h48A8,8,0,0,1,168,96Zm64,32A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"></path>
                      </svg>
                    </div>

                    <h1 className="text-white text-2xl px-4 leading-[28px] text-center">
                      Round The Clock Availability
                    </h1>
                  </div>

                  <div className="backSide absolute p-3 px-4 cursor-pointer w-full h-full flex flex-col  rounded-xl bg-gradient-to-br from-[#112949] to-[#03080f] [backface-visibility:hidden] [transform:rotateY(180deg)]">
                    <h1 className="text-white text-2xl">
                      Round The Clock Availability
                    </h1>
                    <p className="text-[#bebebe] text-lg mt-2 leading-[20px] line-clamp-5">
                      Oftentimes our new clients ask us how it is that our
                      service experts are always available, no matter the time
                      of day, day of the time technology
                    </p>
                    <span className="text-white underline text-lg mt-1 ">
                      Read More
                    </span>
                  </div>
                </div>

                <div className="stars w-[100px] z-[-5] left-[50%] top-[-24%]  flex items-center justify-center absolute translate-x-[-50%] xl:w-[140px]  xl:top-[-32%]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    viewBox="0 0 56 56"
                  >
                    <defs>
                      <style>
                        {`.cls-1 {
        fill: #3d3d3d;
        opacity: 0;
      }
      .cls-2 {
        fill: #fff;
        fill-rule: evenodd;
      }`}
                      </style>
                    </defs>
                    <g
                      id="Group_3027"
                      data-name="Group 3027"
                      transform="translate(16405.844 -7661)"
                    >
                      <rect
                        id="Rectangle_4105"
                        data-name="Rectangle 4105"
                        class="cls-1"
                        width="56"
                        height="56"
                        transform="translate(-16405.844 7661)"
                      />
                      <g
                        id="Group_3019"
                        data-name="Group 3019"
                        transform="translate(-20370.465 -7109.242)"
                      >
                        <path
                          id="Path_2699"
                          data-name="Path 2699"
                          class="cls-2"
                          d="M250.587,503.621h7.96v5.332h-7.96Z"
                          transform="translate(3738.064 14273.693)"
                        />
                        <path
                          id="Path_2700"
                          data-name="Path 2700"
                          class="cls-2"
                          d="M249.707,502.322h13.275V506.3H249.707Z"
                          transform="translate(3736.242 14270.999)"
                        />
                        <path
                          id="Path_2701"
                          data-name="Path 2701"
                          class="cls-2"
                          d="M260.047,525.835l-1.984,1.984-6.621-6.621V509.245h2.629v10.614Z"
                          transform="translate(3739.706 14284.198)"
                        />
                        <path
                          id="Path_2702"
                          data-name="Path 2702"
                          class="cls-2"
                          d="M264.619,506.211a19.025,19.025,0,1,0,19.22,19.024A19.107,19.107,0,0,0,264.619,506.211Zm0,34.243A15.22,15.22,0,1,1,280,525.235,15.278,15.278,0,0,1,264.619,540.454Z"
                          transform="translate(3728 14279.063)"
                        />
                        <path
                          id="Path_2703"
                          data-name="Path 2703"
                          class="cls-2"
                          d="M254,509.017l-4.786,2.753-2.654-4.637,4.762-2.753Z"
                          transform="translate(3730.408 14275.265)"
                        />
                        <path
                          id="Path_2704"
                          data-name="Path 2704"
                          class="cls-2"
                          d="M259.511,511.77l-4.737-2.753,2.629-4.637,4.761,2.753Z"
                          transform="translate(3746.053 14275.265)"
                        />
                      </g>
                    </g>
                  </svg>
                </div>
              </Link>
            </div>

            <div className="flex items-center  justify-center flex-col gap-15 xl:flex-row w-full md:flex-row xl:gap-12">
              <Link
                to="https://www.ez.works/ez/faster-than-the-fastest"
                className="card h-[230px] relative w-full perspective-[1000px]  cursor-pointer sm:w-[350px] sm:h-[240px] md:w-[255px] md:h-[230px] xl:mt-10 "
              >
                <div className="relative h-full z-[10] rounded-xl w-full duration-600 [transform-style:preserve-3d] group hover:[transform:rotateY(180deg)] shadoww">
                  <div className="frontSide  absolute cursor-pointer w-full h-full flex items-end p-4 py-8  text-center rounded-xl bg-gradient-to-br from-[#112949] to-[#03080f] [backface-visibility:hidden]">
                    <div className="stars flex items-center justify-center absolute top-3 w-12 left-5 ">
                      <img
                        src="/UPS/running.png"
                        className="h-full w-full"
                        alt=""
                      />
                    </div>

                    <div className="uparrow  flex items-center justify-center absolute top-4 right-4 h-8">
                      <svg
                        stroke="white"
                        fill="white"
                        stroke-width="0"
                        viewBox="0 0 256 256"
                        height="100%"
                        width="100%"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M168,96v48a8,8,0,0,1-16,0V115.31l-50.34,50.35a8,8,0,0,1-11.32-11.32L140.69,104H112a8,8,0,0,1,0-16h48A8,8,0,0,1,168,96Zm64,32A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"></path>
                      </svg>
                    </div>

                    <h1 className="text-white text-2xl px-6 leading-[28px] text-center">
                      Faster than the Fastest
                    </h1>
                  </div>

                  <div className="backSide absolute p-3 px-4 cursor-pointer w-full h-full flex flex-col  rounded-xl bg-gradient-to-br from-[#112949] to-[#03080f] [backface-visibility:hidden] [transform:rotateY(180deg)]">
                    <h1 className="text-white text-2xl">
                      Faster than the Fastest
                    </h1>
                    <p className="text-[#bebebe] text-lg mt-2 leading-[20px] line-clamp-5">
                      Rome may not have been built in a day, but what about your
                      presentation? What about the audio-visual content you
                      promis
                    </p>
                    <span className="text-white underline text-lg mt-1 ">
                      Read More
                    </span>
                  </div>
                </div>

                <div className="stars w-[100px] z-[-5] left-[50%] top-[-24%]  flex items-center justify-center absolute translate-x-[-50%] xl:w-[140px]  xl:top-[-32%]">
                  <img
                    src="/UPS/running.png"
                    alt=""
                    className="w-fulll h-full "
                  />
                </div>
              </Link>

              <Link
                to="https://www.ez.works/ez/iso-27001-2022"
                className="card h-[230px] relative w-full perspective-[1000px]  cursor-pointer sm:w-[350px] sm:h-[240px] md:w-[255px] md:h-[230px] xl:mt-10 "
              >
                <div className="relative h-full z-[10] rounded-xl w-full duration-600 [transform-style:preserve-3d] group hover:[transform:rotateY(180deg)] shadoww">
                  <div className="frontSide  absolute cursor-pointer w-full h-full flex items-end p-4 py-8  text-center rounded-xl bg-gradient-to-br from-[#112949] to-[#03080f] [backface-visibility:hidden]">
                    <div className="stars flex items-center justify-center absolute top-3 left-5 ">
                      <svg
                        width="68"
                        height="56"
                        viewBox="0 0 68 56"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M66.9642 22.0709C66.3169 20.3493 64.9878 18.8122 63.37 17.7039C58.6998 14.6992 51.5824 14.4853 46.7702 17.2017C44.1457 18.5574 42.4208 21.2403 41.884 24.0033C40.9102 28.5426 41.1617 33.9436 44.6132 37.346C48.6379 40.9208 54.4954 41.7106 59.7041 40.2421C59.9516 40.1939 60.7359 39.9938 61.2767 39.7031L61.4291 39.6369C63.0468 38.9558 64.5896 37.8467 65.7414 36.3447C68.3998 32.4065 68.5819 26.5057 66.9642 22.0709ZM58.4838 32.2644C58.3 33.1252 57.7285 34.0171 56.8273 34.3405C55.3925 34.98 53.4516 34.8028 52.1224 34.0546C51.0076 33.2649 50.8642 31.9426 50.7207 30.6914C50.6119 28.2249 50.4361 25.613 51.1181 23.3581C51.6525 21.9615 53.1267 21.6021 54.46 21.4968C55.8601 21.4968 57.2231 21.7132 58.088 22.8574C58.6264 23.6782 58.5934 24.7522 58.6998 25.7192C58.6619 27.7569 58.8424 30.1875 58.4838 32.2644ZM15.9026 34.4859C14.7161 34.4124 13.3869 34.5177 12.2383 34.3748L12.2737 21.8153L12.3463 21.7108L15.9026 21.6756C15.9396 19.6371 15.9751 17.4508 15.8655 15.5927L2.32142 15.5543L0.0910844 15.5935C0.0556183 17.4883 0.0556183 19.7041 0.0910844 21.6381C1.31386 21.6765 2.46168 21.6381 3.64818 21.75V33.9133L3.61352 34.4132L0.0556183 34.4867C-0.0185394 36.4537 -0.0185394 38.4229 0.0556183 40.3899H15.9018L15.9026 34.4859ZM55.7859 43.0704C54.2786 45.2551 52.3739 47.3655 50.2943 49.0071C50.2185 49.119 50.0033 49.0765 49.9348 48.9736C49.0336 48.4027 48.0639 47.9356 47.1999 47.3655C48.3509 45.9714 49.4657 44.5764 50.3281 43.032H49.2101C48.317 44.3608 47.3804 45.7549 46.1955 46.9318C44.6132 46.2891 43.1769 45.7174 41.5599 45.2845L41.3802 45.1481C41.6317 44.4253 42.0976 43.7466 42.2402 43.0304H41.2706L40.3009 44.9635C38.1834 44.4988 35.8466 44.2457 33.6905 44.1044C33.5816 43.7834 33.7243 43.3179 33.5816 43.0304H32.6474C32.5733 43.4608 32.7554 43.785 32.5394 44.1419C30.3115 44.2456 28.1561 44.4988 26.0741 44.9325L25.1004 43.0304C24.7449 43.0304 24.3451 42.9618 24.0969 43.0688L24.9932 45.18L24.886 45.2845C23.2755 45.7566 21.6922 46.3188 20.1432 46.9686L20.0005 46.8951C18.9921 45.786 18.0217 44.5748 17.2301 43.3579C17.052 42.7462 16.333 43.1039 15.9372 43.032C16.7965 44.6083 17.9499 46.0016 19.0977 47.4349C18.1281 48.0091 17.1616 48.6494 16.1508 49.119C13.9529 47.4229 12.0369 45.3814 10.4754 43.072C10.0434 43.0018 9.75885 43.0336 9.32439 43.072C11.9118 47.1507 15.9372 50.7271 20.1416 52.8383C20.1416 52.8383 20.1416 52.8065 20.1803 52.8065C20.2109 52.8065 20.2826 52.8726 20.2109 52.9102C23.0514 54.306 26.0717 55.3073 29.2669 55.7385C40.2993 57.2037 50.8287 52.4479 56.9337 43.072C56.5522 43.0322 56.1676 43.0317 55.7859 43.0704ZM40.8055 46.2899L40.9111 46.218C42.4603 46.5757 43.9305 47.0772 45.2968 47.7551C44.1457 49.0757 42.6723 50.2232 41.3084 51.1886C40.483 51.6876 39.6536 52.2299 38.7903 52.6562L37.2484 51.9767L37.354 51.7292C38.6501 49.9774 39.8003 48.1863 40.8055 46.2899ZM33.7243 45.2159C35.7741 45.2551 37.8231 45.4691 39.7246 45.9322L39.7624 46.0408C38.7581 47.9707 37.4974 49.8353 36.1344 51.5847C35.5202 51.6582 34.9479 51.4107 34.3377 51.3723L33.7235 51.2988C33.6534 49.1876 33.6155 47.3271 33.7243 45.2159ZM26.7923 45.8595C28.6607 45.5018 30.6001 45.2159 32.6112 45.2159L32.6482 51.2686C31.8922 51.4418 31.066 51.4417 30.347 51.6255C28.8735 49.8679 27.6531 47.9707 26.6125 46.0016L26.7923 45.8595ZM21.004 47.7935C22.409 47.1115 23.88 46.6076 25.3873 46.2172L25.5332 46.2548C26.5722 48.2231 27.8676 50.0819 29.1605 51.9424C28.6615 52.2307 28.0473 52.403 27.5459 52.6938C25.116 51.4775 22.9049 49.8564 21.0049 47.898V47.7935H21.004ZM25.6413 53.9107C22.6226 53.1209 19.8175 51.7619 17.2309 49.9047V49.7936C18.0934 49.2619 18.9591 48.6878 19.8901 48.29C21.9399 50.3351 24.0582 51.8738 26.3578 53.3374C26.1789 53.5522 25.8919 53.7678 25.6413 53.9107ZM38.9709 54.373C35.1631 55.2011 30.9209 55.233 27.1139 54.3043C27.0414 54.1263 27.2937 54.0879 27.4009 53.9834C30.7427 51.7987 35.9506 51.7987 39.224 54.1573C39.3304 54.373 39.0434 54.3043 38.9709 54.373ZM42.4216 53.3749L40.7329 53.9099C40.4444 53.767 40.1945 53.5522 39.9406 53.3365L40.0131 53.2271C42.3136 51.873 44.3964 50.2224 46.3737 48.2549C47.3441 48.6478 48.2792 49.1876 49.144 49.7928C47.1297 51.4107 44.793 52.479 42.4216 53.3749ZM10.4053 12.8363C11.2941 11.59 12.2663 10.4071 13.3151 9.29583C14.2461 8.40153 15.1118 7.54316 16.1194 6.89632C17.0544 7.50395 18.095 8.01032 18.993 8.58039C17.8798 9.96881 16.7296 11.3703 15.9034 12.869C16.1532 12.9809 16.6224 12.9457 16.9827 12.869C17.8798 11.5475 18.8471 10.2244 20.0013 9.04265C21.5425 9.6168 23.0538 10.2228 24.6369 10.654L24.7764 10.7961L23.8816 12.869C24.2782 12.9457 24.5297 12.9082 24.9223 12.869C25.2447 12.2646 25.4946 11.5867 25.854 10.975C27.9409 11.4422 30.1334 11.6913 32.3613 11.7607C32.6466 12.0147 32.4322 12.5488 32.5402 12.869H33.5099C33.6155 12.5178 33.4736 12.1192 33.6155 11.8007C35.7016 11.6896 37.8924 11.4748 39.9116 10.9734L40.0865 11.0109L41.057 12.8673C41.381 12.8673 41.8114 12.9441 42.0629 12.7938L41.1625 10.7243L41.2375 10.6524C42.8875 10.2228 44.4351 9.57924 46.0158 8.93648C47.133 10.1166 48.172 11.5116 49.1094 12.8665C49.5027 12.8665 49.8985 12.9057 50.1863 12.793C49.7425 11.9943 49.2248 11.24 48.6403 10.5405C48.1657 9.85534 47.6362 9.21095 47.0572 8.61387V8.42848L49.5729 6.9641L49.9356 6.82118C52.1233 8.49903 54.0378 10.5141 55.6094 12.793C56.0406 12.793 56.4009 12.9433 56.7612 12.7628C51.941 5.47033 44.0015 0.778281 35.4178 0.102855L35.3799 0.172276L35.3066 0.102855C34.3377 -0.00250129 33.1472 -0.0441539 32.1066 0.0612027C31.7124 0.0301674 31.2465 0.0612027 30.7782 0.102855C22.1559 0.778281 14.2155 5.25308 9.25426 12.8706C9.61376 12.8363 10.045 12.9817 10.4053 12.8363ZM25.3196 9.69276L25.1762 9.72379C23.7011 9.33422 22.2623 8.86461 20.8968 8.2586L20.9662 8.0438C22.9426 6.1482 25.0262 4.57275 27.3259 3.35911C27.8676 3.57391 28.406 3.75113 28.9444 4.00513L28.8388 4.28445C27.471 6.00609 26.3957 7.86249 25.3196 9.69276ZM32.4677 10.6557C31.4642 10.7986 30.5654 10.6238 29.5554 10.5446C28.5898 10.4009 27.3654 10.2971 26.3957 9.97044C27.4379 8.01195 28.6615 6.11227 30.1334 4.36367L32.4338 4.68138C32.5402 6.53859 32.4677 8.68656 32.4677 10.6557ZM33.5808 10.6941C33.5099 8.79192 33.547 6.68397 33.5808 4.71568C34.3023 4.61114 35.089 4.50007 35.8096 4.39471C37.2105 6.18087 38.5792 8.01195 39.5142 9.97044C37.5713 10.4467 35.5798 10.6896 33.5808 10.6941ZM45.0469 8.18591C43.6428 8.7911 42.204 9.36444 40.6612 9.69276C39.548 7.79634 38.3269 5.90074 36.9574 4.06884C37.4612 3.7887 38.0754 3.57391 38.613 3.28887C40.953 4.46821 43.2139 6.1482 45.1162 8.07402L45.0469 8.18591ZM40.4444 2.0687C43.463 2.85765 46.3019 4.21503 48.8893 6.07551L48.8176 6.21844L46.3406 7.61176H46.1576C44.2562 5.68676 42.029 4.00513 39.7624 2.67797C39.8342 2.42724 40.1953 2.24674 40.4444 2.0687ZM39.0088 1.70934V1.78529C35.8805 4.06884 30.8153 4.28445 27.5113 2.17324C27.3259 2.03031 26.9712 1.96089 26.9325 1.71016C30.7435 0.819934 35.2324 0.748063 39.0088 1.70934ZM17.0883 6.1482C19.3541 4.46821 21.8681 3.21618 24.5281 2.357C24.6369 2.24511 24.7062 2.13975 24.8481 2.13975V2.21325C25.1351 2.28349 25.3519 1.95926 25.6026 2.1716C25.8194 2.357 26.0733 2.49829 26.2506 2.67633C24.0243 4.06884 21.8311 5.71779 19.8183 7.71712C18.8479 7.36593 17.9531 6.82608 17.0875 6.21844L17.0883 6.1482ZM32.5048 34.7652C29.1274 35.6971 25.4599 34.9865 23.0176 32.4065C22.7314 32.0488 22.55 31.6225 22.2615 31.2664L17.4123 31.3007C17.3357 34.1976 17.3019 37.5257 17.4123 40.3891L22.7999 40.354L22.8717 38.6356C23.4851 38.9215 24.0969 39.2784 24.7062 39.5993C28.4431 41.1756 33.2536 41.5333 36.9558 39.5993C39.6528 38.1007 41.0908 35.2038 40.6942 32.0847C40.3009 29.0473 37.4249 26.2909 34.5167 25.542L25.8186 22.9995L25.1754 22.6761C24.8876 22.4278 24.707 22.1077 24.7772 21.7108C25.4599 20.5331 27.043 20.8908 28.2287 20.9226C30.7435 21.2812 33.3302 22.1395 34.8044 24.4664C36.3835 24.4664 38.2156 24.4974 39.939 24.4288C40.0123 21.496 39.9107 18.9217 39.868 15.9513C38.2511 15.9137 36.2739 15.9137 34.6593 15.9888C34.5868 16.4143 34.7287 17.0204 34.5489 17.4516L32.8973 16.5565C28.9428 14.8756 23.4085 14.7001 19.8167 17.3119C17.48 19.0262 16.7634 22.1061 17.3744 24.8241C17.8395 27.3959 20.2826 29.294 22.6194 30.1858C25.817 31.3293 29.1572 32.1574 32.3968 33.2649C32.7176 33.4103 33.148 33.7345 33.0787 34.1273C33.0803 34.445 32.7546 34.6288 32.5048 34.7652Z"
                          fill="white"
                        />
                      </svg>
                    </div>

                    <div className="uparrow  flex items-center justify-center absolute top-4 right-4 h-8">
                      <svg
                        stroke="white"
                        fill="white"
                        stroke-width="0"
                        viewBox="0 0 256 256"
                        height="100%"
                        width="100%"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M168,96v48a8,8,0,0,1-16,0V115.31l-50.34,50.35a8,8,0,0,1-11.32-11.32L140.69,104H112a8,8,0,0,1,0-16h48A8,8,0,0,1,168,96Zm64,32A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"></path>
                      </svg>
                    </div>

                    <h1 className="text-white text-2xl px-4 leading-[28px] text-center">
                      Information Security
                    </h1>
                  </div>

                  <div className="backSide absolute p-3 px-4 cursor-pointer w-full h-full flex flex-col  rounded-xl bg-gradient-to-br from-[#112949] to-[#03080f] [backface-visibility:hidden] [transform:rotateY(180deg)]">
                    <h1 className="text-white text-2xl">
                      Information Security
                    </h1>
                    <p className="text-[#bebebe] text-lg mt-2 leading-[20px] line-clamp-5">
                      ISO 27001:2022 comes within the ISO 27000 family, which is
                      dedicated to the standardization of Information Security
                    </p>
                    <span className="text-white underline text-lg mt-1 ">
                      Read More
                    </span>
                  </div>
                </div>

                <div className="stars w-[100px] z-[-5] left-[50%] top-[-24%]  flex items-center justify-center absolute translate-x-[-50%] xl:w-[140px]  xl:top-[-32%]">
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 68 56"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M66.9642 22.0709C66.3169 20.3493 64.9878 18.8122 63.37 17.7039C58.6998 14.6992 51.5824 14.4853 46.7702 17.2017C44.1457 18.5574 42.4208 21.2403 41.884 24.0033C40.9102 28.5426 41.1617 33.9436 44.6132 37.346C48.6379 40.9208 54.4954 41.7106 59.7041 40.2421C59.9516 40.1939 60.7359 39.9938 61.2767 39.7031L61.4291 39.6369C63.0468 38.9558 64.5896 37.8467 65.7414 36.3447C68.3998 32.4065 68.5819 26.5057 66.9642 22.0709ZM58.4838 32.2644C58.3 33.1252 57.7285 34.0171 56.8273 34.3405C55.3925 34.98 53.4516 34.8028 52.1224 34.0546C51.0076 33.2649 50.8642 31.9426 50.7207 30.6914C50.6119 28.2249 50.4361 25.613 51.1181 23.3581C51.6525 21.9615 53.1267 21.6021 54.46 21.4968C55.8601 21.4968 57.2231 21.7132 58.088 22.8574C58.6264 23.6782 58.5934 24.7522 58.6998 25.7192C58.6619 27.7569 58.8424 30.1875 58.4838 32.2644ZM15.9026 34.4859C14.7161 34.4124 13.3869 34.5177 12.2383 34.3748L12.2737 21.8153L12.3463 21.7108L15.9026 21.6756C15.9396 19.6371 15.9751 17.4508 15.8655 15.5927L2.32142 15.5543L0.0910844 15.5935C0.0556183 17.4883 0.0556183 19.7041 0.0910844 21.6381C1.31386 21.6765 2.46168 21.6381 3.64818 21.75V33.9133L3.61352 34.4132L0.0556183 34.4867C-0.0185394 36.4537 -0.0185394 38.4229 0.0556183 40.3899H15.9018L15.9026 34.4859ZM55.7859 43.0704C54.2786 45.2551 52.3739 47.3655 50.2943 49.0071C50.2185 49.119 50.0033 49.0765 49.9348 48.9736C49.0336 48.4027 48.0639 47.9356 47.1999 47.3655C48.3509 45.9714 49.4657 44.5764 50.3281 43.032H49.2101C48.317 44.3608 47.3804 45.7549 46.1955 46.9318C44.6132 46.2891 43.1769 45.7174 41.5599 45.2845L41.3802 45.1481C41.6317 44.4253 42.0976 43.7466 42.2402 43.0304H41.2706L40.3009 44.9635C38.1834 44.4988 35.8466 44.2457 33.6905 44.1044C33.5816 43.7834 33.7243 43.3179 33.5816 43.0304H32.6474C32.5733 43.4608 32.7554 43.785 32.5394 44.1419C30.3115 44.2456 28.1561 44.4988 26.0741 44.9325L25.1004 43.0304C24.7449 43.0304 24.3451 42.9618 24.0969 43.0688L24.9932 45.18L24.886 45.2845C23.2755 45.7566 21.6922 46.3188 20.1432 46.9686L20.0005 46.8951C18.9921 45.786 18.0217 44.5748 17.2301 43.3579C17.052 42.7462 16.333 43.1039 15.9372 43.032C16.7965 44.6083 17.9499 46.0016 19.0977 47.4349C18.1281 48.0091 17.1616 48.6494 16.1508 49.119C13.9529 47.4229 12.0369 45.3814 10.4754 43.072C10.0434 43.0018 9.75885 43.0336 9.32439 43.072C11.9118 47.1507 15.9372 50.7271 20.1416 52.8383C20.1416 52.8383 20.1416 52.8065 20.1803 52.8065C20.2109 52.8065 20.2826 52.8726 20.2109 52.9102C23.0514 54.306 26.0717 55.3073 29.2669 55.7385C40.2993 57.2037 50.8287 52.4479 56.9337 43.072C56.5522 43.0322 56.1676 43.0317 55.7859 43.0704ZM40.8055 46.2899L40.9111 46.218C42.4603 46.5757 43.9305 47.0772 45.2968 47.7551C44.1457 49.0757 42.6723 50.2232 41.3084 51.1886C40.483 51.6876 39.6536 52.2299 38.7903 52.6562L37.2484 51.9767L37.354 51.7292C38.6501 49.9774 39.8003 48.1863 40.8055 46.2899ZM33.7243 45.2159C35.7741 45.2551 37.8231 45.4691 39.7246 45.9322L39.7624 46.0408C38.7581 47.9707 37.4974 49.8353 36.1344 51.5847C35.5202 51.6582 34.9479 51.4107 34.3377 51.3723L33.7235 51.2988C33.6534 49.1876 33.6155 47.3271 33.7243 45.2159ZM26.7923 45.8595C28.6607 45.5018 30.6001 45.2159 32.6112 45.2159L32.6482 51.2686C31.8922 51.4418 31.066 51.4417 30.347 51.6255C28.8735 49.8679 27.6531 47.9707 26.6125 46.0016L26.7923 45.8595ZM21.004 47.7935C22.409 47.1115 23.88 46.6076 25.3873 46.2172L25.5332 46.2548C26.5722 48.2231 27.8676 50.0819 29.1605 51.9424C28.6615 52.2307 28.0473 52.403 27.5459 52.6938C25.116 51.4775 22.9049 49.8564 21.0049 47.898V47.7935H21.004ZM25.6413 53.9107C22.6226 53.1209 19.8175 51.7619 17.2309 49.9047V49.7936C18.0934 49.2619 18.9591 48.6878 19.8901 48.29C21.9399 50.3351 24.0582 51.8738 26.3578 53.3374C26.1789 53.5522 25.8919 53.7678 25.6413 53.9107ZM38.9709 54.373C35.1631 55.2011 30.9209 55.233 27.1139 54.3043C27.0414 54.1263 27.2937 54.0879 27.4009 53.9834C30.7427 51.7987 35.9506 51.7987 39.224 54.1573C39.3304 54.373 39.0434 54.3043 38.9709 54.373ZM42.4216 53.3749L40.7329 53.9099C40.4444 53.767 40.1945 53.5522 39.9406 53.3365L40.0131 53.2271C42.3136 51.873 44.3964 50.2224 46.3737 48.2549C47.3441 48.6478 48.2792 49.1876 49.144 49.7928C47.1297 51.4107 44.793 52.479 42.4216 53.3749ZM10.4053 12.8363C11.2941 11.59 12.2663 10.4071 13.3151 9.29583C14.2461 8.40153 15.1118 7.54316 16.1194 6.89632C17.0544 7.50395 18.095 8.01032 18.993 8.58039C17.8798 9.96881 16.7296 11.3703 15.9034 12.869C16.1532 12.9809 16.6224 12.9457 16.9827 12.869C17.8798 11.5475 18.8471 10.2244 20.0013 9.04265C21.5425 9.6168 23.0538 10.2228 24.6369 10.654L24.7764 10.7961L23.8816 12.869C24.2782 12.9457 24.5297 12.9082 24.9223 12.869C25.2447 12.2646 25.4946 11.5867 25.854 10.975C27.9409 11.4422 30.1334 11.6913 32.3613 11.7607C32.6466 12.0147 32.4322 12.5488 32.5402 12.869H33.5099C33.6155 12.5178 33.4736 12.1192 33.6155 11.8007C35.7016 11.6896 37.8924 11.4748 39.9116 10.9734L40.0865 11.0109L41.057 12.8673C41.381 12.8673 41.8114 12.9441 42.0629 12.7938L41.1625 10.7243L41.2375 10.6524C42.8875 10.2228 44.4351 9.57924 46.0158 8.93648C47.133 10.1166 48.172 11.5116 49.1094 12.8665C49.5027 12.8665 49.8985 12.9057 50.1863 12.793C49.7425 11.9943 49.2248 11.24 48.6403 10.5405C48.1657 9.85534 47.6362 9.21095 47.0572 8.61387V8.42848L49.5729 6.9641L49.9356 6.82118C52.1233 8.49903 54.0378 10.5141 55.6094 12.793C56.0406 12.793 56.4009 12.9433 56.7612 12.7628C51.941 5.47033 44.0015 0.778281 35.4178 0.102855L35.3799 0.172276L35.3066 0.102855C34.3377 -0.00250129 33.1472 -0.0441539 32.1066 0.0612027C31.7124 0.0301674 31.2465 0.0612027 30.7782 0.102855C22.1559 0.778281 14.2155 5.25308 9.25426 12.8706C9.61376 12.8363 10.045 12.9817 10.4053 12.8363ZM25.3196 9.69276L25.1762 9.72379C23.7011 9.33422 22.2623 8.86461 20.8968 8.2586L20.9662 8.0438C22.9426 6.1482 25.0262 4.57275 27.3259 3.35911C27.8676 3.57391 28.406 3.75113 28.9444 4.00513L28.8388 4.28445C27.471 6.00609 26.3957 7.86249 25.3196 9.69276ZM32.4677 10.6557C31.4642 10.7986 30.5654 10.6238 29.5554 10.5446C28.5898 10.4009 27.3654 10.2971 26.3957 9.97044C27.4379 8.01195 28.6615 6.11227 30.1334 4.36367L32.4338 4.68138C32.5402 6.53859 32.4677 8.68656 32.4677 10.6557ZM33.5808 10.6941C33.5099 8.79192 33.547 6.68397 33.5808 4.71568C34.3023 4.61114 35.089 4.50007 35.8096 4.39471C37.2105 6.18087 38.5792 8.01195 39.5142 9.97044C37.5713 10.4467 35.5798 10.6896 33.5808 10.6941ZM45.0469 8.18591C43.6428 8.7911 42.204 9.36444 40.6612 9.69276C39.548 7.79634 38.3269 5.90074 36.9574 4.06884C37.4612 3.7887 38.0754 3.57391 38.613 3.28887C40.953 4.46821 43.2139 6.1482 45.1162 8.07402L45.0469 8.18591ZM40.4444 2.0687C43.463 2.85765 46.3019 4.21503 48.8893 6.07551L48.8176 6.21844L46.3406 7.61176H46.1576C44.2562 5.68676 42.029 4.00513 39.7624 2.67797C39.8342 2.42724 40.1953 2.24674 40.4444 2.0687ZM39.0088 1.70934V1.78529C35.8805 4.06884 30.8153 4.28445 27.5113 2.17324C27.3259 2.03031 26.9712 1.96089 26.9325 1.71016C30.7435 0.819934 35.2324 0.748063 39.0088 1.70934ZM17.0883 6.1482C19.3541 4.46821 21.8681 3.21618 24.5281 2.357C24.6369 2.24511 24.7062 2.13975 24.8481 2.13975V2.21325C25.1351 2.28349 25.3519 1.95926 25.6026 2.1716C25.8194 2.357 26.0733 2.49829 26.2506 2.67633C24.0243 4.06884 21.8311 5.71779 19.8183 7.71712C18.8479 7.36593 17.9531 6.82608 17.0875 6.21844L17.0883 6.1482ZM32.5048 34.7652C29.1274 35.6971 25.4599 34.9865 23.0176 32.4065C22.7314 32.0488 22.55 31.6225 22.2615 31.2664L17.4123 31.3007C17.3357 34.1976 17.3019 37.5257 17.4123 40.3891L22.7999 40.354L22.8717 38.6356C23.4851 38.9215 24.0969 39.2784 24.7062 39.5993C28.4431 41.1756 33.2536 41.5333 36.9558 39.5993C39.6528 38.1007 41.0908 35.2038 40.6942 32.0847C40.3009 29.0473 37.4249 26.2909 34.5167 25.542L25.8186 22.9995L25.1754 22.6761C24.8876 22.4278 24.707 22.1077 24.7772 21.7108C25.4599 20.5331 27.043 20.8908 28.2287 20.9226C30.7435 21.2812 33.3302 22.1395 34.8044 24.4664C36.3835 24.4664 38.2156 24.4974 39.939 24.4288C40.0123 21.496 39.9107 18.9217 39.868 15.9513C38.2511 15.9137 36.2739 15.9137 34.6593 15.9888C34.5868 16.4143 34.7287 17.0204 34.5489 17.4516L32.8973 16.5565C28.9428 14.8756 23.4085 14.7001 19.8167 17.3119C17.48 19.0262 16.7634 22.1061 17.3744 24.8241C17.8395 27.3959 20.2826 29.294 22.6194 30.1858C25.817 31.3293 29.1572 32.1574 32.3968 33.2649C32.7176 33.4103 33.148 33.7345 33.0787 34.1273C33.0803 34.445 32.7546 34.6288 32.5048 34.7652Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UPS;
