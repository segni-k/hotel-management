"use client";

import ThemeContext from "@/context/themeContext";
import Link from "next/link";
import { useContext } from "react";
import { FaUserCircle } from "react-icons/fa";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
  useUser,
} from "@clerk/nextjs";

const Header = () => {
  const { darkTheme, setDarkTheme } = useContext(ThemeContext);
  const { isSignedIn, user, isLoaded } = useUser();
  return (
    <header className="py-7 px-4 container mx-auto text-xl flex flex-wrap md:flex-nowrap items-center justify-between dark:text-white ">
      <div className="flex items-center w-full md:w-2/7 mt-4 ">
        <Link href="/" className="font-black text-tertiary-dark">
          Hotelzz
        </Link>
        <ul className="flex items-center ml-5 ">
          <li className="flex items-center">
            <Link href="/auth">
              <FaUserCircle className="cursor-pointer" />
            </Link>
          </li>
          <li className="ml-2 ">
            {darkTheme ? (
              <MdOutlineLightMode
                className="cursor-pointer"
                onClick={() => {
                  setDarkTheme(false);
                  localStorage.removeItem("hotel-theme");
                }}
              />
            ) : (
              <MdDarkMode
                className="cursor-pointer"
                onClick={() => {
                  setDarkTheme(true);
                  localStorage.setItem("hotel-theme", "true");
                }}
              />
            )}
          </li>
        </ul>
      </div>

      <ul className="flex items-center justify-between w-full md:w-3/7 mt-4 md:mx-10">
        <li className="hover:-translate-y-2 duration-500 transition-all">
          <Link href="/">Home</Link>
        </li>
        <li className="hover:-translate-y-2 duration-500 transition-all">
          <Link href="/rooms">Rooms</Link>
        </li>
        <li className="hover:-translate-y-2 duration-500 transition-all">
          <Link href="/about-us">About Us</Link>
        </li>
      </ul>
      <div className="flex items-center justify-end w-full md:w-2/7 mt-4 gap-10">
      <SignedOut>
        <SignInButton />
        <SignUpButton>
          <button className="bg-[#6c47ff] text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
            Sign Up
          </button>
        </SignUpButton>
      </SignedOut>
      <SignedIn>
        {isLoaded && isSignedIn && user ? (
          <Link href="/profile" className="flex items-center gap-2 text-lg dark:text-white">
            <div className=" font-semibold">{user?.fullName}</div>
            <UserButton
            />
          </Link>
        ) : (
          <UserButton />
        )}
      </SignedIn>
      </div>
    </header>
  );
};

export default Header;
