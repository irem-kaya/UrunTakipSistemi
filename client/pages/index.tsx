import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Product {
    id: number;
    name: string;
    price: number;
    explanation: string;
}

interface Category {
    id: number;
    name: string;
}

const HomePage: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [categories, setCategories] = useState<Category[]>([]);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [loadingProducts, setLoadingProducts] = useState<boolean>(true);
    const [loadingCategories, setLoadingCategories] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        axios.get('http://localhost:8080/api/products')
            .then(response => {
                setProducts(response.data);
                setLoadingProducts(false);
            })
            .catch(error => {
                console.error('Error fetching products:', error);
                setError('Failed to load products. Please try again later.');
                setLoadingProducts(false);
            });

        axios.get('http://localhost:8080/api/categories')
            .then(response => {
                setCategories(response.data);
                setLoadingCategories(false);
            })
            .catch(error => {
                console.error('Error fetching categories:', error);
                setError('Failed to load categories. Please try again later.');
                setLoadingCategories(false);
            });
    }, []);

    if (loadingProducts || loadingCategories) return <p>Loading...</p>;
    if (error) return <p className="error">{error}</p>;

    return (
        <div>
            <h1>Products</h1>
            <table className="product-table">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Details</th>
                </tr>
                </thead>
                <tbody>
                {products.map(product => (
                    <tr key={product.id}>
                        <td>{product.id}</td>
                        <td>{product.name}</td>
                        <td>${product.price.toFixed(2)}</td>
                        <td>
                            <button onClick={() => setSelectedProduct(product)}>
                                View Details
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>

            <h1 className="category-title">Categories</h1>
            <table className="category-table">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                </tr>
                </thead>
                <tbody>
                {categories.map(category => (
                    <tr key={category.id}>
                        <td>{category.id}</td>
                        <td>{category.name}</td>
                    </tr>
                ))}
                </tbody>
            </table>

            {selectedProduct && (
                <div className="product-detail">
                    <h2>Product Details</h2>
                    <p><strong>ID:</strong> {selectedProduct.id}</p>
                    <p><strong>Name:</strong> {selectedProduct.name}</p>
                    <p><strong>Price:</strong> ${selectedProduct.price.toFixed(2)}</p>
                    <p><strong>Explanation:</strong> {selectedProduct.explanation}</p>
                    <button onClick={() => setSelectedProduct(null)}>Close Details</button>
                </div>
            )}
        </div>
    );
};

export default HomePage;
