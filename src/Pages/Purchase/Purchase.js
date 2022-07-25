import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';



const Purchase = () => {
    const { id } = useParams()
    const [product, setProduct] = useState({})
    useEffect(() => {
        fetch(`http://localhost:5000/product/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [product])

    const { _id, image, minOrderQty, name, price, details, availableQty
    } = product
    const [totalPrice, setTotalPrice] = useState(price)
    const [totalQuantity, setTotalQuantity] = useState()
    const [currentUser] = useAuthState(auth);

    // const orderInfo = (event) => {
    //     event.preventDefault()
    //     const orderInformation = {
    //         totalPrice: event.target.totalPrice.value,
    //         totalQuantity: event.target.quantity.value,
    //         name: event.target.name.value,
    //         email: event.target.email.value,
    //         phone: event.target.phone.value,
    //         address: event.target.address.value,
    //         city: event.target.city.value,
    //         country: event.target.country.value
    //     }
    //     console.log(orderInformation)
    //     fetch('http://localhost:5000/order', {
    //         method: 'POST',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify
    //     })
    //         .then(res => res.json())
    //         .then(data => console.log(data))

    // }


    const addItem = (event) => {
        event.preventDefault()

        const pdOldQuantity = minOrderQty
        const addedItem = parseInt(pdOldQuantity) + 10

        setTotalQuantity(addedItem)
        const pdPrice = totalQuantity * price
        setTotalPrice(pdPrice)
    }
    const minusItem = (event) => {
        event.preventDefault()
        const subsItem = minOrderQty - 10
        setTotalQuantity(subsItem)
        const pdPrice = totalQuantity * price
        setTotalPrice(pdPrice)

    }

    return (
        <>
            <div>
                <form className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
                    <div className='flex justify-center lg:justify-end'>

                        <div className="card max-w-lg bg-base-100 shadow-xl pb-5">
                            <div className="flex flex-col min-w-fit  px-8 pt-8  ">
                                <img src={image} alt="Shoes" className=" rounded-xl lg:h-50 " />
                                <div className="card-actions justify-between pt-4">
                                    <div className="badge badge-outline">In Stock {availableQty} pcs</div>
                                    <div className="badge badge-outline">Min.Order {minOrderQty} pcs</div>
                                </div>
                            </div>

                            <div className="flex flex-col items-center text-center">
                                <div>
                                    <h2 className="card-title">{name}</h2>
                                    <h2 className="font-bold text-lg"> Price: ${price}</h2>
                                </div>
                                <p>{details}</p>
                            </div>
                            <div className='flex justify-center pt-3 font-bold'>
                                <p>Total price: $</p>
                                <input type="button" name='totalPrice' className='font-bold' value={totalPrice} />
                            </div>
                            <div className='flex justify-center gap-x-5 pt-3 font-bold'>
                                <p>Set Quantity</p>
                                <button className='btn btn-sm btn-primary' onClick={minusItem}>
                                    <FontAwesomeIcon icon={faMinus}></FontAwesomeIcon>
                                </button>

                                <input type="" name='quantity' value={totalQuantity} className="w-12 bg-slate-600 rounded-md text-center" />


                                <button className='btn btn-sm btn-primary' onClick={addItem} >
                                    <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
                                </button>
                            </div>

                        </div>

                    </div>
                    <div className='flex justify-center lg:justify-start'>
                        <div className="card-body shadow-xl max-w-lg">
                            <h2 className="text-center text">Order Information</h2>
                            <div className="form-control">

                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Enter your name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' value={currentUser.email} readOnly className="input input-bordered" />


                            </div>
                            <div className="form-control">

                                <label className="label">
                                    <span className="label-text">Phone Number</span>
                                </label>
                                <input type="text" name='phone' placeholder="Enter your Phone Number" className="input input-bordered" required />
                            </div>
                            <div className="form-control">

                                <label className="label">
                                    <span className="label-text">Address</span>
                                </label>
                                <input type="text" name='address' placeholder="Enter Your address" className="input input-bordered" required />
                            </div>
                            <div className='grid  grid-cols-2 gap-x-3'>
                                <div className="form-control">

                                    <label className="label">
                                        <span className="label-text">City</span>
                                    </label>
                                    <input type="text" name='city' placeholder="Enter your City" className="input input-bordered" required />
                                </div>
                                <div className="form-control">

                                    <label className="label">
                                        <span className="label-text">Country</span>
                                    </label>
                                    <input type="text" name='country' placeholder="Enter your country" className="input input-bordered" required />
                                </div>
                            </div>



                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Place Order</button>
                            </div>


                        </div>
                    </div>
                </form>

            </div >
        </>
    );
};

export default Purchase;