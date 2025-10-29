import React from "react";
import toast from "react-hot-toast";

const MangoAddForm = () => {
  const handleAddMango = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form); // DOM থেকে সরাসরি data
    const newMango = Object.fromEntries(formData.entries());

    fetch("http://localhost:3000/all-mango", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newMango),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Successfully Added To MongoDB!");
        form.reset(); // form clear
        console.log("Data after creating in DB:", data);
      });
  };

  return (
    <div className="container mx-auto py-10">
      <form
        onSubmit={handleAddMango}
        className="bg-base-100 p-6 rounded-xl shadow-md space-y-4 max-w-lg mx-auto"
      >
        <h2 className="text-2xl font-bold text-primary text-center">
          Add Your Mango
        </h2>

        <input
          type="text"
          name="name"
          placeholder="Mango Name"
          className="input input-bordered w-full"
          required
        />
        <input
          type="text"
          name="origin"
          placeholder="Origin"
          className="input input-bordered w-full"
          required
        />
        <input
          type="text"
          name="taste"
          placeholder="Taste"
          className="input input-bordered w-full"
        />
        <input
          type="number"
          name="price_per_kg"
          placeholder="Price per kg"
          className="input input-bordered w-full"
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          className="input input-bordered w-full"
        />
        <input
          type="text"
          name="season"
          placeholder="Season"
          className="input input-bordered w-full"
        />
        <input
          type="number"
          name="rating"
          placeholder="Rating (1-5)"
          className="input input-bordered w-full"
        />

        <button type="submit" className="btn btn-primary w-full">
          Add Mango
        </button>
      </form>
    </div>
  );
};

export default MangoAddForm;
