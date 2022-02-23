import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div className="nav-wrapper">
      <ul>
        <li>
          <Link className="link" to="Home">
            <img
              className="icon"
              src={process.env.PUBLIC_URL + '/assets/icons/fridge.svg'}
              alt="Home"
            />
            <p>Home</p>
          </Link>
        </li>
        <li>
          <Link className="link" to="RecipeList">
            <img
              className="icon"
              src={process.env.PUBLIC_URL + '/assets/icons/recipes.svg'}
              alt="Recipe List"
            />
            <p> Recipes</p>
          </Link>
        </li>
        <li>
          <Link className="link" to="ShoppingList">
            <img
              className="icon"
              src={process.env.PUBLIC_URL + '/assets/icons/shopping-list.svg'}
              alt="Shopping List"
            />
            <p>Shopping List</p>
          </Link>
        </li>
        <li>
          <Link className="link" to="UserSettings">
            <img
              className="icon"
              src={process.env.PUBLIC_URL + '/assets/icons/settings.svg'}
              alt="Settings"
            />
            <p> Settings</p>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
