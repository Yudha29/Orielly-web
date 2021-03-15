import React from "react";
import CategoryCardProps from "./CategoryCardProps";

const CategoryCard: React.FC<CategoryCardProps> = props => {
    return (
        <div className="w-2/12 p-1">
            <div
                className="h-52 w-full rounded-md"
                style={{
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundImage: `url(assets/categories/${props.data.picture})`
                }}
            />
            <p className="text-gray-600 font-bold pt-2 pb-3 text-sm text-center">{props.data.name}</p>
        </div>
    );
}

export default CategoryCard;