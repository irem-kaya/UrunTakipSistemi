
import { useEffect, useState } from 'react';
import axios from "axios";

const Products = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('/api/products');
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
                // @ts-ignore
                setError(error);
            }
        };

        fetchProducts();
    }, []);

    if (error) {
        // @ts-ignore
        return <div>Error fetching products: {error.message}</div>;
    }

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Products</h1>
            <ul className="list-disc pl-5">
                {products.map((product: { id: number; name: string }) => (
                    <li key={product.id} className="mb-2">{product.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Products;
