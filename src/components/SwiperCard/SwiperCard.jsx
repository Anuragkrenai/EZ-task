import React from "react";
import "./SwiperCard.css";
const SwiperCard = () => {
  return (
    <div className="sectionCard border-1 border-[#b3b0b0] flex flex-col rounded-xl relative w-[510px] h-[490px] ">
      <div className="iconContainer h-60px absolute top-[6%] right-[6%]">
        <img src="#" alt="" className="h-full w-full" />H
      </div>
      <h2 className="text-white  my-5 w-full text-[1.4rem] font-[400] relative text-center  after:content-[''] after:w-[38%]  after:block  after:absolute after:bottom-[-12px] after:left-1/2 after:-translate-x-1/2 after:border-b-3 after:border-[#757575]">
        Animation Videos
      </h2>

      <div className="boxContainer  px-8 py-10 h-full flex justify-center items-center flex-wrap gapp-8 ">
        <div className="small-box flex flex-col items-center gap-2 w-[100px]  mx-3">
          <div className=" h-[60px] w-[60px] bg-[#d8d8d8] rounded-lg p-2">
            <span>CM</span>
          </div>
          <span className="text-white font-[500] leading-[19px] text-center">
            Spreadsheet Engeenering
          </span>
        </div>

        <div className="small-box flex flex-col items-center gap-2 w-[100px]  mx-3">
          <div className=" h-[60px] w-[60px] bg-[#d8d8d8] rounded-lg p-2">
            <span>CM</span>
          </div>
          <span className="text-white font-[500] leading-[19px] text-center">
            Spreadsheet Engeenering
          </span>
        </div>

        <div className="small-box flex flex-col items-center gap-2 w-[100px]  mx-3">
          <div className=" h-[60px] w-[60px] bg-[#d8d8d8] rounded-lg p-2">
            <span>CM</span>
          </div>
          <span className="text-white font-[500] leading-[19px] text-center">
            Spreadsheet Engeenering
          </span>
        </div>

        <div className="small-box flex flex-col items-center gap-2 w-[100px]  mx-3">
          <div className=" h-[60px] w-[60px] bg-[#d8d8d8] rounded-lg p-2">
            <span>CM</span>
          </div>
          <span className="text-white font-[500] leading-[19px] text-center">
            Spreadsheet Engeenering
          </span>
        </div>

        <div className="small-box flex flex-col items-center gap-2 w-[100px]  mx-3">
          <div className=" h-[60px] w-[60px] bg-[#d8d8d8] rounded-lg p-2">
            <span>CM</span>
          </div>
          <span className="text-white font-[500] leading-[19px] text-center">
            Spreadsheet Engeenering
          </span>
        </div>

        <div className="small-box flex flex-col items-center gap-2 w-[100px] mx-3">
          <div className=" h-[60px] w-[60px] bg-[#d8d8d8] rounded-lg p-2">
            <span>CM</span>
          </div>
          <span className="text-white font-[500] leading-[19px] text-center">
            Spreadsheet Engeenering
          </span>
        </div>
      </div>
    </div>
  );
};

export default SwiperCard;
