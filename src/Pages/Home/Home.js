import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import Banner from './Banner/Banner';
import Services from './Services/Services';
import Tag from './Tag/Tag';


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Tag></Tag>
            <Services></Services>
            
        </div>
    );
};

export default Home;