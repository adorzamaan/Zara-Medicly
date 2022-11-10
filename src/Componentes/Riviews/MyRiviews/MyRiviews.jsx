import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { authContext } from "../../../AuthProvider/AuthProvider";
import useTitle from "../../CustomHook/useTitle";
import RiviewTable from "./RiviewTable/RiviewTable";

const MyRiviews = () => {
  const { user,logOut } = useContext(authContext);
  const [myRiviews, setMyriviews] = useState([]);
  useTitle('My Riviews')

  useEffect(() => {
    fetch(`https://doctor-portal-server-six.vercel.app/riviews?email=${user?.email}`,{
      headers: {
        authorization: `Bearer ${localStorage.getItem("doctor-portal")}`,
      },
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          toast.error('unauthorized access.Please verify your authorization')
          logOut();
        }
        return res.json();
      })
      .then((data) => {
        setMyriviews(data);
      });
  }, [user?.email,logOut]);

  const handleDelete = (id) => {
    const proceed = window.confirm(
      `Hey ${user?.email} Are you sure want delete ?`
    );
    if (proceed) {
      fetch(`https://doctor-portal-server-six.vercel.app/riviews/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            toast.success("Deleted Successfully");
            const remaining = myRiviews.filter((odr) => odr._id !== id);
            setMyriviews(remaining);
          }
        });
    }
  };



  // const handleUpdate = id =>{
  //   fetch(`https://doctor-portal-server-six.vercel.app/riviews/${id}`, {
  //   method: "PATCH",
  //   headers: {
  //     "content-type": "application/json",
  //   },
  //   body: JSON.stringify(riviews),
  // })
  //   .then((res) => res.json())
  //   .then((data) => {
  //     if (data.modifiedCount) {
  //       toast.success(`Succefully updated`);
  //       navigate("/services");
  //     }
  //   })
  //   .catch((err) => {
  //     toast.error(err.message);
  //   });

  // }


  return (
    <div className="container mx-auto">
      <h3 className="text-center py-6 font-bold">
        My Reviews Info : 
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
