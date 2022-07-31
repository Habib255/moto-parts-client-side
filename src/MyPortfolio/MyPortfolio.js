import React from 'react';
import arif from '../bannerImage/arif.png'
import moto from '../bannerImage/moto.png'
import idle from '../bannerImage/idle.png'


const MyPortfolio = () => {
    return (
        <div className='mx-40  grid grid-cols-3 '>
            <div class="py-10 col-span-3 flex flex-col gap-2">
                <h2 className='font-bold text-3xl'> Name: Md Habibur Rahman</h2>
                <h2 className='font-bold text-xl'>Email: arhabib255@gmail.com</h2>
                <h2 className='font-bold text-base'>Profession: MERN STACK Developer</h2>
                <p className='font-bold text-base'>Education: Hsc from Dr. Khandaker Mosharraf Hossain College,</p>
                <p className='font-bold text-base'>Education: Bsc in CSE in Open university Bangladesh(1st semister)</p>
                <p className='font-bold text-base'>Skill : HTML, CSS, BOOTSTRAP,TAILWIND CSS, JAVASCRIPT,FIREBASE, REACT JS, NODE JS, EXPRESS JS, MONGODB.</p>

            </div>



            <div class="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={idle} alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title"> Idle training center</h2>
                    <p>this website is about a fitness training center.</p>
                    <div class="card-actions justify-end">
                        <a href="https://idle-trainer.web.app/" class="btn btn-primary"> visit Now</a>
                    </div>
                </div>
            </div>


            <div class="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={arif} alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">Arif electronics</h2>
                    <p>this is a warehouse related website where the authorizer take action of update/delete/add/quantity change  product</p>
                    <div class="card-actions justify-end">
                        <a href="https://arif-electronics.web.app/" class="btn btn-primary"> visit Now</a>
                    </div>
                </div>
            </div>

            <div class="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={moto} alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">Moto parts</h2>
                    <p>this is a manufacturer website where the product are produced and distribute visit the website to know more</p>
                    <div class="card-actions justify-end">
                        <a href="https://moto-parts-b0006.web.app/" class="btn btn-primary"> visit Now</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyPortfolio;