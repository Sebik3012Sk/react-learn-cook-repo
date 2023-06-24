import { useEffect, useState } from "react";
import { projectFirestore } from "../firebase/config";
import "./OrderedProducts.css";

const OrderedProducts = () => {

 const [productsCounter, setProductsCounterValue] = useState(null);   

 useEffect(() => {
    projectFirestore.collection("order-products").get().then((snapshot) => {
        snapshot.docs.forEach((one_order) => {
            setProductsCounterValue(one_order.data().counter_ks);
        })
    })
 } , [])      

  return (
    <div className="ordered-products">
        <h2 className="products-header">Products Counter Order</h2>
        <h2 className="counter-products">Counter Ordered : {productsCounter}</h2>
    </div>
  )
}

export default OrderedProducts;