import "./SearchInput.css";
import { useEffect, useState } from "react";
import  data_images from "../data_images";
import { Link } from "react-router-dom";
import { projectFirestore } from "../firebase/config";

const SearchInput = () => {

    let [searchValue , setSearchValue] = useState("");
    let [filterFood , setFilterFood] = useState([]);
    let [outputText , showOutputText] = useState("");


    useEffect( () => {

        const filter_data_search = data_images.filter((search_item) => {
            if (search_item.name) {
              return search_item.name.includes(searchValue);
            }
            return false;
          });
          

        setFilterFood(filter_data_search);
        
        localStorage.setItem("food-data-search",JSON.stringify(filterFood));
        showOutputText("Search");

    } , [searchValue])

    const submitForm = async (e) => {

        // e.preventDefault();

        const date = new Date();

        let data_search_obj = {
            searchValue : searchValue,
            date : date.toLocaleDateString()
        }

        projectFirestore.collection("search-data").add(data_search_obj);
    }

    return (
        <div className="search-input-div">
            <form onSubmit={submitForm} id="form" action="">
                <input onChange={ (e) => setSearchValue(e.target.value)} type="search" placeholder="What Do you Find ?" value={searchValue} />
                <button type="submit" className="search-button">
                    <Link className="search-link" to="/search-output">{outputText}</Link>
                </button>
            </form>
        </div>
    )
}

export default SearchInput;