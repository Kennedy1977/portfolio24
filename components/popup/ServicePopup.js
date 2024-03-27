import { context } from "@/context/context";
import { useContext } from "react";
import PopContainer from "./PopupContainer";
const ServicePopup = () => {
  const { serviceModal, setServiceModal } = useContext(context);
  return (
    <PopContainer nullValue={setServiceModal}>
      <div className="popup_informations">
        <div className="image">
          <img src="assets/img/thumbs/4-2.jpg" alt="" />
          <div
            className="main"
            data-img-url={serviceModal.img}
            style={{ backgroundImage: `url(${serviceModal.img})` }}
          />
        </div>
        <div className="title">
          <h3>{serviceModal.title}</h3>
        </div>
        <div class="description">{<serviceModal.content />}</div>
      </div>
    </PopContainer>
  );
};
export default ServicePopup;
