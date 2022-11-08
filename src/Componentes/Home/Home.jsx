import React from 'react';
import Banner from '../Banner/Banner';
import ContactHero from '../ContactHero/ContactHero';
import PricingPlan from '../PricingPlan/PricingPlan';
import HomeService from '../Services/HomeService/HomeService';
const Home = () => {
    return (
       <div>
        <Banner></Banner>
        <HomeService></HomeService>
        <PricingPlan></PricingPlan>
        <ContactHero></ContactHero>

       </div>
    );
};

export default Home;