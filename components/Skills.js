"use client";
import { kuraUtilit } from "@/utility";
import { jarallax, jarallaxVideo } from "jarallax";
import { useEffect } from "react";

const Skills = () => {
  useEffect(() => {
    kuraUtilit.activeSkillProgress();
  }, []);

  useEffect(() => {
    jarallaxVideo();
    jarallax(document.querySelectorAll(".jarallax"), {
      speed: 0.2,
      videoSrc: "https://www.youtube.com/watch?v=TwmDtuUlUaw",
    });
  });

  return (
    <div
      className="kura_tm_section w-full h-auto clear-both float-left"
      id="skills"
    >
      <div className="kura_tm_skills w-full h-auto clear-both float-left relative px-0 pt-[140px] pb-[150px]">
        <div className="container">
          <div className="skills_inner w-full h-auto clear-both float-left relative z-[3]">
            <div className="left w-[60%] pr-[200px]">
              <div className="kura_tm_main_title w-full h-auto clear-both float-left">
                <span className="inline-block mb-[10px] text-secondary-color font-poppins font-medium">
                  Professional Skills
                </span>
                <h3 className="font-extrabold uppercase text-white">
                  Proven Track Record
                </h3>
              </div>
              <div
                className="text w-full float-left mt-[40px] mb-[44px] wow fadeInUp"
                data-wow-duration=".7s"
              >
                <p className="text-[#bbb]">
                  Through a sustained commitment to excellence and a constant
                  pursuit of growth, I have established a solid foundation of
                  trust with clients, making me a reliable partner for achieving
                  digital aspirations.
                </p>
              </div>
              <div
                className="dodo_progress wow fadeInUp"
                data-wow-duration=".7s"
                data-wow-delay=".2s"
              >
                <div className="progress_inner" data-value={95}>
                  <span>
                    <span className="label">Web Development & Design</span>
                    <span className="number">95%</span>
                  </span>
                  <div className="background">
                    <div className="bar">
                      <div className="bar_in" />
                    </div>
                  </div>
                </div>
                <div className="progress_inner" data-value={90}>
                  <span>
                    <span className="label">
                      Multimedia & Interactive Projects
                    </span>
                    <span className="number">90%</span>
                  </span>
                  <div className="background">
                    <div className="bar">
                      <div className="bar_in" />
                    </div>
                  </div>
                </div>
                <div className="progress_inner" data-value={98}>
                  <span>
                    <span className="label">
                      Operational & Logistics Software
                    </span>
                    <span className="number">98%</span>
                  </span>
                  <div className="background">
                    <div className="bar">
                      <div className="bar_in" />
                    </div>
                  </div>
                </div>
                <div className="progress_inner" data-value={90}>
                  <span>
                    <span className="label">
                      Performance Optimization & SEO
                    </span>
                    <span className="number">90%</span>
                  </span>
                  <div className="background">
                    <div className="bar">
                      <div className="bar_in" />
                    </div>
                  </div>
                </div>
                <div className="progress_inner" data-value={95}>
                  <span>
                    <span className="label">
                      Core Skills (HTML5, CSS, JavaScript, React)
                    </span>
                    <span className="number">95%</span>
                  </span>
                  <div className="background">
                    <div className="bar">
                      <div className="bar_in" />
                    </div>
                  </div>
                </div>
                <div className="progress_inner" data-value={92}>
                  <span>
                    <span className="label">Project Management</span>
                    <span className="number">92%</span>
                  </span>
                  <div className="background">
                    <div className="bar">
                      <div className="bar_in" />
                    </div>
                  </div>
                </div>
                <div className="progress_inner" data-value={100}>
                  <span>
                    <span className="label">Adaptability</span>
                    <span className="number">100%</span>
                  </span>
                  <div className="background">
                    <div className="bar">
                      <div className="bar_in" />
                    </div>
                  </div>
                </div>
                <div
                  className="text w-full float-left mt-[40px] mb-[44px] wow fadeInUp"
                  data-wow-duration=".7s"
                >
                  <p className="text-[#bbb]">
                  The percentages reflect a nuanced understanding and mastery across various dimensions of web development and digital innovation. 
                  </p>
                </div>
              </div>
            </div>
            <div
              className="right w-[40%] absolute right-0 top-0 bottom-[-220px] overflow-hidden"
              data-background-style="image"
            >
              {" "}
              {/* Background Styles: "video" and "image" // Also you can use any youtube, vimeo, and local videos */}
              <div
                className="my_video absolute inset-0 jarallax"
                data-speed={0}
                data-jarallax-video="https://www.youtube.com/watch?v=TwmDtuUlUaw"
              />
              <div
                className="my_image absolute inset-0 bg-no-repeat bg-cover bg-center jarallax"
                data-speed={0}
                data-img-url="assets/img/portfolio/2.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;
