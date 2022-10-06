import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = ({ category }) => {
    // console.log(category);
    const { strCategory } = category;

    return (
        <div>
            <div>
                <NavLink className={({ isActive }) => isActive ? 'text-blue-900 font-extrabold ml-5 text-3xl duration-300 ease-in-out' : 'decoration-solid ml-5 text-2xl'} to={`/meals/${strCategory}`} > {strCategory}</NavLink>
            </div>
        </div>
    );
};

export default Header;