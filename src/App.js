import { BrowserRouter , Routes , Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import MainFood from "./pages/MainFood/MainFood";
import Deserts from "./pages/Deserts/Deserts";
import AllRecipes from "./pages/All Recipes/AllRecipes";
import Error from "./pages/Error/Error";
import MoreRateing from "./components/MoreRateing";

const App = () => {


  return <div id="div-header">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/MainFood" element={ <MainFood /> }/>
        <Route path="/Deserts" element={ <Deserts /> }/>
        <Route path="/all-recipes" element={ <AllRecipes /> } />
        <Route path="/more-rateing" element={ <MoreRateing /> } />
        <Route path="*" element={ <Error /> } />
      </Routes>
    </BrowserRouter>

  </div>


}

export default App;