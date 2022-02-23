import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import RecipeList from "../Pages/RecipeList/RecipeList";
import ShoppingList from "../Pages/ShoppingList/ShoppingList";
import UserSettings from "../Pages/UserSettings/UserSettings";

function Router() {
  return (
    <Routes>
      <Route path="home" element={<Home />} />
      <Route path="RecipeList" element={<RecipeList />} />
      <Route path="ShoppingList" element={<ShoppingList />} />
      <Route path="UserSettings" element={<UserSettings />} />
    </Routes>
  );
}
export default Router;
