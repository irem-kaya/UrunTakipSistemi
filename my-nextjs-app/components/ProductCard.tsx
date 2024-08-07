import React from 'react';

interface ProductCardProps {
    product: {
        id: number;
        name: string;
        description: string;
    };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
        <div className="border p-4 rounded-lg">
            <h2 className="text-xl font-bold">{product.name}</h2>
            <p>{product.description}</p>
        </div>
    );
};

export default ProductCard;
