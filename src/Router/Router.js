import {Routes, Route} from "react-router-dom";
import Home from "../Pages/Home/Home";
import RecipeList from "../Pages/RecipeList/RecipeList"
import ShoppingList from "../Pages/ShoppingList/ShoppingList"
import UserSettings from "../Pages/UserSettings/UserSettings"

function Router() {
    return (
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="recipe-list" element={<RecipeList />} />
        <Route path="shopping-list" element={<ShoppingList />} />
        <Route path="user-settings" element={<UserSettings />} />
      </Routes>
    );
  }
  export default Router;