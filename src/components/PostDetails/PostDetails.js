import React from 'react';
import { Link } from 'react-router-dom';

const PostDetails = ({ detail }) => {
    console.log(detail);
    const { strMeal, strCategory, strInstructions, strMealThumb, strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5, strTags, strArea } = detail;
    return (
        <div className='w-4/5 mx-auto mb-20'>
            <div className='mt-10 mb-5'>
                <hr /><h2 className='text-4xl font-semibold uppercase mt-5 text-teal-900'>{strMeal}</h2>
            </div>
            <div>
                <img className='w-screen mx-auto h-full object-cover' src={strMealThumb} alt="" />
                <div>
                    <div className='my-5 underline'>
                        <h2 className='uppercase text-teal-900'>Category: {strCategory}</h2>
                    </div>
                    <div className='flex justify-center items-center my-5'>
                        <p className='mx-5 border-b-teal-900 border-2 p-3'>{strIngredient1}</p>
                        <p className='mx-5 border-b-teal-900 border-2 p-3'>{strIngredient2}</p>
                        <p className='mx-5 border-b-teal-900 border-2 p-3'>{strIngredient3}</p>
                        <p className='mx-5 border-b-teal-900 border-2 p-3'>{strIngredient4}</p>
                        <p className='mx-5 border-b-teal-900 border-2 p-3'>{strIngredient5}</p>
                    </div>
                </div>
                <div className='my-5'>
                    <p className='text-lg'>{strInstructions}</p>
                </div>
                <div className='flex justify-between'>
                    <p className='text-xl font-semibold border-b-teal-accent-700 border-b-2 p-2'>Tags: {strTags}</p>
                    <p className='text-xl font-semibold border-b-teal-accent-700 border-b-2 p-2'>Area: {strArea}</p>
                </div>
            </div>
        </div>
    );
};

export default PostDetails;