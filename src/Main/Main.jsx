import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Componentes/Shared/Footer/Footer';
import Header from '../Componentes/Shared/Header/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;