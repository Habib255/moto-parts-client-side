import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    const { image, minOrderQty, name, price, details, availableQty
    } = product
    return (

        <div class="card w-96 bg-slate-700 shadow-xl">
            <figure className='h-5/12'><img src={image} alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title">{name}</h2>
                <p>{details.slice(0, 30)} . . .</p>
                <span>Price: ${price}</span>
                <span>Available Quantity: {availableQty}</span>
                <span>Minimum Order: {minOrderQty}</span>
                <div class="card-actions justify-end">
                    <Link to='/purchase' class="btn btn-primary">Buy Now</Link>
                </div>
            </div>
        </div>


    )
}

export default Product;