import React from 'react';
import UseProducts from '../Hooks/UseProducts';
import Product from '../Products/Product';

const Products = () => {
    const [products] = UseProducts([])
    return (
        <div className='ml-5'>
            <div className='my-10'>
                <h2 className='font-bold text-center text-5xl'>All Products are here!</h2>
            </div>
            <div className='flex flex-wrap justify-center gap-10'>
                {
                    products.map(product => <Product key={product._id} product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default Products;