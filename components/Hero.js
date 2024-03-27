"use client";
import { context } from "@/context/context";
import { useContext } from "react";
import {
  WebDevelopment,
  DigitalMarketing,
  GraphicDesign,
} from "@/content/index";

const services = [
  {
    id: 1,
    title: "Web Development",
    img: "assets/img/service/1.jpg",
    content: WebDevelopment,
  },
  {
    id: 2,
    title: "Digital Marketing",
    img: "assets/img/service/2.jpg",
    content: DigitalMarketing,
  },
  {
    id: 3,
    title: "UI/UX and Graphic Design",
    img: "assets/img/service/3.jpg",
    content: GraphicDesign,
  },
];

const Hero = () => {
  const { setServiceModal, modalToggle } = useContext(context);
  return (
    <div
      className="kura_tm_section w-full h-auto clear-both float-left"
      id="home"
    >
      <div className="kura_tm_hero w-full min-h-[100vh] float-left clear-both bg-[#f9f9f9]">
        <div className="container min-h-full">
          <div className="content w-full min-h-[100vh] flex items-center relative">
            <div className="left w-1/2 pr-[50px] relative opacity-0 invisible top-[20px] transition-all duration-[400ms]">
              <span className="name inline-block mb-[16px] text-secondary-color font-poppins font-medium">
                Andrew Kennedy
              </span>
              <h3 className="job text-[45px] font-extrabold leading-[1.4] uppercase mb-[25px]">
                Independent Web Development Consultant based in United Kingdom
              </h3>
              <div className="services w-full h-auto clear-both float-left mb-[35px]">
                <ul>
                  {services.map((service) => (
                    <li className="w-full float-left" key={service.id}>
                      <a
                        className="text-black text-[17px] inline-block py-[8px] px-0 relative transition-all duration-300"
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          modalToggle(true);
                          setServiceModal(service);
                        }}
                      >
                        <img className="image" src={service.img} alt="" />
                        <span>{service.title}</span>
                        <img
                          className="svg relative w-[17px] h-[17px] left-[10px] transition-all duration-300 inline-block"
                          src="assets/img/svg/right-arrow.svg"
                          alt=""
                        />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="right w-1/2 text-right pl-[200px] relative opacity-0 invisible top-[20px] transition-all duration-[400ms]">
              <div className="image relative">
                <img
                  className="min-w-full relative opacity-0"
                  src="assets/img/thumbs/3-4.jpg"
                  alt=""
                />
                <div
                  className="main absolute inset-0 bg-no-repeat bg-cover bg-center transition-all duration-[400ms]"
                  data-img-url="assets/img/hero/1.jpg"
                />
                <div className="shape" />
              </div>
            </div>
            <div className="down anchor">
              <a href="#portfolio">
                <img
                  className="svg"
                  src="assets/img/svg/down-arrow.svg"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
