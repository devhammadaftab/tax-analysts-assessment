
import React from 'react';
import { Outlet } from 'react-router';
import { AppLayout } from '@/styles';
import Header from './Header';
import Footer from './Footer';


const Layout: React.FC = () => {
    return (
        <AppLayout>
            <Header/>
            <Outlet/>
            <Footer />
        </AppLayout>
    );
};

export default Layout;
