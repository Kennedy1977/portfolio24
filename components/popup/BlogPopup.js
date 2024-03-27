import { context } from "@/context/context";
import { useContext } from "react";
import PopContainer from "./PopupContainer";
const BlogPopup = () => {
  const { setBlogModal, blogModal } = useContext(context);
  return (
    <PopContainer nullValue={setBlogModal}>
      <div className="news_popup_informations">
        <div className="image">
          <img src="/assets/img/thumbs/4-2.jpg" alt="" />
          <div className="main" data-img-url={blogModal.img} />
        </div>
        <div className="details">
          <span className="font-poppins mb-[6px] inline-block">
            {blogModal.author}
          </span>
          <h3 className="text-[20px] font-bold">{blogModal.title}</h3>
          <div />
        </div>

        <div className="text">
          {blogModal.description.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      </div>
    </PopContainer>
  );
};
export default BlogPopup;
