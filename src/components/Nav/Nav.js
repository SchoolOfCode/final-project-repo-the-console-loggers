import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div className="nav-wrapper">
      <nav>
        <ul>
          <li>
            <Link to="Home">
              <img
                className="icon"
                src={process.env.PUBLIC_URL + '/assets/icons/fridge.svg'}
                alt="Home"
              />
              Home
            </Link>
          </li>
          <li>
            <Link to="RecipeList">
              <img
                className="icon"
                src={process.env.PUBLIC_URL + '/assets/icons/recipes.svg'}
                alt="Recipe List"
              />
              Recipes
            </Link>
          </li>
          <li>
            <Link to="ShoppingList">
              <img
                className="icon"
                src={process.env.PUBLIC_URL + '/assets/icons/shopping-list.svg'}
                alt="Shopping List"
              />
              <p>Shopping List</p>
            </Link>
          </li>
          <li>
            <Link to="UserSettings">
              <img
                className="icon"
                src={process.env.PUBLIC_URL + '/assets/icons/settings.svg'}
                alt="Settings"
              />
              Settings
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
