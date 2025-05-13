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
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
        price: "$100/night",
        rating: 4.2
      },
      {
        name: "Standard Room 2",
        description: "Modern design with cozy interior.",
        image: "https://images.unsplash.com/photo-1554995207-c18c203602cb",
        price: "$105/night",
        rating: 4.0
      },
      {
        name: "Standard Room 3",
        description: "Affordable luxury for solo travelers.",
        image: "https://images.unsplash.com/photo-1615874959474-d609969a8f49",
        price: "$110/night",
        rating: 4.1
      },
      {
        name: "Standard Room 4",
        description: "Simple, clean, and convenient.",
        image: "https://images.unsplash.com/photo-1582719478250-04ad087c6c38",
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
        image: "https://images.unsplash.com/photo-1590490360181-0951eea8aa4f",
        price: "$180/night",
        rating: 4.7
      },
      {
        name: "Deluxe Room 2",
        description: "Designed for couples with balcony view.",
        image: "https://images.unsplash.com/photo-1560067174-89480b1e5f2d",
        price: "$185/night",
        rating: 4.6
      },
      {
        name: "Deluxe Room 3",
        description: "Warm lighting and sophisticated finish.",
        image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
        price: "$190/night",
        rating: 4.8
      },
      {
        name: "Deluxe Room 4",
        description: "Elegant decor with a cozy feel.",
        image: "https://images.unsplash.com/photo-1578898880053-4c3e3c2217f2",
        price: "$195/night",
        rating: 4.9
      }
    ]
  },
  {
    category: "Executive Suite",
    rooms: [
      {
        name: "Executive Suite 1",
        description: "Ultimate luxury with personalized service.",
        image: "https://images.unsplash.com/photo-1618773928121-c32242ecdb85",
        price: "$250/night",
        rating: 4.9
      },
      {
        name: "Executive Suite 2",
        description: "Spacious layout with stunning city views.",
        image: "https://images.unsplash.com/photo-1600585153837-6c75f337d24a",
        price: "$255/night",
        rating: 4.9
      },
      {
        name: "Executive Suite 3",
        description: "Luxury retreat with all premium amenities.",
        image: "https://images.unsplash.com/photo-1576675784094-c20a9d27e8f9",
        price: "$260/night",
        rating: 5.0
      },
      {
        name: "Executive Suite 4",
        description: "A touch of class and comfort combined.",
        image: "https://images.unsplash.com/photo-1549924231-f129b911e442",
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
