import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

const UpdateRiview = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [riviews, setRiviews] = useState([]);

  const handleUpdateRiview = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.clientName.value;
    const photourl = form.photoURL.value;
    const feedback = form.feedback.value;
    console.log(name, photourl);
    const riviews = {
      name,
      photourl,
      feedback,
    };

    fetch(`http://localhost:5000/riviews/${params.id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(riviews),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          toast.success(`Succefully updated`);
          navigate("/services");
        }
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  useEffect(() => {
    fetch(`http://localhost:5000/riviews/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        setRiviews(data);
      });
  }, [params.id]);

  return (
    <div>
      <h3 className="text-center py-6 font-bold">Update your Riview :</h3>
      <div className="flex justify-center my-10">
        <form
          onSubmit={handleUpdateRiview}
          action=""
          className="space-y-6 ng-untouched ng-pristine ng-valid lg:w-6/12 md:w-6/12 sm:w-10/12"
        >
          <div>
            <h3 className="font-bold">
              Please provide authentic information & Honest Feedback
            </h3>
          </div>
          <div className="space-y-1 text-sm font-medium">
            <label htmlFor="name" className="block text-black">
              Your Name:{riviews.name}
            </label>
            <input
              type="text"
              name="clientName"
              id="clientName"
              placeholder="name"
              defaultValue={riviews?.name}
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
              Feedback
            </label>
            <textarea
              name="feedback"
              rows={4}
              placeholder="feedback"
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
    </div>
  );
};

export default UpdateRiview;
