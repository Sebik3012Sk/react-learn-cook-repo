import "./FotogalleryButton.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const FotogalleryButton = () => {


    let [counter,setCounterValue] = useState(0);

  return (
    <div id="order-div">
        <button className="order-button" type="button" onClick={ () => setCounterValue(counter - 1) }>Order -</button>
        <button className="order-button" type="button"><Link className="buy-link" to="/succes-full-order">Buy</Link></button>
        <button className="order-button" type="button" onClick={ () => setCounterValue(counter + 1) }>Order +</button>
        <p className="counter-ks">Počet Kusů : {counter}</p>
    </div>
  )
}

export default FotogalleryButton;