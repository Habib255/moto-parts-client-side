import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import Social from './Social';

const Register = () => {
    const [passError, setPassError] = useState('')
    const navigate = useNavigate()
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    let createUserError;
    if (loading) {
        <Loading></Loading>
    }

    if (user) {
        return navigate('/home')
    }
    if (error) {
        createUserError = <p className='text-red-500'>{error.message}</p>

    }
    const onSubmit = data => {
        if (data.password !== data.confirmPassword) {
            return setPassError('Both Password should match')
        }
        setPassError('')
        createUserWithEmailAndPassword(data.email, data.password)
    };

    return (

        <div class="hero min-h-screen bg-base-200">

            <div class="hero-content w-full lg:w-4/12 md:w-1/2">

                <div class="card w-full shadow-2xl bg-base-100">

                    <div class="card-body">
                        <h2 className='text-center text-4xl font-bold'>Register</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" class="input input-bordered" {...register("email", {
                                    required: {
                                        value: true, message: 'Email is required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Enter a valid Email'
                                    }
                                })} />
                                <label class="label">
                                    {errors.email && <span class="label-text text-red-700 ">{errors.email.message}</span>}
                                </label>
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Password</span>
                                </label>
                                <input name='password' type="password" placeholder="password" class="input input-bordered" {...register("password", {
                                    required: {
                                        value: true, message: 'password is required'
                                    },
                                    pattern: {
                                        value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                                        message: 'Password contains 8 character & min 1 letter'
                                    }
                                })} />
                                <label class="label">
                                    {errors.password && <span class="label-text text-red-700 ">{errors.password.message}</span>}
                                </label>


                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Confirm Password</span>
                                </label>
                                <input type="password" placeholder="Confirm Password" class="input input-bordered" {...register("confirmPassword", {
                                    required: {
                                        value: true, message: 'Confirm password is required'
                                    },


                                })} />
                                <label class="label">
                                    {errors.confirmPassword && <span class="label-text text-red-700 ">{errors.confirmPassword.message}</span>}

                                    <span class="label-text text-red-700 ">{passError}</span>
                                </label>


                            </div>
                            <div class="form-control mt-3">
                                <button type='submit' class="btn btn-primary">Register</button>
                            </div>
                        </form>
                        {createUserError}
                        <label class="label">
                            <Link to="/login" class="label-text-alt link link-hover">Already Registered ?</Link>
                        </label>

                        <Social></Social>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Register;