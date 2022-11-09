import React, { useContext, useEffect, useState } from "react";
import { authContext } from "../../../AuthProvider/AuthProvider";

const MyServices = () => {
  const { user } = useContext(authContext);
  const { myservices, setMyServices } = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/allservices?email=${user?.email}`)
      .then((res) => res.json())
      .then(data =>{
        console.log(data);
        setMyServices(data)
      })
  }, [user?.email]);

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
        {/* {
          myservices.map(service =><Table key={service._id} service={service}></Table>)
        } */}
        </tbody>
      </table>
    </div>
  );
};

export default MyServices;
