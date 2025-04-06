import React, { useState, useEffect } from "react";
import "./Login.css";
import { RxCross2 } from "react-icons/rx";
import axios from "axios";

const Login = ({ setShowLogin }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    country_code: "+91",
    email: "",
    service: "",
    message: "",
    promotion: true,
  });

  const countryCode = [
    { name: "Afghanistan", code: "+93", flag: "🇦🇫" },
    { name: "Albania", code: "+355", flag: "🇦🇱" },
    { name: "Algeria", code: "+213", flag: "🇩🇿" },
    { name: "Andorra", code: "+376", flag: "🇦🇩" },
    { name: "Angola", code: "+244", flag: "🇦🇴" },
    { name: "Argentina", code: "+54", flag: "🇦🇷" },
    { name: "Armenia", code: "+374", flag: "🇦🇲" },
    { name: "Australia", code: "+61", flag: "🇦🇺" },
    { name: "Austria", code: "+43", flag: "🇦🇹" },
    { name: "Azerbaijan", code: "+994", flag: "🇦🇿" },
    { name: "Bahamas", code: "+1-242", flag: "🇧🇸" },
    { name: "Bahrain", code: "+973", flag: "🇧🇭" },
    { name: "Bangladesh", code: "+880", flag: "🇧🇩" },
    { name: "Barbados", code: "+1-246", flag: "🇧🇧" },
    { name: "Belarus", code: "+375", flag: "🇧🇾" },
    { name: "Belgium", code: "+32", flag: "🇧🇪" },
    { name: "Belize", code: "+501", flag: "🇧🇿" },
    { name: "Benin", code: "+229", flag: "🇧🇯" },
    { name: "Bhutan", code: "+975", flag: "🇧🇹" },
    { name: "Bolivia", code: "+591", flag: "🇧🇴" },
    { name: "Brazil", code: "+55", flag: "🇧🇷" },
    { name: "Brunei", code: "+673", flag: "🇧🇳" },
    { name: "Bulgaria", code: "+359", flag: "🇧🇬" },
    { name: "Cambodia", code: "+855", flag: "🇰🇭" },
    { name: "Cameroon", code: "+237", flag: "🇨🇲" },
    { name: "Canada", code: "+1", flag: "🇨🇦" },
    { name: "Chad", code: "+235", flag: "🇹🇩" },
    { name: "Chile", code: "+56", flag: "🇨🇱" },
    { name: "China", code: "+86", flag: "🇨🇳" },
    { name: "Colombia", code: "+57", flag: "🇨🇴" },
    { name: "Congo", code: "+242", flag: "🇨🇬" },
    { name: "Costa Rica", code: "+506", flag: "🇨🇷" },
    { name: "Croatia", code: "+385", flag: "🇭🇷" },
    { name: "Cuba", code: "+53", flag: "🇨🇺" },
    { name: "Cyprus", code: "+357", flag: "🇨🇾" },
    { name: "Czech Republic", code: "+420", flag: "🇨🇿" },
    { name: "Denmark", code: "+45", flag: "🇩🇰" },
    { name: "Ecuador", code: "+593", flag: "🇪🇨" },
    { name: "Egypt", code: "+20", flag: "🇪🇬" },
    { name: "Estonia", code: "+372", flag: "🇪🇪" },
    { name: "Ethiopia", code: "+251", flag: "🇪🇹" },
    { name: "Fiji", code: "+679", flag: "🇫🇯" },
    { name: "Finland", code: "+358", flag: "🇫🇮" },
    { name: "France", code: "+33", flag: "🇫🇷" },
    { name: "Georgia", code: "+995", flag: "🇬🇪" },
    { name: "Germany", code: "+49", flag: "🇩🇪" },
    { name: "Ghana", code: "+233", flag: "🇬🇭" },
    { name: "Greece", code: "+30", flag: "🇬🇷" },
    { name: "Greenland", code: "+299", flag: "🇬🇱" },
    { name: "Hungary", code: "+36", flag: "🇭🇺" },
    { name: "Iceland", code: "+354", flag: "🇮🇸" },
    { name: "India", code: "+91", flag: "🇮🇳" },
    { name: "Indonesia", code: "+62", flag: "🇮🇩" },
    { name: "Iran", code: "+98", flag: "🇮🇷" },
    { name: "Iraq", code: "+964", flag: "🇮🇶" },
    { name: "Ireland", code: "+353", flag: "🇮🇪" },
    { name: "Israel", code: "+972", flag: "🇮🇱" },
    { name: "Italy", code: "+39", flag: "🇮🇹" },
    { name: "Jamaica", code: "+1-876", flag: "🇯🇲" },
    { name: "Japan", code: "+81", flag: "🇯🇵" },
    { name: "Jordan", code: "+962", flag: "🇯🇴" },
    { name: "Kazakhstan", code: "+7", flag: "🇰🇿" },
    { name: "Kenya", code: "+254", flag: "🇰🇪" },
    { name: "Kuwait", code: "+965", flag: "🇰🇼" },
    { name: "Latvia", code: "+371", flag: "🇱🇻" },
    { name: "Lebanon", code: "+961", flag: "🇱🇧" },
    { name: "Libya", code: "+218", flag: "🇱🇾" },
    { name: "Lithuania", code: "+370", flag: "🇱🇹" },
    { name: "Luxembourg", code: "+352", flag: "🇱🇺" },
    { name: "Malaysia", code: "+60", flag: "🇲🇾" },
    { name: "Maldives", code: "+960", flag: "🇲🇻" },
    { name: "Malta", code: "+356", flag: "🇲🇹" },
    { name: "Mexico", code: "+52", flag: "🇲🇽" },
    { name: "Monaco", code: "+377", flag: "🇲🇨" },
    { name: "Mongolia", code: "+976", flag: "🇲🇳" },
    { name: "Morocco", code: "+212", flag: "🇲🇦" },
    { name: "Myanmar", code: "+95", flag: "🇲🇲" },
    { name: "Nepal", code: "+977", flag: "🇳🇵" },
    { name: "Netherlands", code: "+31", flag: "🇳🇱" },
    { name: "New Zealand", code: "+64", flag: "🇳🇿" },
    { name: "Nigeria", code: "+234", flag: "🇳🇬" },
    { name: "North Korea", code: "+850", flag: "🇰🇵" },
    { name: "Norway", code: "+47", flag: "🇳🇴" },
    { name: "Oman", code: "+968", flag: "🇴🇲" },
    { name: "Pakistan", code: "+92", flag: "🇵🇰" },
    { name: "Panama", code: "+507", flag: "🇵🇦" },
    { name: "Paraguay", code: "+595", flag: "🇵🇾" },
    { name: "Peru", code: "+51", flag: "🇵🇪" },
    { name: "Philippines", code: "+63", flag: "🇵🇭" },
    { name: "Poland", code: "+48", flag: "🇵🇱" },
    { name: "Portugal", code: "+351", flag: "🇵🇹" },
    { name: "Qatar", code: "+974", flag: "🇶🇦" },
    { name: "Romania", code: "+40", flag: "🇷🇴" },
    { name: "Russia", code: "+7", flag: "🇷🇺" },
    { name: "Saudi Arabia", code: "+966", flag: "🇸🇦" },
    { name: "Serbia", code: "+381", flag: "🇷🇸" },
    { name: "Singapore", code: "+65", flag: "🇸🇬" },
    { name: "Slovakia", code: "+421", flag: "🇸🇰" },
    { name: "Slovenia", code: "+386", flag: "🇸🇮" },
    { name: "South Africa", code: "+27", flag: "🇿🇦" },
    { name: "South Korea", code: "+82", flag: "🇰🇷" },
    { name: "Spain", code: "+34", flag: "🇪🇸" },
    { name: "Sri Lanka", code: "+94", flag: "🇱🇰" },
    { name: "Sweden", code: "+46", flag: "🇸🇪" },
    { name: "Switzerland", code: "+41", flag: "🇨🇭" },
    { name: "Syria", code: "+963", flag: "🇸🇾" },
    { name: "Taiwan", code: "+886", flag: "🇹🇼" },
    { name: "Thailand", code: "+66", flag: "🇹🇭" },
    { name: "Turkey", code: "+90", flag: "🇹🇷" },
    { name: "Ukraine", code: "+380", flag: "🇺🇦" },
    { name: "United Arab Emirates", code: "+971", flag: "🇦🇪" },
    { name: "United Kingdom", code: "+44", flag: "🇬🇧" },
    { name: "United States", code: "+1", flag: "🇺🇸" },
    { name: "Uruguay", code: "+598", flag: "🇺🇾" },
    { name: "Venezuela", code: "+58", flag: "🇻🇪" },
    { name: "Vietnam", code: "+84", flag: "🇻🇳" },
    { name: "Yemen", code: "+967", flag: "🇾🇪" },
    { name: "Zimbabwe", code: "+263", flag: "🇿🇼" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      formData.name === "" ||
      formData.mobile === "" ||
      formData.email === "" ||
      formData.service === "" ||
      formData.message === ""
    ) {
      alert("Please fill all the fields");
      return;
    } else {
      const submissionData = {
        name: formData.name,
        country_code: formData.country_code,
        phone_no: formData.mobile,
        email: formData.email,
        service: [formData.service],
        message: formData.message,
        promotion: formData.promotion,
      };
      sendData(submissionData);
    }
  };

  const sendData = async (submissionData) => {
    setIsLoading(true);
    try {
      const response = await axios.post(
        "https://test.ezworks.ai/form-api",
        submissionData
      );
      console.log(response);
      if (response.status === 200) {
        setIsLoading(false);
        alert("Form submitted successfully");
        setShowLogin(false);
      }
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      alert("Error Submitting Form");
    }
  };

  return (
    <div className="fixed top-0 z-[99999] left-0 flex items-center justify-center animate-fadeIn bg-[#0000006b] h-screen w-screen">
      <div className="login-container flex flex-col mx-4 relative w-[430px] bg-white rounded-2xl overflow-hidden text-white lg:rounded-xl lg:w-[800px] lg:flex-row">
        <div
          onClick={() => setShowLogin(false)}
          className="absolute z-[99] top-1 right-1 flex justify-center items-center h-8 w-8 text-2xl text-white lg:text-black rounded-full cursor-pointer hover:bg-[#09182c] hover:text-white transition-all duration-200"
        >
          <RxCross2 />
        </div>

        <div className="left-side h-[10%] relative w-full flex flex-col justify-between gap-2 lg:h-[100%] lg:w-[46%]">
          <div className="px-5 py-9 lg:py-10 pb-0 lg:pr-6 lg:pl-9">
            <h1 className="font-bold text-2xl lg:text-3xl">Send us a brief</h1>
            <p className="text-md mt-1 mb-5 lg:mb-0 lg:text-2xl lg:mt-3">
              Our team will get in touch with you within 10 Minutes!
            </p>
          </div>

          <div className="absolute top-0 left-0 w-full h-full bg-[url('/UPS/login-image.svg')] bg-cover bg-no-repeat bg-center lg:mx-4 lg:mb-6 lg:static lg:flex-1 lg:h-max lg:w-[85%]">
            <img
              src="/UPS/login-image.svg"
              className="hidden w-full h-full lg:flex"
              alt=""
            />
          </div>
        </div>

        <div className="right-side h-full w-full p-4 py-4 bg-white lg:w-[54%] lg:p-8 lg:py-10">
          <form action="" className="flex flex-col gap-4 w-full h-full">
            <input
              type="text"
              placeholder="Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
              className="w-full p-3 text-md text-black rounded-lg border border-[#a3a3a3] focus:outline-none focus:border-black placeholder:text-gray-500 placeholder:font-medium"
            />

            <div className="flex items-stretch rounded-lg overflow-hidden border border-[#a3a3a3] relative">
              <div className="text-black text-[13px] flex items-center justify-center  bg-gray-100 border-r border-[#a3a3a3]">
                <select
                  name=""
                  id=""
                  className="outline-none"
                  value={formData.country_code}
                  onChange={(e) =>
                    setFormData({ ...formData, country_code: e.target.value })
                  }
                >
                  {countryCode.map((country) => {
                    return (
                      <option
                        value={country.code}
                        key={country.name}
                        selected={country.code === "+91"}
                      >
                        {country.flag} {country.code}
                      </option>
                    );
                  })}
                </select>
              </div>

              <input
                type="number"
                placeholder="Mobile Number"
                value={formData.mobile}
                onChange={(e) =>
                  setFormData({ ...formData, mobile: e.target.value })
                }
                required
                className="w-full p-3 px-2 text-md text-black focus:outline-none focus:border-black placeholder:text-gray-500 placeholder:font-medium [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              />
            </div>

            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
              className="w-full p-3 text-md text-black rounded-lg border border-[#a3a3a3] focus:outline-none focus:border-black placeholder:text-gray-500 placeholder:font-medium"
            />
            <select
              name="services"
              id="services"
              value={formData.service}
              onChange={(e) =>
                setFormData({ ...formData, service: e.target.value })
              }
              required
              style={{ backgroundPosition: "calc(100% - 15px) center" }}
              className="w-full p-3 text-md text-black rounded-lg border border-[#a3a3a3] focus:outline-none focus:border-black placeholder:text-gray-500 placeholder:font-medium appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23131313%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:8px_8px] bg-no-repeat"
            >
              <option value="" disabled selected>
                Select Service
              </option>
              <option value="presentation-design">Presentation Design</option>
              <option value="visual-graphics">Visual Graphics</option>
              <option value="animation-videos">Animation Videos</option>
              <option value="film-production">Film Production</option>
              <option value="language-services">Language Services</option>
              <option value="content-creation">Content Creation</option>
              <option value="digital-marketing">Digital Marketing</option>
              <option value="research-analytics">Research & Analytics</option>
              <option value="data-processing">Data Processing</option>
              <option value="it-support-desk">IT Support Desk</option>
              <option value="tech-development">Tech Development</option>
              <option value="applied-ai">Applied AI</option>
              <option value="human-resources">Human Resources</option>
              <option value="operations-support">Operations Support</option>
              <option value="service-procurement">Service Procurement</option>
            </select>
            <textarea
              name=""
              id=""
              rows="3"
              placeholder="Message"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              required
              className="w-full p-3 text-md text-black rounded-lg border border-[#a3a3a3] focus:outline-none focus:border-black placeholder:text-gray-500 placeholder:font-medium resize-none"
            ></textarea>
            <div className="flex items-center text-black gap-2">
              <input
                type="checkbox"
                name="promotional-emails"
                checked={formData.promotion || false}
                id="promotional-emails"
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    promotion: e.target.checked,
                  });
                }}
                className="w-4 h-4 cursor-pointer"
              />
              <label htmlFor="promotional-emails" className="cursor-pointer">
                I would like to receive promotional emails
              </label>
            </div>
            <button
              onClick={handleSubmit}
              type="submit"
              className="bg-[#ea7b2c] text-white p-3 text-md rounded-lg cursor-pointer"
            >
              {isLoading ? <span class="loader"></span> : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
