"use client";

import { motion } from "framer-motion";

export default function Newsletter() {
  return (
    <section className="bg-yellow-500 py-16 px-6 text-center">
      <motion.div
        className="max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
          Stay Updated with Our News and Offers
        </h2>
        <p className="text-lg text-black mb-8">
          Subscribe to our newsletter to receive the latest offers, events, and news.
        </p>
        <form className="flex justify-center items-center">
          <input
            type="email"
            placeholder="Your email address"
            className="w-full md:w-1/3 px-4 py-3 rounded-l-xl text-black placeholder-gray-500"
            required
          />
          <button
            type="submit"
            className="bg-black text-white font-semibold py-3 px-6 rounded-r-xl hover:bg-gray-800 transition"
          >
            Subscribe
          </button>
        </form>
      </motion.div>
    </section>
  );
}
