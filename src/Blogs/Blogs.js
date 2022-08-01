import React from 'react';


const Blogs = () => {
    return (
        <div className=' grid grid-cols-1 lg:grid-cols-2 justify-center gap-6 items-center'>
            < div className="card  bg-base-100 shadow-xl" >
                <div className="card-body">
                    <h2 className="card-title"> <span className='font-bold text-slate-200'>Question: How will you improve the performance of a React Application?</span></h2>
                    <p><span className='font-bold text-slate-200'>Answer: </span> There are so many way to improve the performance of React Application. Some effective way are given bellow-</p>
                    <ul>
                        <li> Using React Fragment to avoid html tag wrappers.</li>
                        <li>Improving the app’s loading time by lazy loading Images</li>
                        <li>Immutable Data Structures</li>
                        <li>Avoiding Anonymous Functions</li>
                        <li> Avoiding using index key for map</li>
                        <li>Memorizing React components</li>
                        <li>Using CDN</li>
                        <li>Avoiding Props in Initial States</li>

                    </ul>

                </div>
            </div >
            < div className="card bg-base-100 shadow-xl" >
                <div className="card-body">
                    <h2 className="card-title"> <span className='font-bold text-slate-200'>Question: What are the different ways to manage a state in a React application?

                    </span></h2>
                    <p><span className='font-bold text-slate-200'>Answer: </span> There are four main types of state you need to properly manage in your React apps:</p>
                    <ul>
                        <li>Local state- Normally we use useState to manage date.useReducer also use here.</li>
                        <li> Global state -useState and  useReducer are normally use for it . it's little bit tricky to use by lifting state up and down by props </li>
                        <li> Server site state - useState and useEffect are use for fetching server site date.</li>
                        <li> URL state - useHistory and useLocation are use to manage url state.</li>
                    </ul>
                </div>
            </div>


            < div className="card bg-base-100 shadow-xl" >
                <div className="card-body">
                    <h2 className="card-title font-bold text-slate-200"> Question: Why you do not set the state directly in React. For example, if you have const[products, setProducts] = useState([]). Why you do not <br /> set products = [...] instead,  you use the setProducts</h2>
                    <p><span className='font-bold text-slate-200'>Answer: </span> If we declare product = [...] that means we assigned a const value. <br /> And when we need to set the value again we cant assing. it's tough to access value of product. But When We use setState/ setProduct <br /> it's normally assigned the value of product where needed.
                        We can set the value according to the state using set state. </p>

                </div>
            </div >
        </div>



    )
};

export default Blogs;