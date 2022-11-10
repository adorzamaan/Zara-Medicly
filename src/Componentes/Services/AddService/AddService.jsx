import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { authContext } from "../../../AuthProvider/AuthProvider";
import useTitle from "../../CustomHook/useTitle";

const AddService = () => {
  const { user } = useContext(authContext);
  const [addService, setAddService] = useState([]);
  useTitle('Add Service')

  const handleAddService = (e) => {
    e.preventDefault();
    const form = e.target;
    const service = form.service.value;
    const img = form.img.value;
    const timing = form.timing.value;
    const serviceFee = form.serviceFee.value;
    const detail = form.detail.value;
    const serviceitem = {
      service,
      img,
      timing,
      serviceFee,
      detail,
      email: user.email,
    };
    fetch("https://doctor-portal-server-six.vercel.app/allservices", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(serviceitem),
    })
      .then((res) => res.json())
      .then((data) => {
        setAddService(data);
        toast.success("Successfully Added");
        form.reset()
      })
      .catch((err) => {
        toast.error("couldnot Added product,Please try again");
      });
  };

  return (
    <div className="container mx-auto">
      <form
        onSubmit={handleAddService}
        action=""
        className="space-y-6 container mx-auto ng-untouched ng-pristine ng-valid lg:w-6/12 md:w-6/12 sm:w-10/12"
      >
        <div>
          <h3 className="font-bold">Add Service</h3>
        </div>
        <div className="space-y-1 text-sm font-medium">
          <label htmlFor="username" className="block text-black">
            Service Name: 
          </label>
          <input
            type="text"
            name="service"
            id="name"
            placeholder="name"
            className="w-full px-4 py-3 rounded-md border text-black focus:border-0"
          />
        </div>

        <div className="space-y-1 text-sm font-medium">
          <label htmlFor="username" className="block text-black">
            Timing
          </label>
          <input
            type="text"
            name="timing"
            id="timing"
            placeholder="timing"
            className="w-full px-4 py-3 rounded-md border text-black focus:border-0"
          />
        </div>
        <div className="space-y-1 text-sm font-medium">
          <label htmlFor="username" className="block text-black">
            Service Fee
          </label>
          <input
            type="text"
            name="serviceFee"
            id="serviceFee"
            placeholder="serviceFee"
            className="w-full px-4 py-3 rounded-md border text-black focus:border-0"
          />
        </div>
        <div className="space-y-1 text-sm font-medium">
          <label htmlFor="username" className="block text-black">
            Photo Url
          </label>
          <input
            type="text"
            name="img"
            id="img"
            placeholder="img"
            className="w-full px-4 py-3 rounded-md border text-black focus:border-0"
          />
        </div>

        <div className="space-y-1 text-sm font-medium">
          <textarea
            name="detail"
            rows={4}
            placeholder="detail"
            className="border p-4 w-full"
          ></textarea>
        </div>

        <button
          type="submit"
          className="block w-full p-3 text-center rounded-sm text-white bg-gray-400 hover:bg-blue-600 hover:text-white"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddService;
