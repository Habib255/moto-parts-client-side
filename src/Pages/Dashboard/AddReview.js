import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { FaStar } from "react-icons/fa";
import { toast } from 'react-toastify'
import auth from "../../firebase.init";

const AddReview = () => {
    const [user] = useAuthState(auth)
    const colors = {
        orange: "#FFBA5A",
        grey: "#a9a9a9"

    };
    const [currentValue, setCurrentValue] = useState(0);
    const [hoverValue, setHoverValue] = useState(undefined);
    const stars = Array(5).fill(0)

    const handleClick = value => {
        setCurrentValue(value)
    }

    const handleMouseOver = newHoverValue => {
        setHoverValue(newHoverValue)
    };

    const handleMouseLeave = () => {
        setHoverValue(undefined)
    }
    const handleSubmit = (event) => {
        event.preventDefault()

        const review = {
            feedback: event.target.opinion.value,
            rating: currentValue,
            customer: user.displayName,
            email: user.email
        }
        const url = 'https://thawing-waters-08691.herokuapp.com/review'
        fetch(url, {
            method: "POST",
            headers: {
                'content-type': 'application/json'

            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                toast.success('Thanks for your Review')
                event.target.opinion.value = ''
                setCurrentValue(0)
            })


    }
    return (
        <div className="flex flex-col items-center mt-10">
            <h2 className="font-bold text-xl"> Let us know about your opinion </h2>
            <div className="flex flex-row mt-5">
                {stars.map((_, index) => <FaStar
                    key={index}
                    size={24}
                    onClick={() => handleClick(index + 1)}
                    onMouseOver={() => handleMouseOver(index + 1)}
                    onMouseLeave={handleMouseLeave}
                    color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
                    className='mr-3 cursor-pointer'
                />)}
            </div>
            <form onSubmit={handleSubmit}>
                <textarea name='opinion'
                    placeholder="What's your experience?"
                    className="border bg-slate-900 rounded-md p-5 my-5 h-48 w-96"
                />

                <input type='submit' value='submit' className="btn btn-accent w-full"></input>

            </form>
        </div >
    );
};

export default AddReview;