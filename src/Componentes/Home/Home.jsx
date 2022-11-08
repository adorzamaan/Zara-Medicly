import React from 'react';
import Banner from '../Banner/Banner';
import ContactHero from '../ContactHero/ContactHero';
import PricingPlan from '../PricingPlan/PricingPlan';
import Services from '../Services/Services';
const Home = () => {
    return (
       <div>
        <Banner></Banner>
        <Services></Services>
        <ContactHero></ContactHero>
        <PricingPlan></PricingPlan>
       </div>
    );
};

export default Home;