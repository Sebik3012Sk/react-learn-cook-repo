import { Link } from "react-router-dom";
import "./BackToHome.css";


const BackToHome = () => {
    return (
        <div>
            <ul>
                <Link className="back-to-home-link" to="/">Back to home</Link>
            </ul>
        </div>
    )
}

export default BackToHome