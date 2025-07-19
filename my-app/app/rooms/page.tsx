// app/rooms/page.tsx
"use client";

import { useState } from "react";
import RoomCard from "@/components/RoomCard";
import { useRouter } from "next/navigation";

const rooms = [
  {
    category: "Standard Room",
    rooms: [
      {
        name: "Standard Room 1",
        description: "Comfortable room with essential amenities.",
        image: "/images/standard-1.jpg",
        price: "$100/night",
        rating: 4.2
      },
      {
        name: "Standard Room 2",
        description: "Modern design with cozy interior.",
        image: "/images/standard-2.jpg",
        price: "$105/night",
        rating: 4.0
      },
      {
        name: "Standard Room 3",
        description: "Affordable luxury for solo travelers.",
        image: "/images/standard-3.jpg",
        price: "$110/night",
        rating: 4.1
      },
      {
        name: "Standard Room 4",
        description: "Simple, clean, and convenient.",
        image: "/images/standard-4.jpg",
        price: "$115/night",
        rating: 4.3
      }
    ]
  },
  {
    category: "Deluxe Room",
    rooms: [
      {
        name: "Deluxe Room 1",
        description: "Spacious and elegant with premium bedding.",
        image: "/images/deluxe-1.jpg",
        price: "$180/night",
        rating: 4.7
      },
      {
        name: "Deluxe Room 2",
        description: "Designed for couples with balcony view.",
        image: "/images/deluxe-2.jpg",
        price: "$185/night",
        rating: 4.6
      },
      {
        name: "Deluxe Room 3",
        description: "Warm lighting and sophisticated finish.",
        image: "/images/deluxe-3.jpg",
        price: "$190/night",
        rating: 4.8
      },
      {
        name: "Deluxe Room 4",
        description: "Elegant decor with a cozy feel.",
        image: "/images/deluxe-4.jpg",
        price: "$195/night",
        rating: 4.9
      }
    ]
  },
  {
    category: "Presidential Suite",
    rooms: [
      {
        name: "Presidential Suite 1",
        description: "Ultimate luxury with personalized service.",
        image: "/images/presidential-1.jpg",
        price: "$250/night",
        rating: 4.9
      },
      {
        name: "Presidential Suite 2",
        description: "Spacious layout with stunning city views.",
        image: "/images/presidential-2.jpg",
        price: "$255/night",
        rating: 4.9
      },
      {
        name: "Presidential Suite 3",
        description: "Luxury retreat with all premium amenities.",
        image: "/images/presidential-3.jpg",
        price: "$260/night",
        rating: 5.0
      },
      {
        name: "Presidential Suite 4",
        description: "A touch of class and comfort combined.",
        image: "/images/presidential-4.jpg",
        price: "$265/night",
        rating: 4.8
      }
    ]
  }
];

export default function RoomsPage() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleBook = (roomName: string) => {
    router.push(`/reserve?room=${encodeURIComponent(roomName)}`);
  };

  const filteredRooms = rooms.map((category) => ({
    ...category,
    rooms: category.rooms.filter((room) =>
      room.name.toLowerCase().includes(search.toLowerCase())
    )
  }));

  return (
    <main className="p-8 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <input
          type="text"
          value={search}
          onChange={handleSearch}
          placeholder="Search rooms..."
          className="w-full p-3 mb-8 border rounded-lg shadow-md dark:bg-gray-800 dark:text-white"
        />
        {filteredRooms.map((category) => (
          <div key={category.category} className="mb-12">
            <h2 className="text-3xl font-bold text-blue-700 dark:text-yellow-400 mb-6">
              {category.category}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {category.rooms.map((room) => (
                <div
                  key={room.name}
                  className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md text-sm"
                >
                  <RoomCard
                    name={room.name}
                    description={room.description}
                    image={room.image}
                    price={room.price}
                  />
                  <div className="flex items-center mt-2">
                    <span className="text-yellow-500 mr-1">⭐</span>
                    <span className="text-yellow-500 font-medium">{room.rating.toFixed(1)}</span>
                  </div>
                  <button
                    onClick={() => handleBook(room.name)}
                    className="mt-4 w-full bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg font-semibold shadow-md"
                  >
                    Book Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
