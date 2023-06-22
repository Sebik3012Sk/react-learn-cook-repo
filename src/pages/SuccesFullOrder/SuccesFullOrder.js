import BackToHome from "../../components/BackToHome";
import "./SuccesFullOrder.css";
import { MdDownloadDone } from "react-icons/md";

const SuccesFullOrder = () => {
  return (
    <div className="succes-full-div">
        <h2 className="succes-full-text">Succes Full Order</h2>
        <MdDownloadDone className="succes-full-icon" />
        <BackToHome />
    </div>
  )
}

export default SuccesFullOrder;