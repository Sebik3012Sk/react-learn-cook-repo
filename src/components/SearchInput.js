import "./SearchInput.css";
import { useEffect, useState } from "react";
import data_images from "../data_images";
import { Link } from "react-router-dom";


const SearchInput = () => {

    let [searchValue , setSearchValue] = useState("");
    let [filterFood , setFilterFood] = useState([]);
    let [outputText , showOutputText] = useState("");


    useEffect( () => {
        const filter_data_search = data_images.filter( (search_element) => {
            return search_element.name.includes(searchValue);
        } )

        setFilterFood(filter_data_search);
        
        localStorage.setItem("food-data-search",JSON.stringify(filterFood));
        showOutputText("Search");

    } , [searchValue])


    return (
        <div className="search-input-div">
            <form id="form" action="">
                <input onChange={ (e) => setSearchValue(e.target.value) } type="search" placeholder="What Do you Find ?" value={searchValue} />
                <button className="search-button">
                    <Link className="search-link" to="/search-output">{outputText}</Link>
                </button>
            </form>
        </div>
    )
}

export default SearchInput;