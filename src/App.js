import { BrowserRouter , Routes , Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import MainFood from "./pages/MainFood/MainFood";
import Deserts from "./pages/Deserts/Deserts";
import AllRecipes from "./pages/All Recipes/AllRecipes";
import Error from "./pages/Error/Error";
import MoreRateing from "./components/MoreRateing";
import SuccesFullOrder from "./pages/SuccesFullOrder/SuccesFullOrder";
import SearchOutput from "./components/SearchOutput";
import Fotogallery from "./pages/Fotogallery/Fotogallery";


const App = () => {

  return <div id="div-header">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/MainFood" element={ <MainFood /> }/>
        <Route path="/Deserts" element={ <Deserts /> }/>
        <Route path="/all-recipes" element={ <AllRecipes /> } />
        <Route path="/more-rateing" element={ <MoreRateing /> } />
        <Route path="/succes-full-order" element={ <SuccesFullOrder /> } />
        <Route path="/search-output" element={ <SearchOutput /> }/>
        <Route path="/fotogallery" element={ <Fotogallery /> } />
        <Route path="*" element={ <Error /> } />
      </Routes>
    </BrowserRouter>

  </div>


}

export default App;