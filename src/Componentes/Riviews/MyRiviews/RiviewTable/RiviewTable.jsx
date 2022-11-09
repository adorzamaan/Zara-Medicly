import { XCircleIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const RiviewTable = ({ myriview, handleDelete,handleUpdateRiview }) => {
  const {sericeID, _id } = myriview;
const [singleRiview,setSingleRiview] = useState({})
useEffect(()=>{
    fetch(`http://localhost:5000/riviews/${sericeID}`)
    .then(res => res.json())
    .then(data =>{
        setSingleRiview(data)
    })
},[sericeID])

  return (
    <tr className="border-b border-opacity-20 border-gray-70 text-black">
      <td className="p-3 flex justify-evenly items-center">
        <XCircleIcon
          onClick={() => handleDelete(_id)}
          className="w-7 h-7 rounded-full text-blue-600 hover:text-red-700"
        ></XCircleIcon>
        <img src={myriview.photourl} className="w-10 rounded-2xl" alt="" />
      </td>
      <td className="p-3">
        <p className="font-bold text-black ">{myriview.name}</p>
      </td>

      <td className="p-3 text-center">
        <p>{myriview?.feedback}</p>
      </td>
      <td className="p-3 text-center">
        <span className={`px-3 py-1 font-semibold rounded-md`}>
          <Link to="/updatedriview">Update</Link>
        </span>
      </td>
    </tr>
  );
};

export default RiviewTable;
