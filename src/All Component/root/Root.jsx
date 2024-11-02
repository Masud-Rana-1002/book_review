import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from "../Header/NavBar";

const Root = () => {
    return (
        <div>
           <div className='container mx-auto pt-4 w-11/12'>
           <NavBar></NavBar>
           <Outlet></Outlet>
           </div>
        </div>
    );
};

export default Root;