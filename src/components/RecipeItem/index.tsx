import React from 'react';
import './RecipeItem.scss';

interface RecipeItemProps {
    item: string | { label?: string; time?: string; step?: string; detail?: string; value?: string };
}

const RecipeItem: React.FC<RecipeItemProps> = ({ item }) => {
    if (typeof item === 'string') {
        return <li className="recipe__item">{item}</li>;
    }

    return (
        <li className="recipe__itemNumber">
            {item.label && <p><span>{item.label}: </span> {item.time || item.value || item.detail}</p>}
            {item.step && <p><span>{item.step}</span> {item.detail}</p>}
        </li>
    );
};

export default RecipeItem;
