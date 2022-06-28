import React from 'react';
import UseProducts from '../Hooks/UseProducts';

const Purchase = () => {
    const [products] = UseProducts([])

    return (
        <div>
            <div class="card lg:card-side bg-base-100 shadow-xl">
                <figure><img alt="Album" /></figure>
                <div class="card-body">
                    <h2 class="card-title">New album is released!</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">Listen</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;