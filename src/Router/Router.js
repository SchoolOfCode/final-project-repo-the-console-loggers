import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import RecipeList from "../Pages/RecipeList/RecipeList";
import ShoppingList from "../Pages/ShoppingList/ShoppingList";
import UserSettings from "../Pages/UserSettings/UserSettings";
import AddIngredient from "../Pages/AddIngredient/AddIngredient";
import AddItem from "../Pages/AddItem/AddItem";
import Login from "../Pages/Login/Login";
import FullRecipe from "../Pages/FullRecipe/FullRecipe";

function Router() {
  return (
    <Routes>
      <Route path="home" element={<Home />} />
      <Route path="/" element={<Login />} />
      <Route path="RecipeList" element={<RecipeList />} />
      <Route path="ShoppingList" element={<ShoppingList />} />
      <Route path="UserSettings" element={<UserSettings />} />
      <Route path="FullRecipe" element={<FullRecipe />} />
      <Route path="Home/AddIngredient" element={<AddIngredient />} />
      <Route path="ShoppingList/AddItem" element={<AddItem />} />
    </Routes>
  );
}
export default Router;
