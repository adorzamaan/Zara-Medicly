import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  return (
    <div className="card bg-base-100 shadow-md border border-gray-300">
      <img src={service?.img} alt="/" className="rounded-t-3xl w-full h-60" />
      <div className="card-body p-4 ">
        <h2 className="font-bold" style={{ fontSize: "14px" }}>
          {service?.service}
        </h2>

        <p className="font-medium">
          Service Fee :  <small>{service?.serviceFee}$</small>
        </p>
        <p className="pr-2 font-medium">
          Timing: <small>{service?.timing}</small>
        </p>
        <p className="pr-2 font-medium">
          Overview:  {service.detail.length > 100 ? (
            <span>{service.detail.slice(0, 100) + "..."} <br></br><br></br> <Link className="px-8 py-1 bg-custom text-white my-4" to={`/allservices/${service._id}`}>View Details</Link></span>
          ) : (
            <span>{service.detail}</span>
          )}
        </p>
      </div>
      {/* <div className="tablet text-center bottom-2 btn-item">
        <Link to={`/services/${service._id}`}>
          <button className="px-8 py-1 bg-custom text-white">
            View Details
          </button>
        </Link>
      </div> */}
    </div>
  );
};

export default ServiceCard;
