const TimeLine = () => {
  return (
    <div
      className="kura_tm_section w-full h-auto clear-both float-left"
      id="timeline"
    >
      <div className="kura_tm_timeline w-full h-auto clear-both float-left px-0 pt-[140px] pb-[113px]">
        <div className="container">
          <div className="kura_tm_main_title w-full h-auto clear-both float-left">
            <span className="inline-block mb-[10px] text-secondary-color font-poppins font-medium">
              Work History
            </span>
            <h3 className="font-extrabold uppercase">Timeline</h3>
          </div>
          <div className="timeline_list w-full h-auto clear-both float-left pt-[54px]">
            <ul>
             
            <li
                className="w-full float-left px-0 pt-[27px] pb-[30px] wow fadeInUp"
                data-wow-duration=".7s"
                data-wow-delay=".8s"
              >
                <div className="list_inner w-1/3 float-left pr-[40px]">
                  <span className="inline-block text-[18px]">
                    March, 2010 - July, 2012
                  </span>
                </div>
                <div className="list_inner w-1/3 float-left pr-[40px]">
                  <span className="inline-block text-[18px] text-black">
                    Junior UX Designer
                  </span>
                </div>
                <div className="list_inner w-1/3 float-left">
                  <span className="inline-block text-[18px]">
                    Simono Design Group, London
                  </span>
                </div>
              </li>
              
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TimeLine;
