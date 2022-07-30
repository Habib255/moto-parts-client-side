
import React, { useEffect } from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useToken from '../Hooks/useToken';
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
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";

    const [token] = useToken(user)
    if (loading || updating) {
        <Loading></Loading>
    }
    useEffect(() => {
        if (token) {
            return navigate(from, { replace: true });
        }
    }, [token, navigate, from])


    if (error || updateError) {
        createUserError = <p className='text-red-300'>{error.message}</p>

    }
    const onSubmit = async data => {
        await createUserWithEmailAndPassword(data.email, data.password)
        await updateProfile({ displayName: data.name })
    };
    return (

        <div className="hero min-h-screen bg-base-200">

            <div className="hero-content w-5/6 lg:w-3/6 md:w-4/6 xl:w-4/12">

                <div className="card w-full shadow-2xl bg-base-100">

                    <div className="card-body">
                        <svg xmlns="http://www.w3.org/2000/svg" className="place-self-center h-20 w-20" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
                        </svg>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control">

                                <input type="text" placeholder="User Name" className="input input-bordered" {...register("name", {
                                    required: {
                                        value: true, message: 'Name is required'
                                    },
                                    pattern: {
                                        value: /^[A-Za-z]/,
                                        message: 'Enter a valid name'
                                    }
                                })} />
                                <label className="label">
                                    {errors.name && <span className="label-text text-red-300 ">{errors.name.message}</span>}
                                </label>
                            </div>
                            <div className="form-control">

                                <input type="text" placeholder="Email" className="input input-bordered" {...register("email", {
                                    required: {
                                        value: true, message: 'Email is required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Enter a valid Email'
                                    }
                                })} />
                                <label className="label">
                                    {errors.email && <span className="label-text text-red-300 ">{errors.email.message}</span>}
                                </label>
                            </div>
                            <div className="form-control">

                                <input name='password' type="password" placeholder="Password" className="input input-bordered" {...register("password", {
                                    required: {
                                        value: true, message: 'password is required'
                                    },
                                    pattern: {
                                        value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                                        message: 'Password contains 8 character & min 1 letter'
                                    }
                                })} />
                                <label className="label">
                                    {errors.password && <span className="label-text text-red-300 ">{errors.password.message}</span>}
                                </label>

                            </div>
                            <div className="form-control">

                                <input type="password" placeholder="Confirm Password" className="input input-bordered" {...register("confirmPassword", {
                                    required: 'confirm password is required',
                                    validate: (value) =>
                                        value === password || 'Both password should match'

                                })} />
                                <label className="label">

                                    {errors.confirmPassword && <span className="label-text text-red-300 ">{errors.confirmPassword.message}</span>}

                                </label>


                            </div>
                            <div className="form-control mt-3">
                                <button type='submit' className="btn btn-primary">Create Account</button>
                            </div>
                        </form>
                        {createUserError}
                        <label className="label">
                            <Link to="/login" className="label-text-alt link link-hover">Already Have an Account ?</Link>
                        </label>

                        <Social></Social>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Register;