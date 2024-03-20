const CopyRight = () => {
  return (
    <div className="kura_tm_section w-full h-auto clear-both float-left">
      <div className="kura_tm_copyright w-full h-auto clear-both float-left bg-black px-0 pt-[28px] pb-[32px] text-center">
        <div className="container">
          <div
            className="copyright_inner w-full h-auto clear-both float-left flex items-center justify-between wow fadeInUp"
            data-wow-duration=".7s"
          >
            <div className="text">
              <p className="text-white">
                Copyright © 2023. All rights reserved.
              </p>
            </div>
            <div className="social">
              <ul>
                <li className="mr-[20px] inline-block">
                  <a className="text-white" href="#">
                    <img
                      className="svg"
                      src="assets/img/svg/social/facebook.svg"
                      alt=""
                    />
                  </a>
                </li>
                <li className="mr-[20px] inline-block">
                  <a className="text-white" href="#">
                    <img
                      className="svg"
                      src="assets/img/svg/social/twitter.svg"
                      alt=""
                    />
                  </a>
                </li>
                <li className="mr-[20px] inline-block">
                  <a className="text-white" href="#">
                    <img
                      className="svg"
                      src="assets/img/svg/social/instagram.svg"
                      alt=""
                    />
                  </a>
                </li>
                <li className="mr-[20px] inline-block">
                  <a className="text-white" href="#">
                    <img
                      className="svg"
                      src="assets/img/svg/social/dribbble.svg"
                      alt=""
                    />
                  </a>
                </li>
                <li className="inline-block">
                  <a className="text-white" href="#">
                    <img
                      className="svg"
                      src="assets/img/svg/social/tik-tok.svg"
                      alt=""
                    />
                  </a>
                </li>
                {/* If you want to change or add any svg icons you can download here for free www.flaticon.com */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CopyRight;
