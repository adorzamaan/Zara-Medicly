import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { authContext } from "../../../AuthProvider/AuthProvider";
import RiviewTable from "./RiviewTable/RiviewTable";

const MyRiviews = () => {
  const { user } = useContext(authContext);
  const [myRiviews, setMyriviews] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/riviews?email=${user?.email}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setMyriviews(data);
      });
  }, [user?.email]);

  const handleDelete = (id) => {
    const proceed = window.confirm(
      `Hey ${user?.email} Are you sure want delete ?`
    );
    if (proceed) {
      fetch(`http://localhost:5000/riviews/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount) {
            toast.success("Deleted Successfully");
            const remaining = myRiviews.filter((odr) => odr._id !== id);
            setMyriviews(remaining);
          }
        });
    }
  };



  return (
    <div className="container mx-auto">
      <h3 className="text-center py-6 font-bold">
        My Reviews Info : {myRiviews.length}
      </h3>
      <table className="min-w-full text-xs">
        <thead className="bg-gray-700 text-white">
          <tr className="text-center">
            <th className="p-3">Service Name</th>
            <th className="p-3">Client Name</th>
            <th className="p-3 text-center">Feeback</th>
            <th className="p-3 text-center">Update</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {myRiviews?.map((myriview) => (
            <RiviewTable
              key={myriview._id}
              myriview={myriview}
              handleDelete={handleDelete}
            ></RiviewTable>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyRiviews;
