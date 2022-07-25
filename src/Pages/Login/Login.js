import React, { useEffect } from 'react';
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
    useEffect(() => {
        if (user) {
            return navigate(from, { replace: true });
        }
    }, [user, navigate, from])
    if (loading) {
        return <Loading></Loading>
    }


    if (error) {
        loginError = <p>{error.message}</p>
    }
    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password)
    }
    return (

        <div className="hero min-h-screen bg-base-200">

            <div className="hero-content w-5/6 lg:w-3/6 md:w-4/6 xl:w-4/12">

                <div className="card w-full shadow-2xl bg-base-100">

                    <div className="card-body">
                        <svg xmlns="http://www.w3.org/2000/svg" className=" place-self-center h-20 w-20" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                        </svg>

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" {...register("email", {
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
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" {...register("password", {
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

                                <label className="label">
                                    <Link to="" className="label-text-alt link link-hover"> Forget Password</Link>
                                </label>
                            </div>
                            <div className="form-control mt-3">
                                <button type='submit' className="btn btn-primary">Login</button>

                            </div>
                            <label className="label">
                                <span className="label-text text-red-300 ">{loginError}</span>
                            </label>
                        </form>

                        <label className="label">
                            <Link to="/register" className="label-text-alt link link-hover hover:text-primary">Don't Have any Account?</Link>
                        </label>

                        <Social></Social>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Login;