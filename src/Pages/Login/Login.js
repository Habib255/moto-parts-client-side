import React from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import Social from './Social';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate()
    let loginError
    const location = useLocation()
    let from = location.state?.from?.pathname || "/home";
    if (loading) {
        return <Loading></Loading>
    }
    if (user) {
        return navigate(from, { replace: true });

    }
    if (error) {
        loginError = <p>{error.message}</p>
    }
    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password)
    }
    return (

        <div class="hero min-h-screen bg-base-200">

            <div class="hero-content w-full lg:w-4/12 md:w-1/2">

                <div class="card w-full shadow-2xl bg-base-100">

                    <div class="card-body">
                        <svg xmlns="http://www.w3.org/2000/svg" className=" place-self-center h-20 w-20" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                        </svg>

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
                                <input type="password" placeholder="password" class="input input-bordered" {...register("password", {
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

                                <label class="label">
                                    <Link to="" class="label-text-alt link link-hover"> Forget Password</Link>
                                </label>
                            </div>
                            <div class="form-control mt-3">
                                <button type='submit' class="btn btn-primary">Login</button>

                            </div>
                            <label class="label">
                                <span class="label-text text-red-700 ">{loginError}</span>
                            </label>
                        </form>

                        <label class="label">
                            <Link to="/register" class="label-text-alt link link-hover">Don't Have any Account?</Link>
                        </label>

                        <Social></Social>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Login;