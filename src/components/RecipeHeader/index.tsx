
interface RecipeHeaderProps {
    title: string;
    description: string;
}

const RecipeHeader = ({ title, description }: RecipeHeaderProps) => (
    <header className="recipe__header">
        <h1 className="recipe__title">{title}</h1>
        <p className="recipe__description">{description}</p>
    </header>
);

export default RecipeHeader;
