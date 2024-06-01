import RecipeItem from '../RecipeItem';
import './RecipeList.scss';

interface RecipeListProps {
    items: (string | { label?: string; time?: string; step?: string; detail?: string; value?: string })[];
}

const RecipeList = ({ items }: RecipeListProps) => (
    <>
        {items.map((item, index) => <RecipeItem key={index} item={item} />)}
    </>
);

export default RecipeList;
