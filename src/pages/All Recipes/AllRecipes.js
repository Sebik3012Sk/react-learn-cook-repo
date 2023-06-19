import "./AllRecipes.css";
import data_images from "../../data_images";
import FotogalleryImages from "../../components/FotogalleryImages";
import FotogalleryButton from "../../components/FotogalleryButton";
import SearchInput from "../../components/SearchInput";

const AllRecipes = () => {


  const width_image = "350px";
  const height_image = "350px";  

  return (
    <div>
        <h1 className="recipe-header-text">All Recipes</h1>
        <SearchInput />

        <FotogalleryImages Source={data_images[0].image} width={width_image} height={height_image} />
        <FotogalleryButton />

        <FotogalleryImages Source={data_images[1].image} width={width_image} height={height_image} />
        <FotogalleryButton />

        <FotogalleryImages Source={data_images[2].image} width={width_image} height={height_image} />
        <FotogalleryButton />

        <FotogalleryImages Source={data_images[3].image} width={width_image} height={height_image} />
        <FotogalleryButton />

        <FotogalleryImages Source={data_images[4].image} width={width_image} height={height_image} />
        <FotogalleryButton />

        <FotogalleryImages Source={data_images[5].image} width={width_image} height={height_image} />
        <FotogalleryButton />
    </div>
  )
}

export default AllRecipes