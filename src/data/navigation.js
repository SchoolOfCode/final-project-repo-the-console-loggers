export const pathWay = [
  {
    id: 1,
    path: "/Home",
    name: "Home",
    activeImg: "/assets/icons/fridge-color.svg",
    noActiveImg: "/assets/icons/fridge.svg",
  },
  {
    id: 2,
    path: "/RecipeList",
    name: "RecipeList",
    activeImg: "/assets/icons/recipes-color.svg",
    noActiveImg: "/assets/icons/recipes.svg",
  },
  {
    id: 3,
    path: "/ShoppingList",
    name: "ShoppingList",
    activeImg: "/assets/icons/shopping-list-color.svg",
    noActiveImg: "/assets/icons/shopping-list.svg",
  },
  {
    id: 4,
    path: "/UserSettings",
    name: "UserSettings",
    activeImg: "/assets/icons/settings-color.svg",
    noActiveImg: "/assets/icons/settings.svg",
  },
];

export const fridgeIngredients = [
  {
    id: 1,
    name: "Salmon",
    expiryDate: "27/2/2022",
    quantity: "2 fillets",
    isChecked: false,
  },
  {
    id: 2,
    name: "Eggs",
    expiryDate: "23/2/2022",
    quantity: "6 units",
    isChecked: true,
  },
  {
    id: 3,
    name: "Bananas",
    expiryDate: "28/2/2022",
    quantity: "5 units",
    isChecked: false,
  },
  {
    id: 4,
    name: "Carrots",
    expiryDate: "27/2/2022",
    quantity: "12 units",
    isChecked: false,
  },
  {
    id: 5,
    name: "Aubergine",
    expiryDate: "23/2/2022",
    quantity: "6 units",
    isChecked: true,
  },
  {
    id: 6,
    name: "Pepper",
    expiryDate: "28/2/2022",
    quantity: "5 units",
    isChecked: false,
  },
  {
    id: 7,
    name: "Watermelon",
    expiryDate: "27/2/2022",
    quantity: "1/2 unit",
    isChecked: false,
  },
  {
    id: 8,
    name: "Tacos",
    expiryDate: "23/2/2022",
    quantity: "2 units",
    isChecked: true,
  },
  {
    id: 9,
    name: "Tomato",
    expiryDate: "28/2/2022",
    quantity: "12 units",
    isChecked: false,
  },
];

export const recipes = [
  {
    id: 1,
    name: "Salmon with Potatoes",
    cookingTime: "45 minutes",
    fridgeIngredients: "2 out of 5 ingredients in Fridge",
    serves: "4 people",
    ingredients: [
      "1 pound baby Yukon Gold potatoes, halved",
      "2 tablespoons extra-virgin olive oil",
      "divided ¾ teaspoon salt",
      "divided ½ teaspoon ground pepper",
      "divided 12 ounces asparagus, trimmed",
      "2 tablespoons melted butter",
      "1 tablespoon lemon juice",
      "2 cloves garlic, minced",
      "1 ¼ pounds salmon fillet, skinned and cut into 4 portions",
      "Chopped parsley for garnish",
    ],
    directions: [
      " Instructions Checklist",
      "Step 1 , Preheat oven to 400 degrees F. Toss potatoes, 1 tablespoon oil, 1/4 teaspoon salt and 1/8 teaspoon pepper together in a medium bowl. Spread in an even layer on a large rimmed baking sheet. Roast until starting to soften and brown, about 15 minutes.",

      "Step 2 Meanwhile, toss asparagus with the remaining 1 tablespoon oil, 1/8 teaspoon salt and 1/8 teaspoon pepper in the medium bowl. Combine butter, lemon juice, garlic, 1/4 teaspoon salt and the remaining 1/4 teaspoon pepper in a small bowl.",

      "Step 3 Sprinkle salmon with the remaining 1/8 teaspoon salt. Move the potatoes to one side of the pan. Place the salmon in the center of the pan; drizzle with the butter mixture. Spread the asparagus on the empty side of the pan. Roast until the salmon is just cooked through and the vegetables are tender, 10 to 12 minutes. Garnish with parsley.",
    ],
  },
];

export const addFoodType = [
  { food: "Please select a food item..." },
  { food: "Apples" },
  { food: "Avacado" },
  { food: "Bacon" },
  { food: "Black beans" },
  { food: "Cheese" },
  { food: "Catfish" },
  { food: "Fish" },
  { food: "Hummus" },
  { food: "Tofu" },
];
