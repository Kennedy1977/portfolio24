"use client";
import { context } from "@/context/context";
import { kuraUtilit } from "@/utility";
import { newsSlider } from "@/utility/sliderProps";
import { useContext, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { data as blogData } from "../content/blog.js";

const News = () => {
  useEffect(() => {
    kuraUtilit.dataImage();
    kuraUtilit.imgToSVG();
  }, []);

  const { modalToggle, setBlogModal } = useContext(context);

  return (
    <div
      className="kura_tm_section w-full h-auto clear-both float-left"
      id="news"
    >
      <div className="kura_tm_news w-full h-auto clear-both float-left py-[140px] px-0">
        <div className="container">
          <div className="kura_tm_main_title w-full h-auto clear-both float-left">
            <span className="inline-block mb-[10px] text-secondary-color font-poppins font-medium">
              Developer
            </span>
            <h3 className="font-extrabold uppercase">Updates</h3>
          </div>
          <div
            className="news_list w-full h-auto clear-both float-left pt-[92px] wow fadeInUp"
            data-wow-duration=".7s"
          >
            <Swiper {...newsSlider} className="swiper-container">
              {blogData.map((blog) => (
                <SwiperSlide className="swiper-slide" key={blog.id}>
                  <div className="list_inner w-full h-auto clear-both float-left">
                    <div className="image relative">
                      <img
                        className="relative min-w-full opacity-0"
                        src="assets/img/portfolio/410-460.jpg"
                        alt=""
                      />
                      <div
                        className="main absolute inset-0 bg-no-repeat bg-cover bg-center rounded-[10px]"
                        data-img-url={blog.img}
                        style={{ backgroundImage: `url(${blog.img})` }}
                      />
                    </div>
                    <div className="overlay absolute inset-[10px] bg-white rounded-[10px] z-[1] transition-all duration-300" />
                    <img
                      className="svg absolute top-[40px] right-[39px] w-[50px] h-[50px] z-[2] rotate-[-50deg] text-black transition-all duration-300"
                      src="assets/img/svg/right-arrow.svg"
                      alt=""
                    />
                    <div className="details absolute z-[2] bottom-0 left-0 pr-[40px] pb-[40px] pl-[49px] transition-all duration-300">
                      <span className="font-poppins mb-[6px] inline-block">
                        {blog.date}
                      </span>
                      <h3 className="text-[20px] font-bold">{blog.title}</h3>
                    </div>
                    <a
                      className="kura_tm_full_link absolute inset-0 z-[5]"
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        modalToggle(true);
                        setBlogModal(blog);
                      }}
                    />
                  </div>
                </SwiperSlide>
              ))}
              <div className="kura_tm_swiper_progress fill">
                <div className="my_pagination_in">
                  <span className="current currentNews" />
                  <span className="pagination_progress">
                    <span className="all allNews">
                      <span />
                    </span>
                  </span>
                  <span className="total totalNews" />
                </div>
                <div className="my_navigation">
                  <ul>
                    <li>
                      <a className="my_prev" href="#">
                        <img
                          className="svg"
                          src="assets/img/svg/right-arrow.svg"
                          alt=""
                        />
                      </a>
                    </li>
                    <li>
                      <a className="my_next" href="#">
                        <img
                          className="svg"
                          src="assets/img/svg/right-arrow.svg"
                          alt=""
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};
export default News;
