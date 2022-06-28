
import React from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import Social from './Social';

const Register = () => {
    const navigate = useNavigate()
    const { register, formState: { errors }, handleSubmit, watch } = useForm();
    const password = watch('password')
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    let createUserError;
    if (loading) {
        <Loading></Loading>
    }
    if (user) {
        console.log(user)
        return navigate('/home')

    }
    if (error) {
        createUserError = <p className='text-red-500'>{error.message}</p>

    }
    const onSubmit = async data => {
        await createUserWithEmailAndPassword(data.email, data.password)
        await updateProfile({ displayName: data.name })
    };
    return (

        <div class="hero min-h-screen bg-base-200">

            <div class="hero-content w-full lg:w-4/12 md:w-1/2">

                <div class="card w-full shadow-2xl bg-base-100">

                    <div class="card-body">
                        <svg xmlns="http://www.w3.org/2000/svg" className="place-self-center h-20 w-20" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
                        </svg>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div class="form-control">

                                <input type="text" placeholder="User Name" class="input input-bordered" {...register("name", {
                                    required: {
                                        value: true, message: 'Name is required'
                                    },
                                    pattern: {
                                        value: /^[A-Za-z]/,
                                        message: 'Enter a valid name'
                                    }
                                })} />
                                <label class="label">
                                    {errors.name && <span class="label-text text-red-700 ">{errors.name.message}</span>}
                                </label>
                            </div>
                            <div class="form-control">

                                <input type="text" placeholder="Email" class="input input-bordered" {...register("email", {
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

                                <input name='password' type="password" placeholder="Password" class="input input-bordered" {...register("password", {
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

                                <input type="password" placeholder="Confirm Password" class="input input-bordered" {...register("confirmPassword", {
                                    required: 'confirm password is required',
                                    validate: (value) =>
                                        value === password || 'Both password should match'

                                })} />
                                <label class="label">

                                    {errors.confirmPassword && <span class="label-text text-red-700 ">{errors.confirmPassword.message}</span>}

                                </label>


                            </div>
                            <div class="form-control mt-3">
                                <button type='submit' class="btn btn-primary">Create Account</button>
                            </div>
                        </form>
                        {createUserError}
                        <label class="label">
                            <Link to="/login" class="label-text-alt link link-hover">Already Have an Account ?</Link>
                        </label>

                        <Social></Social>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Register;