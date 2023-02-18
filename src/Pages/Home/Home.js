import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import AppointmentIntro from './AppointmentIntro/AppointmentIntro';
import Banner from './Banner/Banner';
import ContactUs from './ContactUs/ContactUs';
import Services from './Services/Services';
import Tag from './Tag/Tag';
import Testmonial from './Testmonial/Testmonial';


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Tag></Tag>
            <Services></Services>
            <AppointmentIntro></AppointmentIntro>
            <Testmonial></Testmonial>
            <ContactUs></ContactUs>
            
        </div>
    );
};

export default Home;