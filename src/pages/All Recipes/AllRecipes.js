import "./AllRecipes.css";
import data_images from "../../data_images";
import FotogalleryImages from "../../components/FotogalleryImages";
import FotogalleryButton from "../../components/FotogalleryButton";
import SearchInput from "../../components/SearchInput";
import MainMenu from "../../components/MainMenu";

const AllRecipes = () => {


  const width_image = "350px";
  const height_image = "350px";  

  return (
    <div className="all-recipes-div">
        <h1 className="recipe-header-text">All Recipes</h1>
        <MainMenu />
        <SearchInput />

        <FotogalleryImages Source={data_images[0].image} name={data_images[0].name} width={width_image} height={height_image} />
        <FotogalleryButton />

        <FotogalleryImages Source={data_images[1].image} name={data_images[1].name} width={width_image} height={height_image} />
        <FotogalleryButton />

        <FotogalleryImages Source={data_images[2].image} name={data_images[2].name} width={width_image} height={height_image} />
        <FotogalleryButton />

        <FotogalleryImages Source={data_images[3].image} name={data_images[3].name} width={width_image} height={height_image} />
        <FotogalleryButton />

        <FotogalleryImages Source={data_images[4].image} name={data_images[4].name} width={width_image} height={height_image} />
        <FotogalleryButton />

        <FotogalleryImages Source={data_images[5].image} name={data_images[5].name} width={width_image} height={height_image} />
        <FotogalleryButton />
    </div>
  )
}

export default AllRecipes