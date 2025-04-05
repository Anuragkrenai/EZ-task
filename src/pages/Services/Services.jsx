import React, { useState }  from "react";
import "./Services.css";
import SwiperCard from "../../components/SwiperCard/SwiperCard";
import Login from "../Login/Login";
const Services = () => {
    const [showLogin, setShowLogin] = useState(false);
  return (
    <div className="service-container flex flex-col items-center w-full  py-[35px]">
      <h1 className="text-white  text-center w-[90%] text-[1.4rem] leading-[27px] font-[600] xl:font-[500] xl:w-full xl:text-[1.9rem]">
        70+ Offerings that allow you to Focus on your core tasks
      </h1>
      <div className="flex justify-center items-center flex-col mt-6 text-white">
        <h1 className="text-[1.6rem] font-[500] uppercase xl:text-[1.9rem]">
          Technology & AI
        </h1>
        <p className="text-[1.1rem]  w-[85%] text-center xl:w-[40%] leading-[21px]">
          Empower your ideas to thrive with innovative solutions from our tech
          ninjas, spanning traditional development to cutting-edge AI
          applications
        </p>
      </div>

      <div className="sectionCard-container my-4 mt-6 w-full flex justify-center items-center xl:my-5 xl:mt-6">
        <SwiperCard />
      </div>

      <div className="flex justify-center items-center w-[90%] flex-col mt-6 gap-[13px] text-white xl:w-[35%]">
        <h1 className="text-[1.1rem] font-[500] text-center leading-[21px] xl:text-[1.4rem] xl:leading-[27px]">
          Send us your requirements, and get a response within 10 minutes
        </h1>
        <p className="text-[0.95rem] font-[400]  text-center leading-[21px] ">
          That's how we keep ourselves Faster than the Fastest
        </p>
      </div>

      <button onClick={() => setShowLogin(true)} className="bg-[#ea7b2c] cursor-pointer mt-3 mb-3  text-white px-4 py-3 text-[0.9rem] rounded-md active:scale-98 transition-all duration-300 hover:bg-amber-600 xl:mb-10">
        GET IN TOUCH
      </button>

      {showLogin && <Login />}
    </div>
  );
};

export default Services;
