import "./MoreRateing.css";

import data_images from "../data_images";


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
            Perferendis cum ipsa veritatis sed itaque dolore, praesentium dolores maxime delectus necessitatibus magni enim quae suscipit, doloribus dicta unde. Obcaecati, porro. Corporis hic eveniet minus iusto officia libero aperiam eaque!</p>
        </div>


        <div className="rateing-2">

            <div className="rate-div">
              <img className="account-image" src={data_images[7].image} alt="" />
              <p className="account-name">{data_images[7].name}</p>
            </div>

            <p className="rateing-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor sequi architecto, eius quaerat ut tenetur nesciunt ratione modi! Nostrum rem eligendi alias magni velit aut enim fuga repellendus cum doloremque. <br />
            Quia fuga porro autem expedita beatae veniam. Porro nesciunt tempore nam ipsam dicta itaque beatae commodi deserunt nisi! Qui a nostrum voluptate ea culpa obcaecati eos animi, necessitatibus cum tempore!</p>

        </div>


        <div className="rateing-3">
            
            <div className="rate-div">
                <img className="account-image" src={data_images[8].image} alt="" />
                <p className="account-name">{data_images[8].name}</p>
            </div>

            <p className="rateing-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis illum placeat velit ipsam eaque sequi autem esse eius ex quibusdam maxime expedita molestiae laborum itaque eveniet adipisci explicabo, labore eos. <br />
            Tenetur quod praesentium animi architecto error aliquam totam sapiente obcaecati magni iste placeat minus, veniam ducimus fugit, itaque culpa consequuntur exercitationem. Veritatis culpa consequuntur aperiam expedita illum, tenetur saepe hic?</p>

        </div>
        

    </div>
  )
}

export default MoreRateing;