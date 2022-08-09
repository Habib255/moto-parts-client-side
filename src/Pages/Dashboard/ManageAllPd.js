import React, { useState } from 'react';
import UseProducts from '../Hooks/UseProducts';
import ManageApd from './ManageApd';


const ManageAllPd = () => {
    const [products, pdLoading] = UseProducts([])

    return (
        <div className='flex flex-wrap justify-center gap-10 '>
            {
                products.map(product => <ManageApd key={product._id} product={product} pdLoading={pdLoading}></ManageApd>)
            }

        </div>
    );
};

export default ManageAllPd;