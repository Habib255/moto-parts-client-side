import React from 'react';
import arif from '../bannerImage/arif.png'
import moto from '../bannerImage/moto.png'
import idle from '../bannerImage/idle.png'


const MyPortfolio = () => {
    return (
        <div className='container mx-auto  grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3'>
            <div className="py-10 col-span-1 lg:col-span-2 xl:col-span-3 flex flex-col gap-2">
                <h2 className='font-bold text-3xl'> Name: Md Habibur Rahman</h2>
                <h2 className='font-bold text-xl'>Email: arhabib255@gmail.com</h2>
                <h2 className='font-bold text-base'>Profession: MERN STACK Developer</h2>
                <p className='font-bold text-base'>Education: Hsc from Dr. Khandaker Mosharraf Hossain College,</p>
                <p className='font-bold text-base'>Education: Bsc in CSE in Open university Bangladesh(1st semister)</p>
                <p className='font-bold text-base'>Skill : HTML, CSS, BOOTSTRAP,TAILWIND CSS, JAVASCRIPT,FIREBASE, REACT JS, NODE JS, EXPRESS JS, MONGODB.</p>

            </div>



            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={idle} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title"> Idle training center</h2>
                    <p>this website is about a fitness training center.</p>
                    <div className="card-actions justify-end">
                        <a href="https://idle-trainer.web.app/" className="btn btn-primary"> visit Now</a>
                    </div>
                </div>
            </div>


            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={arif} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Arif electronics</h2>
                    <p>this is a warehouse related website where the authorizer take action of update/delete/add/quantity change  product</p>
                    <div className="card-actions justify-end">
                        <a href="https://arif-electronics.web.app/" className="btn btn-primary"> visit Now</a>
                    </div>
                </div>
            </div>

            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={moto} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Moto parts</h2>
                    <p>this is a manufacturer website where the product are produced and distribute visit the website to know more</p>
                    <div className="card-actions justify-end">
                        <a href="https://moto-parts-b0006.web.app/" className="btn btn-primary"> visit Now</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyPortfolio;