"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    name: "Liya T.",
    feedback:
      "One of the best hotel experiences I’ve ever had! The staff were incredibly friendly and the food was just divine.",
    image:
      "/images/testimonial-1.jpg",
  },
  {
    name: "Henok G.",
    feedback:
      "Amazing rooms and facilities. The location is perfect for both tourists and business travelers.",
    image:
      "/images/testimonial-2.jpg",
  },
  {
    name: "Sara K.",
    feedback:
      "Stunning decor, world-class service, and delicious cuisine. Highly recommended!",
    image:
      "/images/testimonial-3.jpg",
  },
];

export default function Testimonials() {
  return (
    <section className=" py-20 px-6 max-w-7xl mx-auto ">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center mb-12 dark:text-white"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        What Our Guests Say
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-4">
              <Image
                src={t.image}
                alt={t.name}
                width={100}
                height={100}
                className="w-14 h-14 rounded-full object-cover"
              />

              <h4 className="font-semibold text-lg">{t.name}</h4>
            </div>
            <p className="text-gray-700 italic">“{t.feedback}”</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
