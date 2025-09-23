import React from "react";
import { Link } from "react-router-dom";
import { siteIdentity } from "../index";

const AdminPanel = () => {
  return (
    <>
      <header>
        {/* Navbar */}
        <nav className="flex justify-between items-center px-4 md:px-10 py-5 fixed top-0 left-0 right-0 z-50 bg-[#050507]/80 backdrop-blur-lg">
          {/* Logo */}
          <Link to="/admin" className="flex items-center gap-2">
            <img
              src={siteIdentity.icon}
              alt={siteIdentity.name + " icon"}
              className="h-7 md:h-8"
            />
            <h1 className="text-xl font-semibold text-[#f7f7ff]">
              {siteIdentity.name}
            </h1>
          </Link>

          <div className="relative group">
            <div className="flex items-center gap-4 md:bg-[#f7f7ff]/10 py-2 px-4 rounded-xl">
              <img
                src="./team/emp1.jpg"
                alt=""
                className="w-8 h-8 rounded-full aspect-square object-cover"
              />

              <div className="md:flex flex-col hidden">
                <h2 className="text-lg font-medium">John Doe</h2>
              </div>
            </div>

            <button className="opacity-0 group-hover:opacity-100 transition-all ease-in-out absolute right-0 top-15 hover:underline cursor-pointer bg-[#f7f7ff] text-black font-semibold py-2 px-4 rounded-xl">
              Logout
            </button>
          </div>
        </nav>
      </header>

      {/* heading */}
      <div className="mb-16 mt-35">
        <h1 className="text-2xl md:text-3xl lg:text-4xl text-[#f7f7ff] font-extrabold text-center mb-4">
          Admin Dashboard
        </h1>
        <p className="text-sm md:text-lg text-gray-200 opacity-70 text-center max-w-2xl mx-auto px-6">
          Manage and review all incoming contact messages in one place. Stay
          updated, track responses, and keep everything organized with ease.
        </p>
      </div>

      {/* Recent Messages */}
      <div className="px-5 md:px-10 mb-8">
        <h1 className="text-lg md:text-2xl text-[#f7f7ff] font-semibold mb-6">
          Recent Messages
        </h1>
        {/* Message Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col gap-4 bg-[#f7f7ff]/10 p-4 rounded-xl shadow-md w-full">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <span className="font-semibold text-lg">Aman Jindal</span>
              <span className="text-xs opacity-70">1/1/2023</span>
            </div>

            <span className="text-sm break-words">
              I want to know more about your services.
            </span>

            <div className="text-xs opacity-70 flex justify-between">
              {/* <span className="underline">uid001</span> */}
              <span className="italic">Viewed</span>
            </div>
          </div>
          <div className="flex flex-col gap-4 bg-[#f7f7ff]/10 p-4 rounded-xl shadow-md w-full">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <span className="font-semibold text-lg">Aman Jindal</span>
              <span className="text-xs opacity-70">1/1/2023</span>
            </div>

            <span className="text-sm break-words">
              I want to know more about your services.
            </span>

            <div className="text-xs opacity-70 flex justify-between">
              {/* <span className="underline">uid001</span> */}
              <span className="italic">Viewed</span>
            </div>
          </div>
          <div className="flex flex-col gap-4 bg-[#f7f7ff]/10 p-4 rounded-xl shadow-md w-full">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <span className="font-semibold text-lg">Aman Jindal</span>
              <span className="text-xs opacity-70">1/1/2023</span>
            </div>

            <span className="text-sm break-words">
              I want to know more about your services.
            </span>

            <div className="text-xs opacity-70 flex justify-between">
              {/* <span className="underline">uid001</span> */}
              <span className="italic">Viewed</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminPanel;
