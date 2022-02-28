
import { recipes } from '../../data/recipes';
// import FullRecipe from '../../Pages/FullRecipe/FullRecipe'
import Button from '../../components/Ui/Button/Button'

const FullRecipe = ({
  name,
  cookingTime,
  fridgeIngredients,
  ingredients,
  serves,
  directions,
}) => {


	return (
		<div className='card-wrapper'>
			<div className='card'>
				<div className='fullRecipe-main-card'>
					{recipes.map(item =>{
						return (
							<div>
					<img
						src={`${process.env.PUBLIC_URL}/assets/icons/food/${item.name}.svg`}
						alt={item.name}
					/>
					<div className='texts' >
						<h1 className='title'>{item.name}</h1>
						<p className='cookingTime'> Cooking time: {item.cookingTime}</p>
						<p className='fridgeIngredients'>{item.fridgeIngredients}</p>
					</div>
				</div>
				
						)
					})}
					</div>
				<div className='ingredients'>
						{recipes[0].ingredients.map(item => {
							return (
								<div key={item} className='ingredients-preview'>
									{item}
								</div>
							)
						})}
					</div>


          <div className="buttons-container">

              <Button
                text="Add to Shopping List"
                backgroundColor="green-button"
                textColor="white"
                width="FullLength"
              />
           
          </div>
        </div>
      </div>

  );
};

export default FullRecipe