import { XCircleIcon } from "@heroicons/react/24/solid";
import React, { useContext, useEffect, useState } from "react";
import { authContext } from "../../../AuthProvider/AuthProvider";

const MyServices = () => {
  const { user } = useContext(authContext);
  const { myservices, setMyServices } = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/allservices?email=${user?.email}`)
      .then((res) => res.json())
      .then(data =>setMyServices(data))
  }, [user?.email,setMyServices]);

  return (
    <div className="container mx-auto">
      <h3 className="text-center py-6 font-bold">My Service Item :</h3>
      <table className="min-w-full text-xs">
        <thead className="bg-gray-700 text-white">
          <tr className="text-center">
            <th className="p-3">Service Name</th>
            <th className="p-3">Service</th>
            <th className="p-3 text-right">Amount</th>
            <th className="p-3 text-right">Status</th>
          </tr>
        </thead>
        <tbody className="text-center">
          <tr className="border-b border-opacity-20 border-gray-70 text-black">
            <td className="p-3 flex justify-evenly items-center">
              <XCircleIcon className="w-7 h-7 rounded-full text-orange-400 hover:text-red-700"></XCircleIcon>
              <img src="" className="w-20 rounded-lg" alt="" />
            </td>
            <td className="p-3">
              <p className="font-bold text-black "></p>
            </td>

            <td className="p-3 text-right">
              <p>Price $</p>
            </td>
            <td className="p-3 text-right">
              <span className={`px-3 py-1 font-semibold rounded-md`}>
                <button>Update</button>
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MyServices;
