"use client";

import { motion } from "framer-motion";

export default function LocationMap() {
  return (
    <section className="w-full px-6 py-16 bg-gray-100">
      <motion.div
        className="max-w-6xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Find Us in Addis Ababa</h2>
        <p className="text-gray-700 mb-10 text-lg">
          Conveniently located in the heart of the city — easy to reach from the airport and major attractions.
        </p>
        <div className="w-full h-80 md:h-[500px] rounded-xl overflow-hidden shadow-lg">
          <iframe
            title="EliteStay Hotel Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.469524105763!2d38.74979107506681!3d9.03920489097795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85b0b0cc7507%3A0xa887ff1f12d0ccff!2sAddis%20Ababa%2C%20Ethiopia!5e0!3m2!1sen!2sus!4v1700000000000"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </motion.div>
    </section>
  );
}
