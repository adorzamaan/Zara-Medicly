import { XCircleIcon } from '@heroicons/react/24/solid';
import React from 'react';

const Table = ({service}) => {
    return (
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
    );
};

export default Table;