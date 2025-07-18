"use client";

import { motion } from "framer-motion";
import { FaConciergeBell, FaWifi, FaSpa } from "react-icons/fa";

const features = [
  {
    title: "24/7 Room Service",
    icon: <FaConciergeBell className="text-4xl text-yellow-500" />,
  },
  {
    title: "Free High-Speed Wi-Fi",
    icon: <FaWifi className="text-4xl text-yellow-500" />,
  },
  {
    title: "Luxury Spa & Gym",
    icon: <FaSpa className="text-4xl text-yellow-500" />,
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-16 px-6 max-w-7xl mx-auto text-center">
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-10 dark:text-white "
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Why Choose Us
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="p-6 bg-white shadow-md rounded-xl hover:shadow-lg transition-all"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
          >
            <div className="mb-4 flex items-center justify-center">{feature.icon}</div>
            <h3 className="text-xl font-semibold">{feature.title}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
