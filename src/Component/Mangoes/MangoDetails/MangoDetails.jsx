import React from "react";
import { Link, useLoaderData } from "react-router";

const MangoDetails = () => {
  const mango = useLoaderData();

  return (
    <section className="bg-base-200 py-10 px-5">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Image */}
        <div className="w-full md:w-1/2">
          <img
            src={mango.image}
            alt={mango.name}
            className="w-full h-96 object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* Details */}
        <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
          <h1 className="text-4xl font-bold text-primary">{mango.name}</h1>
          <p className="text-secondary text-lg">
            <span className="font-semibold">Origin:</span> {mango.origin}
          </p>
          <p className="text-secondary text-lg">
            <span className="font-semibold">Taste:</span> {mango.taste}
          </p>
          <p className="text-secondary text-lg">
            <span className="font-semibold">Price per kg:</span> $
            {mango.price_per_kg}
          </p>
          <p className="text-secondary text-lg">
            <span className="font-semibold">Season:</span> {mango.season}
          </p>
          <p className="text-secondary text-lg">
            <span className="font-semibold">Rating:</span> {mango.rating} ⭐
          </p>

          <div className="mt-6">
            <button className="btn btn-primary px-8 py-3 rounded-full font-semibold shadow-lg hover:opacity-90 transition">
              Buy Now
            </button>
            <Link
              to={`/updateMango/${mango._id}`}
              className="btn btn-primary px-8 py-3 rounded-full font-semibold shadow-lg hover:opacity-90 transition"
            >
              Update Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MangoDetails;
