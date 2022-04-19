export const fridgeIngredients = [
  {
    id: 1,
    name: 'Salmon',
    expiryDate: '2022/2/1',
    quantity: '2 fillets',
    isChecked: false,
  },
  {
    id: 2,
    name: 'Eggs',
    expiryDate: '2024/2/9',
    quantity: '6 units',
    isChecked: true,
  },
  {
    id: 3,
    name: 'Bananas',
    expiryDate: '2022/10/23',
    quantity: '5 units',
    isChecked: false,
  },
  {
    id: 4,
    name: 'Carrots',
    expiryDate: '2022/7/27',
    quantity: '12 units',
    isChecked: false,
  },
  {
    id: 5,
    name: 'Aubergine',
    expiryDate: '2021/12/13',
    quantity: '6 units',
    isChecked: true,
  },
  {
    id: 6,
    name: 'Pepper',
    expiryDate: '2022/1/5',
    quantity: '5 units',
    isChecked: false,
  },
  {
    id: 7,
    name: 'Watermelon',
    expiryDate: '2023/12/4',
    quantity: '1/2 unit',
    isChecked: false,
  },
  {
    id: 8,
    name: 'Tacos',
    expiryDate: '2022/1/27',
    quantity: '2 units',
    isChecked: true,
  },
  {
    id: 9,
    name: 'Tomato',
    expiryDate: '2022/2/27',
    quantity: '12 units',
    isChecked: false,
  },
]



/*
- check the 'year'
- check the 'month'
- check the 'day'

  - exp year is more than / equal to current year
    - exp year is more than to current year (O)
    - exp year is equal to current year
      - exp month is more than current month (O)
      - exp month is equal to current month
        - exp day is more than current day(O)
        - else (X)
    

*/