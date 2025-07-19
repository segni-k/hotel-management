// app/reserve/page.tsx
"use client";

import { useEffect } from "react";
import { useUser, RedirectToSignIn } from "@clerk/nextjs";
import { useRouter, useSearchParams } from "next/navigation";

export default function ReservationPage() {
  const searchParams = useSearchParams();
  const room = searchParams.get("room");

 const { isLoaded, isSignedIn } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      RedirectToSignIn({ redirectUrl: "/sign-in?redirect_url=/register" });
    }
  }, [isLoaded, isSignedIn, router]);

  if (!isLoaded || !isSignedIn) return null;


  return (
    <main className="flex flex-col items-center justify-center w-full py-16 px-6 dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen">
      <h2 className="text-3xl font-bold text-center mb-8">
        {room ? `Book Your ${room}` : "Book a Room"}
      </h2>

      <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md max-w-2xl mx-auto w-full">
        <h3 className="text-xl font-semibold mb-4">Reservation Details</h3>

        <form>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2" htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2" htmlFor="checkin">Check-in Date</label>
            <input
              type="date"
              id="checkin"
              name="checkin"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2" htmlFor="checkout">Check-out Date</label>
            <input
              type="date"
              id="checkout"
              name="checkout"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-yellow-500 text-white py-2 px-4 rounded-lg mt-4 w-full hover:bg-yellow-600 transition font-semibold"
          >
            Confirm Reservation
          </button>
        </form>
      </div>
    </main>
  );
}
