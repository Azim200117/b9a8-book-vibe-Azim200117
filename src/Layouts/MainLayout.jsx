// import React from 'react';
import { Outlet } from 'react-router-dom'

import Nav from "../Components/Nav";
// import Home from "../Pages/Home";
// import ListedBooks from "../Pages/ListedBooks";
// import PagesToRead from "../Pages/PagesToRead";

const MainLayout = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;