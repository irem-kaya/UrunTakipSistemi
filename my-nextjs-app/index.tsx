import { useEffect, useState } from 'react';
import axios from 'axios';

interface Category {
    id: number;
    name: string;
}

interface Product {
    id: number;
    name: string;
    category: Category;
    price: number;
}

const HomePage = () => {
    const [categories, setCategories] = useState<Category[]>([]);
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const categoriesResponse = await axios.get('/api/categories');
                setCategories(categoriesResponse.data);

                const productsResponse = await axios.get('/api/products');
                setProducts(productsResponse.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Product List</h1>

            <section>
                <h2 className="text-xl font-semibold mb-2">Categories</h2>
                <ul>
                    {categories.map((category) => (
                        <li key={category.id} className="mb-2">{category.name}</li>
                    ))}
                </ul>
            </section>

            <section className="mt-4">
                <h2 className="text-xl font-semibold mb-2">Products</h2>
                <ul>
                    {products.map((product) => (
                        <li key={product.id} className="mb-2">
                            {product.name} - ${product.price} - {product.category.name}
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
};

export default HomePage;
