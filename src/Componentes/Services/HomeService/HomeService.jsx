import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '../ServiceCard/ServiceCard';

const HomeService = () => {
    const [homeServices, setHomeServices] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/services`)
      .then((res) => res.json())
      .then((data) => {
        setHomeServices(data);
      });
  }, []);

  return (
    <div className="container mx-auto my-14">
      <div className="sec_title text-center py-8">
        <span className="font-medium">Provided</span>
        <h3 className="font-bold lg:text-3xl md:text-xl sm:text-sm">Service</h3>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-12">
        {homeServices.map((service) => (
          <ServiceCard service={service} key={service._id}></ServiceCard>
        ))}
      </div>
      <div className='text-center my-20'>
        <Link to="/services" className='py-2 border border-blue-600 text-black px-8 font-bold'>View All Services</Link>
      </div>
    </div>
  );
};

export default HomeService;