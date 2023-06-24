import "./FotogalleryButton.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { projectFirestore } from "../firebase/config";

const FotogalleryButton = () => {

    const [counter, setCounterValue] = useState(0);


    const buttonBuyHandler = (e) => {

      const date = new Date();

      const data_obj_order_product = {
        counter_ks : counter,
        date : date.toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric'}),
        action : e.target.innerText
      }

      projectFirestore.collection("order-products").add(data_obj_order_product);
    }

    

  return (
    <div id="order-div">
        <button className="order-button" type="button" onClick={ () => setCounterValue(counter - 1) }>Order -</button>
        <button onClick={buttonBuyHandler} className="order-button" type="button"><Link className="buy-link" to="/succes-full-order">Buy</Link></button>
        <button className="order-button" type="button" onClick={ () => setCounterValue(counter + 1) }>Order +</button>
        <p className="counter-ks">Počet Kusů : {counter}</p>
    </div>
  )
}

export default FotogalleryButton;