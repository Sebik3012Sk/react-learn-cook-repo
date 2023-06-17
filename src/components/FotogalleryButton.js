import "./FotogalleryButton.css";
import { useState } from "react";

const FotogalleryButton = () => {


    let [counter,setCounterValue] = useState(0);

  return (
    <div id="order-div">
        <button className="order-button" type="button" onClick={ () => setCounterValue(counter - 1) }>Order -</button>
        <button className="order-button" type="button">Order</button>
        <button className="order-button" type="button" onClick={ () => setCounterValue(counter + 1) }>Order +</button>
        <p className="counter-ks">Počet Kusů : {counter}</p>
    </div>
  )
}

export default FotogalleryButton;