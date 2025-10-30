import React from "react";
import Swal from "sweetalert2";
import { useLoaderData } from "react-router";

const UpdateMango = () => {
  const { _id, name, origin, taste, price_per_kg, image, season, rating } =
    useLoaderData();
  const handleUpdateMango = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updatedMango = Object.fromEntries(formData.entries());
    console.log(updatedMango);

    // update to db
    fetch(`https://mango-crud-server.vercel.app/all-mango/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedMango),
    })
      .then((res) => res.json())
      .then((data) => {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Mango Update",
          showConfirmButton: false,
          timer: 1500,
        });

        console.log(data);
      });
  };
  return (
    <div className="container mx-auto py-10">
      <form
        onSubmit={handleUpdateMango}
        className="bg-base-100 p-6 rounded-xl shadow-md space-y-4 max-w-lg mx-auto"
      >
        <h2 className="text-2xl font-bold text-primary text-center">
          Update Your Mango
        </h2>

        <input
          type="text"
          name="name"
          placeholder="Mango Name"
          className="input input-bordered w-full"
          defaultValue={name}
          required
        />
        <input
          type="text"
          name="origin"
          placeholder="Origin"
          className="input input-bordered w-full"
          defaultValue={origin}
          required
        />
        <input
          type="text"
          name="taste"
          placeholder="Taste"
          defaultValue={taste}
          className="input input-bordered w-full"
        />
        <input
          type="number"
          name="price_per_kg"
          defaultValue={price_per_kg}
          placeholder="Price per kg"
          className="input input-bordered w-full"
        />
        <input
          type="text"
          name="image"
          defaultValue={image}
          placeholder="Image URL"
          className="input input-bordered w-full"
        />
        <input
          type="text"
          name="season"
          defaultValue={season}
          placeholder="Season"
          className="input input-bordered w-full"
        />
        <input
          type="number"
          defaultValue={rating}
          name="rating"
          placeholder="Rating (1-5)"
          className="input input-bordered w-full"
        />

        <button type="submit" className="btn btn-primary w-full">
          Update Mango
        </button>
      </form>
    </div>
  );
};

export default UpdateMango;
