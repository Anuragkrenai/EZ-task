import React from "react";
import "./SwiperCard.css";
const SwiperCard = ({ services }) => {
  const service = services;
  console.log(service.icon, service.image, service.title);
  const baseUrl =
    "https://dxw9jueyijhmn.cloudfront.net/ez_website/frontend_img/iconsList/";
  const imageURL ="https://www.ez.works/HomePage/Icons/ServiceSection/capability_icons_grey/"
  return (
    <div className="sectionCard border-1 border-[#b3b0b0] flex flex-col rounded-xl relative w-[255px] h-[430px] lg:w-[510px] lg:h-[490px] ">
      <div className="iconContainer h-[28px] lg:h-[37px] absolute top-[4%] right-[3%]">
        <img
          src={`${imageURL}${service.image}`}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <h2 className="text-white  my-5 w-full text-[1rem] lg:text-[1.4rem]  font-[400] relative text-center  after:content-[''] after:w-[38%]  after:block  after:absolute after:bottom-[-12px] after:left-1/2 after:-translate-x-1/2 after:border-b-3 after:border-[#757575]">
        {service.title}
      </h2>

      <div className="boxContainer  px-8 py-10 h-full flex justify-center items-center flex-wrap gap-1 ">
        {service.icon.map((elem, index) => {
          return (
            <div key={index} className="small-box flex flex-col items-center gap-2 w-[50px] lg:w-[89px]  mx-3">
              <div className=" h-[40px] w-[40px] lg:h-[60px] lg:w-[60px] bg-[#d8d8d8] overflow-hidden rounded-lg p-2">
                <img
                  src={`${baseUrl}${elem.image}`}
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>
              <span className="text-white font-[500] leading-[19px] text-center text-[0.8rem] lg:text-[1.2rem]">
                {elem.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SwiperCard;
