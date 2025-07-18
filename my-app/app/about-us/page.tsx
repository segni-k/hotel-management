"use client";

import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto dark:text-white">
      {/* About Hotel */}
      <motion.div
        className="mb-16 flex flex-col md:flex-row gap-10 items-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <img
          src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=800&q=80"
          alt="Hotel lobby"
          className="rounded-xl w-full md:w-1/2 object-cover h-80"
        />
        <div className="text-left">
          <h2 className="text-3xl font-bold mb-4">About EliteStay Hotel</h2>
          <p className="text-gray-700 text-lg dark:text-gray-400">
            Nestled in the heart of Addis Ababa, EliteStay is a 5-star hotel
            that blends modern comfort with Ethiopian heritage. With luxurious
            rooms, exceptional service, and world-class amenities, our goal is
            to make your stay unforgettable.
          </p>
        </div>
      </motion.div>

      {/* About Food */}
      <motion.div
        className="mb-16 flex flex-col md:flex-row-reverse gap-10 items-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <img
          src="https://images.unsplash.com/photo-1613145993481-5de3c911a361?auto=format&fit=crop&w=800&q=80"
          alt="Ethiopian cuisine"
          className="rounded-xl w-full md:w-1/2 object-cover h-80"
        />
        <div className="text-left">
          <h2 className="text-3xl font-bold mb-4">Our Cuisine</h2>
          <p className="text-gray-700 text-lg dark:text-gray-400">
            Enjoy authentic Ethiopian dishes alongside a variety of
            international options. Our culinary team uses fresh, locally
            sourced ingredients to deliver unforgettable flavors in every meal.
          </p>
        </div>
      </motion.div>

      {/* Chef Section */}
      <motion.div
        className="flex flex-col md:flex-row gap-10 items-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <img
          src="https://images.unsplash.com/photo-1525610553991-2bede1a236e2?auto=format&fit=crop&w=800&q=80"
          alt="Hotel chef"
          className="rounded-xl w-full md:w-1/2 object-cover h-80"
        />
        <div className="text-left">
          <h2 className="text-3xl font-bold mb-4">Meet Our Executive Chef</h2>
          <p className="text-gray-700 text-lg dark:text-gray-400">
            Chef Dawit Mengistu brings over 20 years of experience in Ethiopian
            and international cuisine. His attention to detail and passion for
            culinary excellence sets the tone for a memorable dining experience.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
