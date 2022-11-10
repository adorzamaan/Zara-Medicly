import { useEffect, useState } from "react";
import LoadingSpinner from "../Shared/LoadinSpinner/LoadingSpinner";
import ServiceCard from "./ServiceCard/ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  // const { setLoading } = useContext(authContext);

  useEffect(() => {
    fetch(`http://localhost:5000/allservices`)
      .then((res) => res.json())
      .then((data) => {
        if (data.length === 0 && <LoadingSpinner></LoadingSpinner>) ;
        else{
          setServices(data);
        }
      });
  }, [services,]);

  return (
    <div className="container mx-auto my-14">
      <div className="sec_title text-center py-8">
        <span className="font-medium">Provided</span>
        <h3 className="font-bold lg:text-3xl md:text-xl sm:text-sm">Service</h3>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-12">
        {services.map((service) => (
          <ServiceCard service={service} key={service._id}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
