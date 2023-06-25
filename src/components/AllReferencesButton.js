import { Link } from "react-router-dom";
import "./AllReferencesButton.css";

const AllReferencesButton = () => {
  return (
    <div className="all-references-div-link">
        <Link className="all-references-link" to="/all-references">Show All References</Link>
    </div>
  )
}

export default AllReferencesButton;