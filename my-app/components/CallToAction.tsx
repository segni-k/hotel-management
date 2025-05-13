"use client";

import { motion } from "framer-motion";

export default function CallToAction() {
  return (
    <section className="w-full bg-yellow-500 py-16 px-6 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
          Experience Unmatched Luxury in Addis Ababa
        </h2>
        <p className="text-lg text-black mb-8">
          Book your stay today and enjoy 5-star comfort, exquisite dining, and
          exceptional service at EliteStay Hotel.
        </p>
        <a
          href="#"
          className="inline-block bg-black text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:bg-gray-800 transition"
        >
          Reserve Now
        </a>
      </motion.div>
    </section>
  );
}
