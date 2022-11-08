import React from "react";
import { Link } from "react-router-dom";

const ContactHero = () => {
  return (
    <div className="my-20 p-6 py-12 bg-custom text-white">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <h2 className="text-center text-2xl tracking-tighter font-bold">
            How to Early Appoinment to Emergence Issue ?
          </h2>
          <div className="space-x-2 text-center py-2 lg:py-0">
            <span>Read <Link>Conditions</Link></span>
          </div>
          <a
            href="/"
            rel="noreferrer noopener"
            className="px-5 mt-4 lg:mt-0 py-1 rounded-md border block bg-gray-50 text-gray-900 border-gray-400"
          >
            Book Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactHero;
