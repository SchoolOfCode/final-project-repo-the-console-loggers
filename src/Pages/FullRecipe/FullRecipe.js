import Button from '../../components/Ui/Button/Button'
import Checkbox from '../../components/Ui/Checkbox/Checkbox'
import { recipes } from '../../data/recipes'

const FullRecipe = ({
  name,
  cookingTime,
  fridgeIngredients,
  ingredients,
  serves,
  directions,
}) => {
  // const [selected, setSelected] = useState(false)
  // const [isChecked, setIsChecked] = useState(false)
  // const [buttonChecked, setButtonChecked] = useState(false)

  // const handleOnChange = () => {
  //   console.log('clicked')
  //   setIsChecked(!isChecked)
  //   setSelected(!selected)
  //   setButtonChecked(
  //     isChecked ? buttonChecked === true : buttonChecked === false
  //   )
  // }
  return (
    <div className='fullRecipe-card-wrapper'>
      <div className='card'>
        <div className='fullRecipe-main-card'>
          {recipes.map((item) => {
            return (
              <div key={item.id}>
                <img
                  className='big-img'
                  src={`${process.env.PUBLIC_URL}/assets/icons/food/${item.name}.png`}
                  alt={item.name}
                />
                <div className='texts'>
                  <h1 className='title'>{item.name}</h1>
                  <p className='cookingTime'>
                    {' '}
                    <strong>Cooking time:</strong> {item.cookingTime}
                  </p>
                  <p className='fridgeIngredients'>{item.fridgeIngredients}</p>
                  <p>
                    <strong>Serves:</strong> {item.serves}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
        <div className='ingredients'>
          <h4>Ingredients: </h4>
          {recipes[0].ingredients.map((ingredient) => {
            return (
              <p key={ingredient.foodId} className='ingredient'>
                <Checkbox />
                {ingredient.text}
              </p>
            )
          })}
        </div>
        <div className='directions'>
          <h4>Directions: </h4>
          {recipes[0].directions.map((step) => {
            return (
              <div key={step}>
                <p>
                  <strong>{step.substring(0, 6) + ')'}</strong>
                  {step.slice(6)}
                </p>
                <br />
              </div>
            )
          })}
        </div>
      </div>
      <div className='buttons-container'>
        <Button
          text='Add to Shopping List'
          backgroundColor='green-button'
          textColor='white'
          width='fullLength'
          icon='plus-icon'
        />
      </div>
    </div>
  )
}

export default FullRecipe

// <div></div>
