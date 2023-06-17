import BackToHome from "../../components/BackToHome";
import "./Error.css";

const Error = () => {
  return (
    <div id="error-div">
        <h1 className="error-header-text">Error</h1>
        <p className="error-p-text">This Page is not Avaible Right now <br /> please try it again later <br /> thank you</p>

        <BackToHome />
    </div>
  )
}

export default Error