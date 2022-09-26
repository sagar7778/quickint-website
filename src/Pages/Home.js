import React from 'react';
import CustomNavbar from '../components/CustomNavbar';
import DesignBanner from '../components/Banner/DesignBanner';
import Service from '../components/Service/Service';
import Subscribe from '../components/Subscribe';
import FooterTwo from '../components/Footer/FooterTwo';
import FooterData from '../components/Footer/FooterData';

export const Home = () => (
    <div className="body_wrapper">
        <CustomNavbar/>
        <DesignBanner/>
        <Service/>
        <Subscribe FooterData={FooterData}/>
        <FooterTwo FooterData={FooterData}/>
    </div>
)