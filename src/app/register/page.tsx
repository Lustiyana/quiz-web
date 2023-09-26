import React from "react";
import Link from "../../../node_modules/next/link";
import styles from "../../styles/style.module.css";

export default function Page() {
  return (
    <div className="flex h-screen">
      <div
        className={`${styles["welcome-container"]} flex flex-col justify-center items-center w-1/2`}
      >
        <h1 className="text-blue-700 font-bold text-3xl z-10">Welcome Back!</h1>
        <p className="max-w-md text-white text-xl z-10">
          To keep connected with us please login with your personal info
        </p>
        <Link
          href="/login"
          className="border-2 py-4 px-8 rounded-md text-lg mt-8 hover:bg-purple-400 z-10"
        >
          Sign In
        </Link>
      </div>
      <div className="flex flex-col justify-center items-center w-3/4">
        <h2 className="text-4xl text-blue-700 font-bold mb-16">Sign Up</h2>
        <form className="flex flex-col border p-8 rounded-md gap-8 w-1/2">
          <div className="border-b">
            <input
              type="text"
              placeholder="Name"
              className="h-10 focus:outline-none"
            />
          </div>
          <div className="flex gap-4">
            <div className="border-b">
              <input
                type="text"
                placeholder="Birth of place"
                className="h-10 focus:outline-none"
              />
            </div>
            <div className="border-b">
              <input
                type="date"
                name="date"
                className="text-slate-400 h-10 focus:outline-none"
              ></input>
            </div>
          </div>
          <div className="border-b">
            <input
              type="text"
              placeholder="Email"
              className="h-10 focus:outline-none"
            />
          </div>
          <div className="border-b">
            <input
              type="password"
              placeholder="Password"
              className="h-10 focus:outline-none"
            />
          </div>
          <button className="border-2 border-blue-400 hover:text-white hover:bg-blue-300 rounded-md py-2 mt-4">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
