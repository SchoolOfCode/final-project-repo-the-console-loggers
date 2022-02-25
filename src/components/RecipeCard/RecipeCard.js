import {useState} from 'react'
import {recipes} from '../../data/navigation'
import Button from '../Ui/Button/Button'
const RecipeCard = ({
	name,
	cookingTime,
	fridgeIngredients,
	ingredients,
	serves,
	directions,
}) => {
	const [expandedCard, setExpandedCard] = useState(false)

	//Open or close the expanded card
	const expandCard = () => {
		setExpandedCard(!expandedCard)
	}

	return (
		<div className='card-wrapper'>
			<div className='card'>
				<div className='main-card'>
					<img
						src={`${process.env.PUBLIC_URL}/assets/icons/food/${name}.svg`}
						alt={name}
					/>
					<div className='texts' onClick={expandCard}>
						<h1 className='title'>{name}</h1>
						<p className='cookingTime'>{cookingTime}</p>
						<p className='fridgeIngredients'>{fridgeIngredients}</p>
					</div>
				</div>
				<div
					className={`expanded-card-recipe ${
						expandedCard ? 'showCard' : 'hideCard'
					}`}>
					<div className='ingredients'>
						{recipes[0].ingredients.slice(0, 2).map(item => {
							return (
								<div key={item} className='ingredients-preview'>
									{item}
								</div>
							)
						})}{' '}
						...
					</div>

					<div className='buttons-container'>
						<Button
							text='Keep reading'
							backgroundColor='yellow-button'
							textColor='white'
						/>
						<Button
							text='Close'
							backgroundColor='transparent'
							textColor='green'
							handleClick={() => setExpandedCard()}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default RecipeCard
