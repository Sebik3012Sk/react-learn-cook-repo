import "./SuccesFullReference.css";
import BackToHome from "../../components/BackToHome";
import { MdDownloadDone } from "react-icons/md";

const SuccesFullReference = () => {
  return (
    <div id="succes-full-reference-container">
        <h2 className="reference-text-header">Reference Succes Full Submit</h2>
        <p className="reference-text-paragraph">Thank You by your Reaction</p>
        <MdDownloadDone className="succes-full-reference-icon" />
        <BackToHome />
    </div>
  )
}

export default SuccesFullReference