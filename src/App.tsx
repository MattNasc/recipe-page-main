import './App.scss';
import omelette from './assets/images/image-omelette.jpeg';

function App() {
  return (
    <main className='recipe'>
      <article className="recipe__card">
        <figure className="recipe__imageWrapper">
          <img className="recipe__image" src={omelette} alt="omelette" />
        </figure>
        <div className="recipe__body">
          <header className="recipe__header">
            <h1 className="recipe__title">Simple Omelette Recipe</h1>
            <p className="recipe__description">An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.</p>
          </header>
          <section className="recipe__prepareTime">
            <h2 className="recipe__listTitle">Preparation time</h2>
            <ul className="recipe__list">
              <li className="recipe__item">
                <p><span>Total: </span> Approximately 10 minutes</p>
              </li>
              <li className="recipe__item">
                <p><span>Preparation: </span> 5 minutes</p>
              </li>
              <li className="recipe__item">
                <p><span>Cooking: </span> 5 minutes</p>
              </li>
            </ul>
          </section>
          <section className="recipe__ingredients">
            <h2 className="recipe__subtitle">Ingredients</h2>
            <ul className="recipe__list">
              <li className="recipe__item">
                <p>2-3 large eggs</p>
              </li>
              <li className="recipe__item">
                <p>Salt, to taste</p>
              </li>
              <li className="recipe__item">
                <p>Pepper, to taste</p>
              </li>
              <li className="recipe__item">
                <p>1 tablespoon of butter or oil</p>
              </li>
              <li className="recipe__item">
                <p>Optional fillings: cheese, diced vegetables, cooked meats, herbs</p>
              </li>
            </ul>
          </section>
          <section className="recipe__instructions">
            <h2 className="recipe__subtitle">Instructions</h2>
            <ol className="recipe__listNumber">
              <li className="recipe__itemNumber">
                <p><span>Beat the eggs: </span> In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.</p>
              </li>
              <li className="recipe__itemNumber">
                <p><span>Heat the pan: </span> Place a non-stick frying pan over medium heat and add butter or oil.</p>
              </li>
              <li className="recipe__itemNumber">
                <p><span>Cook the omelette: </span> Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.</p>
              </li>
              <li className="recipe__itemNumber">
                <p><span>Add fillings (optional): </span> When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.</p>
              </li>
              <li className="recipe__itemNumber">
                <p><span>Fold and serve: </span> As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.</p>
              </li>
              <li className="recipe__itemNumber">
                <p><span>Enjoy: </span> Serve hot, with additional salt and pepper if needed.</p>
              </li>
            </ol>
          </section>
          <section className="recipe__nutrition">
            <h2 className="recipe__subtitle">Nutrition</h2>
            <p className="recipe__description">
              The table below shows nutritional values per serving without the additional fillings.
            </p>
            <div>
              <div className="recipe__nutrient">
                <p className="recipe__nutrientTitle">Calories</p>
                <p className="recipe__nutrientValue">277kcal</p>
              </div>
              <div className="recipe__nutrient">
                <p className="recipe__nutrientTitle">Carbs</p>
                <p className="recipe__nutrientValue">0g</p>
              </div>
              <div className="recipe__nutrient">
                <p className="recipe__nutrientTitle">Protein</p>
                <p className="recipe__nutrientValue">20g</p>
              </div>
              <div className="recipe__nutrient">
                <p className="recipe__nutrientTitle">Fat</p>
                <p className="recipe__nutrientValue">22g</p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}

export default App;
