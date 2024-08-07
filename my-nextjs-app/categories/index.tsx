import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Categories: NextPage = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get('/api/categories')
            .then(response => setCategories(response.data))
            .catch(error => console.error('Error fetching categories:', error));
    }, []);

    return (
        <div>
            <h1 className="text-3xl font-bold">Categories</h1>
            <ul>
                {categories.map((category: any) => (
                    <li key={category.id}>{category.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Categories;
