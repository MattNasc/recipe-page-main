import React from 'react';

interface RecipeSectionProps {
    title: string;
    children: React.ReactNode;
    ordered?: boolean;
}

const RecipeSection = ({ title, children, ordered = false }: RecipeSectionProps) => (
    <section className="recipe__section">
        <h2 className="recipe__subtitle">{title}</h2>
        {ordered ? <ol className="recipe__listNumber">{children}</ol> : <ul className="recipe__list">{children}</ul>}
    </section>
);

export default RecipeSection;
