import React from 'react';
import Banner from '../Banner/Banner';
import ContactHero from '../ContactHero/ContactHero';
import useTitle from '../CustomHook/useTitle';
import PricingPlan from '../PricingPlan/PricingPlan';
import HomeService from '../Services/HomeService/HomeService';
const Home = () => {
    useTitle("Zara Medicly")
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