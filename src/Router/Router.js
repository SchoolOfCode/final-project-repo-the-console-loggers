import {Route, Routes} from 'react-router-dom'
import FullRecipe from '../Pages/FullRecipe/FullRecipe'
import Home from '../Pages/Home/Home'
import Login from '../Pages/Login/Login'
import RecipeList from '../Pages/RecipeList/RecipeList'
import ShoppingList from '../Pages/ShoppingList/ShoppingList'
import UserSettings from '../Pages/UserSettings/UserSettings'

function Router() {
	return (
		<Routes>
			<Route path='home' element={<Home />} />
			<Route path='/' element={<Login />} />
			<Route path='RecipeList' element={<RecipeList />} />
			<Route path='ShoppingList' element={<ShoppingList />} />
			<Route path='FullRecipe' element={<FullRecipe />} />
			<Route path='UserSettings' element={<UserSettings />} />
		</Routes>
	)
}
export default Router
