import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useQuery } from 'react-query'
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const MyProfile = () => {
    const [user] = useAuthState(auth)
    const { register, reset, handleSubmit } = useForm();


    const onSubmit = async data => {

        const url = `http://localhost:5000/user/${user.email}`
        fetch(url, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'

            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                toast.success('Profile has been updated succesfully')
                reset()

            })

    }

    const { data, isLoading, refetch, } = useQuery(['orders', user.email], () => fetch(`http://localhost:5000/user/${user.email}`, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))
    if (isLoading) {
        <Loading></Loading>
    }
    refetch()

    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>

            <div className='flex justify-center items-center'>
                <div class=" w-96 bg-base-100 shadow-xl">
                    <div class="card-body items-start text-center">
                        <h2 class="card-title">Name: {data?.name || user?.displayName}</h2>
                        <p>Email: {user?.email}</p>
                        <p>Role : {data?.role || 'General User'}</p>
                        <p>Phone: {data?.phone}</p>
                        <p>Education: {data?.education}</p>
                        <p>Locaiton: {data?.city}</p>
                        <p>Linkedin url: {data?.linkedin}</p>

                    </div>
                </div>
            </div>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div class="card gap-2 p-5 w-96 bg-base-100 shadow-xl">
                        <h2 className='text-xl font-bold'>Update your profile</h2>
                        <div className="form-control">

                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input {...register("name")} type="text" placeholder="Enter your name" className="input input-bordered bg-slate-200 text-slate-600 font-semibold" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone Number</span>
                            </label>
                            <input {...register("phone")} type="number" placeholder="Enter your Phone number" className="input input-bordered bg-slate-200 text-slate-600 font-semibold" required />


                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Education</span>
                            </label>
                            <input {...register("education")} type="text" name='education' placeholder="Enter your education" className="input input-bordered bg-slate-200 text-slate-600 font-semibold" required />


                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">City</span>
                            </label>
                            <input {...register("city")} type="text" placeholder="Enter your city" className="input input-bordered bg-slate-200 text-slate-600 font-semibold" required />


                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Linked In profile </span>
                            </label>
                            <input type="url" {...register("linkedin")} placeholder="Enter your linkedin url" className="input input-bordered bg-slate-200 text-slate-600 font-semibold" required />


                        </div>
                        <input className='btn btn-primary' type="submit" value="Update" />
                    </div>
                </form>
            </div>
        </div>

    );
};

export default MyProfile;