export const pathWay = [
  {
    id: 1,
    path: ['/Home', '/Home/AddIngredient'],
    name: 'Home',
    activeImg: '/assets/icons/fridge-color.svg',
    noActiveImg: '/assets/icons/fridge.svg',
  },
  {
    id: 2,
    path: ['/RecipeList'],
    name: 'RecipeList',
    activeImg: '/assets/icons/recipes-color.svg',
    noActiveImg: '/assets/icons/recipes.svg',
  },
  {
    id: 3,
    path: ['/ShoppingList', '/ShoppingList/AddItem'],
    name: 'ShoppingList',
    activeImg: '/assets/icons/shopping-list-color.svg',
    noActiveImg: '/assets/icons/shopping-list.svg',
  },
  {
    id: 4,
    path: ['/UserSettings'],
    name: 'UserSettings',
    activeImg: '/assets/icons/settings-color.svg',
    noActiveImg: '/assets/icons/settings.svg',
  },
];

export const welcomeMessages = [
  { id: 1, path: '/', message: 'welcome' },
  { id: 2, path: '/Home', message: 'What ingredient shall we use today?' },
  {
    id: 3,
    path: '/Home/AddIngredient',
    message: 'Add what you have in your fridge!',
  },
  { id: 4, path: '/RecipeList', message: "Let's cook" },
  { id: 5, path: '/FullRecipe', message: 'Yummyyy' },
  { id: 6, path: '/ShoppingList', message: 'Buy wisely, do not waste it' },
  {
    id: 7,
    path: '/ShoppingList/AddItem',
    message: 'Add what you need to buy',
  },
  { id: 8, path: '/UserSettings', message: 'Change me how you like!' },
];
