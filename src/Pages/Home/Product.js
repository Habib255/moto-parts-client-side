import { queryByTestId } from '@testing-library/react';
import React from 'react';

const Product = (props) => {
    const { id, image, minOrderQty, name, price, details, availableQty
    } = props.product

    return (
        <div class="card w-96 bg-gray-700 shadow-xl">
            <figure class="px-10 pt-10">
                <img src={image} alt="Product-pic" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">Shoes</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div class="card-actions">
                    <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Product;