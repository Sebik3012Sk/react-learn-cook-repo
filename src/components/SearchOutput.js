import "./SearchOutput.css";
import FotogalleryImages from "./FotogalleryImages";
import FotogalleryButton from "./FotogalleryButton";

const SearchOutput = () => {

 const data_output_search = JSON.parse(localStorage.getItem("food-data-search"));

  return (
    <div className="search-output">
        {
            data_output_search.map( (one_result_food) => {

                const { name , image } = one_result_food;
                
                return (
                    <div>
                        <h1 className="name-food">{name}</h1>
                        <FotogalleryImages Source={image} />
                        <FotogalleryButton />
                    </div>
                )
            })
        }
    </div>
  )
}

export default SearchOutput