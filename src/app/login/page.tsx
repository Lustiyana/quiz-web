import React from "react";
import Link from "../../../node_modules/next/link";
import styles from "../../styles/style.module.css";

export default function Page() {
  return (
    <div className="flex h-screen">
      <div
        className={`${styles["welcome-container"]} flex flex-col justify-center items-center w-1/2`}
      >
        <h1 className="text-blue-700 font-bold text-3xl z-10">Hello!</h1>
        <p className="max-w-md text-white text-xl z-10">
          Add your personal info to make connection with us
        </p>
        <Link
          href="/register"
          className="border-2 py-4 px-8 rounded-md text-lg mt-8 hover:bg-purple-400 z-10"
        >
          Sign Up
        </Link>
      </div>
      <div className="flex flex-col justify-center items-center w-3/4">
        <h2 className="text-4xl text-blue-700 font-bold mb-16">Sign in</h2>
        <form className="flex flex-col border p-8 rounded-md gap-8 w-1/2">
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
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
