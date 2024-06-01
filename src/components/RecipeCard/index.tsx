
import RecipeHeader from '../RecipeHeader';
import RecipeImage from '../RecipeImage';
import RecipeList from '../RecipeList';
import RecipeSection from '../RecipeSection';
import './RecipeCard.scss';

interface RecipeCardProps {
    recipe: {
        title: string;
        description: string;
        image: string;
        prepareTime: { label: string; time: string }[];
        ingredients: string[];
        instructions: { step: string; detail: string }[];
        nutrition: { label: string; value: string }[];
    };
}

const RecipeCard = ({ recipe }: RecipeCardProps) => (
    <article className="recipe__card">
        <RecipeImage src={recipe.image} alt="omelette" />
        <div className="recipe__body">
            <RecipeHeader title={recipe.title} description={recipe.description} />
            <RecipeSection title="Preparation time">
                <RecipeList items={recipe.prepareTime} />
            </RecipeSection>
            <RecipeSection title="Ingredients">
                <RecipeList items={recipe.ingredients} />
            </RecipeSection>
            <RecipeSection title="Instructions" ordered>
                <RecipeList items={recipe.instructions} />
            </RecipeSection>
            <RecipeSection title="Nutrition">
                <p>The table below shows nutritional values per serving without the additional fillings.</p>
                <RecipeList items={recipe.nutrition} />
            </RecipeSection>
        </div>
    </article>
);

export default RecipeCard;
