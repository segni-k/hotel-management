"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type Room = {
  title: string;
  description: string;
  imageUrl: string;
};

const rooms: Room[] = [
  {
    title: "Deluxe Suite",
    description: "Spacious room with luxury furnishings and a city view.",
    imageUrl: "/images/deluxes.jpg"
  },
  {
    title: "Exclusive Room",
    description: "Ideal for business travelers with modern amenities.",
    imageUrl: "/images/executive.jpg"
  },
  {
    title: "Presidential Suite",
    description: "Ultimate luxury with premium services and privacy.",
    imageUrl: "/images/presidentials.jpg"
  }
];

type RoomTypesProps = {
  query: string;
};

export default function RoomTypes({ query }: RoomTypesProps) {
  const filteredRooms = rooms.filter(
    (room) =>
      room.title.toLowerCase().includes(query.toLowerCase()) ||
      room.description.toLowerCase().includes(query.toLowerCase())
  );

  if (filteredRooms.length === 0) return null;

  return (
    <section className="w-full px-4 py-12 ">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 dark:text-white">Room Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredRooms.map((room, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="rounded-lg overflow-hidden shadow-lg bg-white"
            >
              <Image src={room.imageUrl} alt={room.title} width={400} height={300} className="w-full h-48 object-cover" />

              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{room.title}</h3>
                <p className="text-gray-600">{room.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
