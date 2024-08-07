import axios from 'axios';
import { useEffect, useState } from 'react';

const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get('/api/categories')
            .then(response => {
                setCategories(response.data);
            })
            .catch(error => {
                console.error('Error fetching categories:', error);
            });
    }, []);

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Categories</h1>
            <ul className="list-disc pl-5">
                {categories.map((category: { id: number; name: string }) => (
                    <li key={category.id} className="mb-2">{category.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Categories;
