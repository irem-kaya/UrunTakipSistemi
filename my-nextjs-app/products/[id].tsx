import type { NextPage, GetServerSideProps } from 'next';
import axios from 'axios';

interface ProductProps {
    product: {
        id: number;
        name: string;
        description: string;
    };
}

const ProductDetail: NextPage<ProductProps> = ({ product }) => {
    if (!product) return <div>Product not found</div>;

    return (
        <div>
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <p>{product.description}</p>
        </div>
    );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { id } = context.params!;
    const res = await axios.get(`http://localhost:8080/api/products/${id}`);
    const product = res.data;

    return {
        props: { product },
    };
};

export default ProductDetail;
