import "./MoreRateing.css";

import data_images from "../data_images";
import BackToHome from "./BackToHome";


const MoreRateing = () => {
  return (
    <div className="rates-div">
        <h2 className="header-rateing-text">Rateing From Our Clients</h2>

        <div className="rateing-1">

            <div className="rate-div">
              <img className="account-image" src={data_images[6].image} alt="" />
              <p className="account-name">{data_images[6].name}</p>
            </div>

            <p className="rateing-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis ad molestias modi magnam tempora omnis fugiat rerum at, vitae earum aliquid eos perspiciatis aliquam sapiente culpa dicta fugit vero minima! <br />
            Perferendis cum </p>
        </div>


        <div className="rateing-2">

            <div className="rate-div">
              <img className="account-image" src={data_images[7].image} alt="" />
              <p className="account-name">{data_images[7].name}</p>
            </div>

            <p className="rateing-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor sequi architecto, eius quaerat ut tenetur nesciunt ratione modi! Nostrum rem eligendi alias magni velit aut enim fuga repellendus cum doloremque. <br />
            Quia fuga porro </p>

        </div>


        <div className="rateing-3">
            
            <div className="rate-div">
                <img className="account-image" src={data_images[8].image} alt="" />
                <p className="account-name">{data_images[8].name}</p>
            </div>

            <p className="rateing-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis illum placeat velit ipsam eaque sequi autem esse eius ex quibusdam maxime expedita molestiae laborum itaque eveniet adipisci explicabo, labore eos. <br />
            Tenetur quod praesentium</p>

        </div>
        
        <BackToHome />

    </div>
  )
}

export default MoreRateing;