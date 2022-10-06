import React from 'react';
import { useNavigate } from "react-router-dom";


const Meal = ({ meal }) => {
    // console.log(meal);
    const { idMeal, strMeal, strMealThumb } = meal;
    const navigate = useNavigate();

    const handlerDetails = () => {
        navigate(`/post/${idMeal}`);
    };

    return (
        <div>
            <div className='m-5 text-center p-3'>
                <img src={strMealThumb} alt="" />
                <div className='my-3'>
                    <h2 className='text-3xl font-semibold my-3'>Title: {strMeal}</h2>
                    <button onClick={handlerDetails} className='bg-teal-500 text-white font-bold rounded px-3 py-3 '>View Details</button>
                </div>
            </div>
        </div>
    );
};

export default Meal;