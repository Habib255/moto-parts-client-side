import React from 'react';
import { toast } from 'react-toastify';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from 'react-hook-form';


const AddProduct = () => {
    const { register, reset, handleSubmit } = useForm();

    const [user] = useAuthState(auth)
    const onSubmit = async data => {

        const url = `https://thawing-waters-08691.herokuapp.com/product`
        fetch(url, {
            method: "POST",
            headers: {
                'content-type': 'application/json'

            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                toast.success('Product has been added succesfully')
                reset()

            })


    }
    return (
        <div className=' flex flex-col items-center w-96 '>
            <h4>add product here</h4>

            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col w-96  gap-2 mt-5 '>


                <div className="grid w-full min-w-xl">
                    <label className="label">
                        <span className="label-text">Product Name : </span>
                    </label>
                    <input {...register("name")} type="text" placeholder="Type here" className="input input-sm input-bordered w-full" />
                </div>
                <div className="grid w-full min-w-xl">
                    <label className="label">
                        <span className="label-text">Product Details : </span>
                    </label>
                    <textarea className="textarea textarea-info w-full w-full" {...register("details")} type="text" placeholder="Type here Details" />

                </div>
                <div className="grid w-full min-w-xl">
                    <label className="grid">
                        <span className="label-text">Available Quantity : </span>
                    </label>
                    <input {...register("availableQty")} type="text" placeholder="Type here available quantity" className="input input-sm input-bordered w-full" />
                </div>
                <div className="grid w-full min-w-xl">

                    <span className="label-text">Min.Order Quantity: </span>

                    <input {...register("minOrderQty")} type="text" placeholder="Type here minimum order quantity" className="input input-sm input-bordered w-full " />
                </div>
                <div className="grid w-full min-w-xl">
                    <label className="label">
                        <span className="label-text">Price :</span>
                    </label>
                    <input {...register("price")} type="text" placeholder="Type here price" className="input input-sm input-bordered w-full " />
                </div>
                <div className="grid w-full min-w-xl">
                    <label className="label">
                        <span className="label-text">image url :</span>
                    </label>
                    <input {...register("image")} type="text" placeholder="Type here price" className="input input-sm input-bordered w-full " />
                </div>
                <div className="grid w-full min-w-xl">
                    <label className="label">
                        <span className="label-text">Authorizer Email :</span>
                    </label>
                    <input {...register("authorizer")} type="text" name='email' value={user.email} disabled className="input input-sm input-bordered w-full " />

                </div>
                <div className="form-control mt-3">
                    <button type='submit' className="btn btn-primary">Add Product</button>
                </div>

            </form>
        </div>
    );
};

export default AddProduct;