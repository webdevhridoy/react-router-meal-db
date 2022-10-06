import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Meal from '../Meal/Meal';

const Meals = () => {
    const meals = useLoaderData();
    const newMeals = meals.meals;
    // console.log(newMeals);

    return (
        <div className='my-20'>
            <h2 className='text-3xl font-bold underline'>Meals Area Started</h2>
            <div className='grid md:grid-cols-3 grid-cols-1'>
                {
                    newMeals.map(meal => <Meal
                        key={meal.idMeal}
                        meal={meal}
                    ></Meal>)
                }
            </div>
        </div>
    );
};

export default Meals;