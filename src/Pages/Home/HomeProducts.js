import React from 'react';
import UseProducts from '../Hooks/UseProducts';
import Product from '../Products/Product';

const HomeProducts = () => {
    const [products] = UseProducts([])
    const someProduct = products.slice(0, 6)
    return (
        <div className='ml-5 mt-10'>
            <div>
                <h2 className='text-center font-bold text-3xl'>Let's have a look some of our Product</h2>
            </div>
            <div className=' mt-10 flex flex-wrap gap-10'>
                {
                    someProduct.map(product => <Product key="product.id" product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default HomeProducts;