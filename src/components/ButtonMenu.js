import "./ButtonMenu.css";
import { Link } from "react-router-dom";

const ButtonMenu = (props) => {

  if(props.text === "All Recipes") {
    return (
      <div id="button-div">
        <button className="menu-button" type="button"><Link className="button-link" to="/all-recipes">{props.text}</Link></button>
      </div>
    )

  } else if (props.text === "Fotogallery") {
    return <div id="button-div">
      <button className="menu-button" type="button"><Link className="button-link" to="/fotogallery">{props.text}</Link></button>
    </div>
  }


}

export default ButtonMenu;