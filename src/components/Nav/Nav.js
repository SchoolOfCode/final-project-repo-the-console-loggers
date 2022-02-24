import { Link, useLocation } from 'react-router-dom';

function Nav() {
  let location = useLocation();
  const pathWay = [
    {
      id: 1,
      path: '/Home',
      name: 'Home',
      activeImg: '/assets/icons/fridge-color.svg',
      noActiveImg: '/assets/icons/fridge.svg',
    },
    {
      id: 2,
      path: '/RecipeList',
      name: 'RecipeList',
      activeImg: '/assets/icons/recipes-color.svg',
      noActiveImg: '/assets/icons/recipes.svg',
    },
    {
      id: 3,
      path: '/ShoppingList',
      name: 'ShoppingList',
      activeImg: '/assets/icons/shopping-list-color.svg',
      noActiveImg: '/assets/icons/shopping-list.svg',
    },
    {
      id: 4,
      path: '/UserSettings',
      name: 'UserSettings',
      activeImg: '/assets/icons/settings-color.svg',
      noActiveImg: '/assets/icons/settings.svg',
    },
  ];

  return (
    <div className="nav-wrapper">
      <ul>
        {pathWay.map((item) => {
          return (
            <li key={item.id}>
              <Link className="link" to={item.name}>
                <img
                  className="icon"
                  src={
                    location.pathname === item.path
                      ? item.activeImg
                      : item.noActiveImg
                  }
                  alt={item.name}
                />
                <p>{item.name}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Nav;
