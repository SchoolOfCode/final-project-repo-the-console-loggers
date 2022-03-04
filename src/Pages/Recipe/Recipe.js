import React from 'react'
import Button from '../../components/Ui/Button/Button'
import Checkbox from '../../components/Ui/Checkbox/Checkbox'
import { recipes } from '../../data/recipes'

function Recipe() {
  return (
    <div className='recipe-card-wrapper'>
      <div className='card'>
        <div className='recipe-main-card'>
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

export default Recipe
