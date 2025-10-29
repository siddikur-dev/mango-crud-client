import React from "react";
import { motion } from "framer-motion";
import AllMango from "../../Component/Mangoes/AllMango/AllMango";
import { Link } from "react-router";

const Home = () => {
  return (
    <section className="bg-base-200">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center px-6 py-16 lg:py-24">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 space-y-6 text-center lg:text-left"
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-primary">
            Fresh & Juicy <br />
            <span className="text-secondary">Mango Paradise</span>
          </h1>

          <p className="text-lg text-secondary">
            Discover the best handpicked mangoes straight from organic farms.
            Sweetness you can trust, freshness you can taste.
          </p>

          <div className="flex justify-center lg:justify-start gap-4">
            <Link
              to="/mango-add"
              className="bg-primary text-base-100 px-6 py-3 rounded-full font-semibold shadow-md hover:opacity-90 transition"
            >
              Mango Add Now
            </Link>
            <button className="border-2 border-secondary text-secondary px-6 py-3 rounded-full font-semibold hover:bg-base-300 transition">
              Learn More
            </button>
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 flex justify-center"
        >
          <img
            src="https://i.postimg.cc/hjHJXwbC/vecteezy-ai-generated-fresh-ripe-fruit-slice-on-wooden-table-healthy-39629893.webp"
            alt="Mango"
            className="w-full drop-shadow-2xl rounded-2xl bg-white"
          />
        </motion.div>
      </div>
      {/* Add  */}

      {/* Mango */}
      <AllMango />
    </section>
  );
};

export default Home;
