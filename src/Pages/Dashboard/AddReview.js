import { useState } from "react";
import { FaStar } from "react-icons/fa";

const AddReview = () => {
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
        setCurrentValue = 0



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
            <textarea name='text'
                placeholder="What's your experience?"
                className="border bg-slate-900 rounded-md p-5 my-5 h-48 w-96"
            />

            <button onClick={handleSubmit} className="btn btn-accent w-full">Submit</button>

        </div>
    );
};

export default AddReview;