import React from "react";
import Link from "../../../node_modules/next/link";
import styles from "./style.module.css";

interface SideAuthProps {
  heading1: string;
  message: string;
  link: string;
  buttonName: string;
}

export default function SideAuth({
  heading1,
  message,
  link,
  buttonName,
}: SideAuthProps) {
  return (
    <div
      className={`${styles["welcome-container"]} flex flex-col justify-center items-center w-1/2`}
    >
      <h1 className="text-blue-700 font-bold text-3xl z-10">{heading1}</h1>
      <p className="max-w-md text-white text-xl z-10">{message}</p>
      <Link
        href={link}
        className="border-2 py-4 px-8 rounded-md text-lg mt-8 hover:bg-purple-400 z-10"
      >
        {buttonName}
      </Link>
    </div>
  );
}
