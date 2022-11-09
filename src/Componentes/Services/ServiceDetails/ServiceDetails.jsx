import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useLoaderData } from "react-router-dom";
import { authContext } from "../../../AuthProvider/AuthProvider";
import Riviews from "../../Riviews/Riviews";
import "./serviceDetails.css";
const ServiceDetails = () => {
  const { user } = useContext(authContext);
  const [riviews,setRiviews] = useState([])
  const serviceDetail = useLoaderData();
  console.log(serviceDetail);

const handleRiview = e =>{
  e.preventDefault()
    const form = e.target;
    const name = form.clientName.value;
    const servicename = form.servicename.value;
    const email = form.email.value;
    const photourl = form.photoURL.value;
    const feedback = form.feedback.value;
    console.log(name,email,photourl);
    const riviews = {
      name,
      servicename,
      email,
      photourl,
      feedback
    }
    fetch('http://localhost:5000/riviews',{
      method:'POST',
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify(riviews)
    })
    .then(res => res.json())
    .then(data =>{
      console.log(data)
      toast.success("Thanks for the feedback")
      form.reset()
    })
    .catch(err =>{
      toast.error(err.message)
    })
}

useEffect(()=>{
  fetch('http://localhost:5000/riviews')
  .then(res => res.json())
  .then(data => {
    setRiviews(data)
  })
  .catch(err =>{
    toast.error(err.message)
  })
},[])



  return (
    <div className="container mx-auto">
      <div className="card w-10/12 service_details flex justify-between mx-auto bg-base-100 shadow-sm border border-gray-400 mt-8 rounded-xl">
        <img src={serviceDetail?.img} alt="/" className="w-96 h-auto" />
        <div className="card-body pl-8 py-6">
          <h2 className="font-bold" style={{ fontSize: "14px" }}>
            Service Name: {serviceDetail.service}
          </h2>

          <p>
            Service Fee : <small>{serviceDetail.serviceFee}$</small>
          </p>
          <p className="font-medium pr-2">
            Timing: <small>{serviceDetail.timing}</small>
          </p>
          <p className="font-medium py-2">
            Details: <small>{serviceDetail.detail}</small>
          </p>

          <Link to="/">
            <button className="px-8 py-1 my-3 bg-custom text-white">
              Get Ready to Booking
            </button>
          </Link>
        </div>
      </div>

    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">
    {
      riviews.map(riview =><Riviews riview={riview} key={riview._id}></Riviews>)
     }
    </div>


  {
    user && user.uid &&  <div className="flex justify-center my-10">
    <form onSubmit={handleRiview}
        action=""
        className="space-y-6 ng-untouched ng-pristine ng-valid lg:w-6/12 md:w-6/12 sm:w-10/12"
      >
        <div>
      <h3 className="font-bold">Your opinion matters !</h3>

        </div>
        <div className="space-y-1 text-sm font-medium">
          <label htmlFor="username" className="block text-black">
            Service Name:
          </label>
          <input
            type="text"
            name="servicename"
            id="name"
            placeholder="name"
            readOnly
          defaultValue={serviceDetail.service}
            className="w-full px-4 py-3 rounded-md border text-black focus:border-0"
          />
        </div>
        <div className="space-y-1 text-sm font-medium">
          <label htmlFor="name" className="block text-black">
            Your Name:
          </label>
          <input
            type="text"
            name="clientName"
            id="clientName"
            placeholder="name"
            className="w-full px-4 py-3 rounded-md border text-black focus:border-0"
          />
        </div>
        <div className="space-y-1 text-sm font-medium">
          <label htmlFor="username" className="block text-black">
            Photo Url
          </label>
          <input
            type="text"
            name="photoURL"
            id="photoURL"
            placeholder="photoUrl"
            className="w-full px-4 py-3 rounded-md border text-black focus:border-0"
          />
        </div>
        <div className="space-y-1 text-sm font-medium">
          <label htmlFor="username" className="block text-black">
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            required
            placeholder="Email"
            className="w-full px-4 py-3 rounded-md border text-black focus:border-0"
          />
        </div>
        <div className="space-y-1 text-sm font-medium">
          <label htmlFor="username" className="block text-black">
            Feedback
          </label>
          <textarea name="feedback" rows={6} cols={78} placeholder="feedback" className="border p-4"></textarea>
        </div>
       
        <button type="submit" className="block w-full p-3 text-center rounded-sm text-white bg-gray-400 hover:bg-blue-600 hover:text-white">
          Submit
        </button>
      </form>
    </div>
  }
   {
    !user &&    <div className="text-center py-6">
    <h3 className="font-medium mr-3">
      If your want you can share your experience ? Please    
      <Link
        className="px-8 py-1 my-3 bg-black hover:bg-green-500 text-white"
        to="/login"
      >
        Login
      </Link>
    </h3>
  </div>
   }
    </div>
  );
};

export default ServiceDetails;
