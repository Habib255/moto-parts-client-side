import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Product = ({ product }) => {
    const { _id, image, minOrderQty, name, price, details, availableQty
    } = product
    const navigate = useNavigate()
    const purchaseItem = id => {
        navigate(`/purchase/${id}`)
    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl h-52 w-80" />

            </figure>
            <div className="card-actions justify-between px-10 pt-4">
                <div className="badge badge-outline">In Stock {availableQty} pcs</div>
                <div className="badge badge-outline">Min. Order {minOrderQty} pcs</div>
            </div>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{details.slice(0, 30)} . . .</p>
                <h2 className='font-bold'> Price: $ {price}</h2>
                <div className="card-actions">
                    <button onClick={() => purchaseItem(_id)} className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>




    )
}

export default Product;