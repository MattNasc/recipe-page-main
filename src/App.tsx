import './App.scss';
import omelette from './assets/images/image-omelette.jpeg';
import RecipeCard from './components/RecipeCard';

const App = () => {
  const recipeData = {
    title: 'Simple Omelette Recipe',
    description: 'An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.',
    image: omelette,
    prepareTime: [
      { label: 'Total', time: 'Approximately 10 minutes' },
      { label: 'Preparation', time: '5 minutes' },
      { label: 'Cooking', time: '5 minutes' },
    ],
    ingredients: [
      '2-3 large eggs',
      'Salt, to taste',
      'Pepper, to taste',
      '1 tablespoon of butter or oil',
      'Optional fillings: cheese, diced vegetables, cooked meats, herbs',
    ],
    instructions: [
      { step: 'Beat the eggs:', detail: 'In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.' },
      { step: 'Heat the pan:', detail: 'Place a non-stick frying pan over medium heat and add butter or oil.' },
      { step: 'Cook the omelette:', detail: 'Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.' },
      { step: 'Add fillings (optional):', detail: 'When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.' },
      { step: 'Fold and serve:', detail: 'As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.' },
      { step: 'Enjoy:', detail: 'Serve hot, with additional salt and pepper if needed.' },
    ],
    nutrition: [
      { label: 'Calories', value: '277kcal' },
      { label: 'Carbs', value: '0g' },
      { label: 'Protein', value: '20g' },
      { label: 'Fat', value: '22g' },
    ],
  };

  return (
    <main className='recipe'>
      <RecipeCard recipe={recipeData} />
    </main>
  );
};

export default App;
