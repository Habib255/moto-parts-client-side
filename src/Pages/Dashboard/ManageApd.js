import { async } from '@firebase/util';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify'



const ManageApd = ({ product }) => {
    const { _id, image, minOrderQty, name, price, details, availableQty
    } = product
    const { register, reset, handleSubmit } = useForm();
    const onSubmit = data => {



        fetch(`http://localhost:5000/product/${_id}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(data)

        }, [product])
            .then(res => res.json())
            .then(result => {
                if (result.modifiedCount > 0) {

                    toast.success('succesfully added qty')
                }

            })
        reset()



    }
    const handleDelete = () => {

        fetch(`http://localhost:5000/product/${_id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                if (result.deletedCount) {
                    toast.success(`${name} has been successfully deleted`)

                }
            })
    }



    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <figure>
                <img src={image} alt="Shoes" className="rounded-xl h-52 w-80" />
            </figure>
            <level className='alt-text text-center'> Available Quantity {availableQty}</level>
            <level className='alt-text text-center'> minimum order Quantity {minOrderQty}</level>
            <div class="card-body">
                <h2 class="card-title">
                    {name}
                    <div class="badge badge-secondary">Price ${price}</div>
                </h2>
                <p>{details}</p>
                <div className=' '>
                    <form onSubmit={handleSubmit(onSubmit)} action="" className='flex justify-center  gap-2' >
                        <input {...register("availableQty")} className='w-20 bg-slate-600 rounded' type="number" placeholder='Add Qty' />
                        <input {...register("minOrderQty")} className='w-20 bg-slate-600 rounded' type="number" placeholder='min order' />
                        <input type="submit" className='btn btn-xs' value="submit" />
                    </form>

                </div>
                <div class="card-actions justify-center mt-5">
                    <div class="btn btn-sm btn-error" onClick={handleDelete}>Delete Product</div>
                </div>
            </div>
        </div>
    );
};

export default ManageApd;