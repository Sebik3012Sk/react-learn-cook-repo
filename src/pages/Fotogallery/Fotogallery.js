import "./Fotogallery.css";
import data_images from "../../data_images"
import MainMenu from "../../components/MainMenu";
import Footer from "../../components/Footer";
import BackToHome from "../../components/BackToHome";

const Fotogallery = () => {
  return (
    <div className="fotogallery-images">

        <h1 className="fotogallery-header-text">Fotogallery</h1>

        <BackToHome />

        <MainMenu />

        <div className="images">
            <div className="one-image">
                <img src={data_images[0].image} alt="" />
            </div>

            <div className="one-image">
                <img src={data_images[1].image} alt="" />
            </div>

            <div className="one-image">
                <img src={data_images[2].image} alt="" />
            </div>

            <div className="one-image">
                <img src={data_images[3].image} alt="" />
            </div>

            <div className="one-image">
                <img src={data_images[4].image} alt="" />
            </div>

            <div className="one-image">
                <img src={data_images[5].image} alt="" />
            </div>

            <div className="one-image">
                <img src={data_images[9].image} alt="" />
            </div>

        </div>

        <Footer />
    </div>
  )
}

export default Fotogallery