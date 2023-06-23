import "./MainMenu.css";
import { Link } from "react-router-dom"

const MainMenu = () => {
  return (
    <div className="main-menu-container">
        <nav>
            <ul>
                <Link className="item-menu" to="/Appetizer">Appetizer</Link>
                <Link className="item-menu" to="/MainFood">Main Food</Link>
                <Link className="item-menu" to="/Deserts">Deserts</Link>
                <Link className="item-menu" to="/Snacks">Snacks</Link>
            </ul> 
        </nav>
    </div>
  )
}

export default MainMenu