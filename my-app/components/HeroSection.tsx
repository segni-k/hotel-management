"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      className="w-full h-screen bg-cover bg-center flex items-center justify-center text-white text-center px-4"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1950&q=80')",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="bg-black/60 p-8 md:p-12 rounded-xl max-w-3xl"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to EliteStay Hotel
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Luxury, Comfort, and Exceptional Service in the heart of Addis Ababa.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 px-6 rounded-xl shadow-lg transition"
        >
          Book Now
        </motion.button>
      </motion.div>
    </section>
  );
}
