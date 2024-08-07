import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

interface Product {
    id: number;
    name: string;
    price: number;
    explanation: string;
}

const ProductDetail: React.FC = () => {
    const router = useRouter();
    const { id } = router.query;
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (id) {
            axios.get(`http://localhost:8080/api/products/${id}`)
                .then(response => {
                    setProduct(response.data);
                    setLoading(false);
                })
                .catch(error => {
                    console.error('Error fetching product details:', error);
                    setError('Failed to load product details. Please try again later.');
                    setLoading(false);
                });
        }
    }, [id]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            {product && (
                <>
                    <h1>{product.name}</h1>
                    <p>Price: ${product.price.toFixed(2)}</p>
                    <p>{product.explanation}</p>
                </>
            )}
        </div>
    );
};

export default ProductDetail;
