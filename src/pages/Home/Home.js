import { Link } from "react-router-dom"
import "./Home.css";

import ButtonMenu from "../../components/ButtonMenu";
import FotogalleryImages from "../../components/FotogalleryImages";
import Rateing from "../../components/Rateing";
import Footer from "../../components/Footer";


import data_images from "../../data_images";

const Home = () => {
  return (
    <div id="header-div">
        {/* <h1>Home</h1> */}

        <nav>
            <ul>
                <Link className="item-menu" to="/Appetizer">Appetizer</Link>
                <Link className="item-menu" to="/MainFood">Main Food</Link>
                <Link className="item-menu" to="/Deserts">Deserts</Link>
                <Link className="item-menu" to="/Snacks">Snacks</Link>
            </ul>

            
        </nav>

        <ButtonMenu text="Fotogallery" />
        <ButtonMenu text="All Recipes" />

        <Rateing />


        <h2 className="fotogallery-text">Fotogallery</h2>

        <FotogalleryImages Source={data_images[0].image} />
        <FotogalleryImages Source={data_images[1].image} />
        <FotogalleryImages Source={data_images[2].image} />
        <FotogalleryImages Source={data_images[3].image} />
        <FotogalleryImages Source={data_images[4].image} />
        <FotogalleryImages Source={data_images[5].image} />

        <Footer />
        
    </div>
  )
}

export default Home