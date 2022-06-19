import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import Social from './Social';

const Register = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (

        <div class="hero min-h-screen bg-base-200">

            <div class="hero-content w-full lg:w-4/12 md:w-1/2">

                <div class="card w-full shadow-2xl bg-base-100">

                    <div class="card-body">
                        <h2 className='text-center text-3xl font-bold'>Register</h2>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" class="input input-bordered" />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" class="input input-bordered" />

                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Confirm Password</span>
                            </label>
                            <input type="text" placeholder="Retype password" class="input input-bordered" />
                            <label class="label">
                                <Link to="" class="label-text-alt link link-hover"> Forget Password</Link>
                            </label>
                        </div>
                        <div class="form-control mt-2">
                            <button class="btn btn-primary">Login</button>
                        </div>
                        <label class="label">
                            <Link to="/login" class="label-text-alt link link-hover">Already have an account?</Link>
                        </label>

                        <Social></Social>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Register;