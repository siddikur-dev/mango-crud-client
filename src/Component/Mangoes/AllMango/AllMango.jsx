import React from "react";

import Swal from "sweetalert2";
import { Link, useLoaderData } from "react-router";
import { useState } from "react";

const AllMango = () => {
  const allMango = useLoaderData();
  const [Mangoes, setMangoes] = useState(allMango);
  // handle delete
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      console.log(result.isConfirmed);
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/all-mango/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });

              //remove from db and instant ui
              const remaining = Mangoes.filter((mango) => mango._id !== id);
              setMangoes(remaining);
            }
          });
      }
    });
  };

  return (
    <section className="bg-base-200 py-10 px-5">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-8">
        {Mangoes.map((mango) => (
          <div
            key={mango?._id}
            className="card bg-base-100 shadow-md rounded-2xl hover:shadow-xl transition"
          >
            <figure className="px-6 pt-6">
              <img
                src={mango?.image || mango.nam1e}
                alt={mango.nam1e}
                className="rounded-xl object-cover h-60 w-full"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-primary text-xl">{mango.name}</h2>
              <p className="text-secondary text-sm">{mango.taste}</p>
              <div className="card-actions mt-4">
                <Link
                  to={`/all-mango/${mango._id}`}
                  className="btn btn-primary"
                >
                  View Details
                </Link>
                <button
                  onClick={() => handleDelete(mango._id)}
                  className="btn btn-primary btn-outline"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AllMango;
