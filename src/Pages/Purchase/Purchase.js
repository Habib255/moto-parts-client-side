import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';

const Purchase = () => {
    const { id } = useParams()
    const [currentUser] = useAuthState(auth);
    const [product, setProduct] = useState({})
    const navigate = useNavigate()

    useEffect(() => {
        const url = `http://localhost:5000/product/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [product])

    const { _id, image, minOrderQty, name, price, availableQty, details } = product
    const [inputOrderQty, setInputOrderQty] = useState('')
    useEffect(() => { setInputOrderQty(minOrderQty) }, [minOrderQty])
    const totalPrice = inputOrderQty * price

    const orderInfo = (event) => {
        event.preventDefault()


        const amount = availableQty
        const newAvailableQty = parseInt(amount) - inputOrderQty

        // update product quantity after done order

        const url = `http://localhost:5000/updateProduct/${id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'

            },
            body: JSON.stringify({ newAvailableQty })
        })
            .then(res => res.json())
            .then(result => { setProduct(product) })
        toast(`ordered ${name} ${inputOrderQty} pcs`)


        //    get database collection object value for new orderCollection

        const orderInformation = {
            productId: _id,
            productName: name,
            orderQuantity: inputOrderQty,
            price: totalPrice,
            payment: '',
            image: image,
            name: event.target.name.value,
            email: currentUser.email,
            phone: event.target.phone.value,
            address: event.target.address.value,
            city: event.target.city.value,
            country: event.target.country.value
        }

        // create new collection on database for product which done order

        fetch('http://localhost:5000/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderInformation)
        })
            .then(res => res.json())
            .then(data => {
                toast('Your Order is Added to My order. Check Dashboard for further action ')
                navigate('/products')
            })
    };
    return (
        <>
            <div>
                <form className='grid grid-cols-1 lg:grid-cols-2 gap-10' onSubmit={orderInfo}>
                    <div className='flex justify-center lg:justify-end'>
                        <div className="card max-w-lg bg-base-100 shadow-xl py-5">
                            <h2 className="text-center text-xl font-bold">Order Details</h2>
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
                                <p>Total price: $ </p>
                                <input type="button" name='totalPrice' value={totalPrice} className='font-bold' />
                            </div>
                            <div className='flex justify-center  gap-x-5 pt-3 font-bold'>
                                <p>Enter Your Quantity</p>
                                <input type='number' name='quantity' onChange={(e) => setInputOrderQty(e.target.value)} value={inputOrderQty} className="w-20  bg-slate-200 text-slate-600 font-semibold rounded-md text-center" required />
                            </div>
                            <div className={inputOrderQty < minOrderQty || inputOrderQty > availableQty ? 'pt-2 block' : 'hidden'} >
                                <p className='text-center pt-2 font-bold text-red-500'>
                                    Enter Quantity between {minOrderQty} and {availableQty}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center lg:justify-start'>
                        <div className="card-body shadow-xl max-w-lg">
                            <h2 className="text-center text-xl font-bold">Receiver Information</h2>
                            <div className="form-control">

                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Enter your name" className="input input-bordered bg-slate-200 text-slate-600 font-semibold" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' value={currentUser.email} className="input  bg-slate-200 text-slate-600 font-semibold input-bordered" readOnly />


                            </div>
                            <div className="form-control">

                                <label className="label">
                                    <span className="label-text">Phone Number</span>
                                </label>
                                <input type="text" name='phone' placeholder="Enter your Phone Number" className="input bg-slate-200 text-slate-600 font-semibold input-bordered" required />
                            </div>
                            <div className="form-control">

                                <label className="label">
                                    <span className="label-text">Address</span>
                                </label>
                                <input type="text" name='address' placeholder="Enter Your address" className="input bg-slate-200 text-slate-600 font-semibold input-bordered" required />
                            </div>
                            <div className='grid  grid-cols-2 gap-x-3'>
                                <div className="form-control">

                                    <label className="label">
                                        <span className="label-text">City</span>
                                    </label>
                                    <input type="text" name='city' placeholder="Enter your City" className="input bg-slate-200 text-slate-600 font-semibold input-bordered" required />
                                </div>
                                <div className="form-control">

                                    <label className="label">
                                        <span className="label-text">Country</span>
                                    </label>
                                    <input type="text" name='country' placeholder="Enter your country" className="input  bg-slate-200 text-slate-600 font-semibold input-bordered" required />
                                </div>
                            </div>



                            <div className="form-control mt-6">
                                <button className={inputOrderQty < minOrderQty || inputOrderQty > availableQty ? 'btn btn-disabled text-white' : 'btn btn-primary'}>Place Order</button>
                            </div>


                        </div>
                    </div>
                </form>

            </div >
        </>
    );
};

export default Purchase;