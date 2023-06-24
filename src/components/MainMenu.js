import "./MainMenu.css";
import { Link } from "react-router-dom"
import { projectFirestore } from "../firebase/config";

const MainMenu = () => {

  const date = new Date();

  const menuHandler = (e) => {
    const database_obj = {
      name : e.target.innerText,
      date : date.toLocaleDateString("en-US"),
      link : e.target.href
    }

    projectFirestore.collection("page-activity").add(database_obj).then(() => {
      alert("Data added successfully to the database");
    });

    projectFirestore.collection("page-activity").get().then((snapshot) => {
      snapshot.docs.forEach( (one_activity) => {
        console.log(`${one_activity.data().name}  ${one_activity.id}`);
      })
    }).catch((error) => {
      console.log(error.message);
    })

  }

  return (
    <div className="main-menu-container">
        <nav>
            <ul>
                <Link onClick={menuHandler} className="item-menu" to="/Appetizer">Appetizer</Link>
                <Link onClick={menuHandler} className="item-menu" to="/MainFood">Main Food</Link>
                <Link onClick={menuHandler} className="item-menu" to="/Deserts">Deserts</Link>
                <Link onClick={menuHandler} className="item-menu" to="/Snacks">Snacks</Link>
            </ul> 
        </nav>
    </div>
  )
}

export default MainMenu