import React from 'react';
import { Link, Outlet, useLoaderData } from 'react-router-dom';
import Header from '../components/Header/Header';
import logo from '../logo.png';

const Main = () => {
    const navs = useLoaderData();
    const categories = navs.categories;
    return (
        <div>
            <div className='flex justify-center items-center py-5'>
                <Link to='/'><img src={logo} alt="" /></Link>
            </div>
            <div className='flex justify-center items-center my-5'>
                {
                    categories.map(category => <Header
                        key={categories.strCategory}
                        category={category}
                    ></Header>)
                }
            </div>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Main;