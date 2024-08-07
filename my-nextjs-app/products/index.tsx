import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Products: NextPage = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('/api/products')
            .then(response => setProducts(response.data))
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    return (
        <div>
            <h1 className="text-3xl font-bold">Products</h1>
            <div>
                {products.map((product: any) => (
                    <div key={product.id}>
                        <h2 className="text-xl">{product.name}</h2>
                        <p>{product.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;
