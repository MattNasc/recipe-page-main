
interface RecipeImageProps {
    src: string;
    alt: string;
}

const RecipeImage = ({ src, alt }: RecipeImageProps) => (
    <figure className="recipe__imageWrapper">
        <img className="recipe__image" src={src} alt={alt} />
    </figure>
);

export default RecipeImage;
