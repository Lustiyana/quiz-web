"use client";
import { useEffect, useState } from "react";
import Link from "../../node_modules/next/link";
import Navbar from "./components/Navbar/Navbar";

async function getData() {
  const res = await fetch(
    "https://opentdb.com/api.php?amount=10&category=18&difficulty=medium"
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return await res.json();
}

export default function Home() {
  const [data, setData] = useState({});
  useEffect(() => {
    async function fetchData() {
      const data = await getData();
      setData(data);
    }
    fetchData();
  }, []);
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="">
        <div className="mb-8">
          <h3 className="text-4xl font-bold">Hallo,</h3>
          <h2 className="text-xl font-semibold">Selamat datang di Quizzz</h2>
          <p>Please click the button for start the quiz</p>
        </div>
        <div className="flex justify-center">
          <Link
            href="/questions/1"
            className="btn btn-outline btn-secondary flex"
          >
            Start
          </Link>
        </div>
      </div>
    </div>
  );
}
