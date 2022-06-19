import React from 'react';
import UseProducts from '../Hooks/UseProducts';
import Product from './Product';

const Products = () => {
    const [products] = UseProducts([])
    return (
        <div className=''>
            <div className='my-4'>
                <h2 className='font-bold text-center text-5xl'>All Products are here!</h2>
            </div>
            <div className='mx-7 space-y-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    products.map(product => <Product key="product.id" product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default Products;