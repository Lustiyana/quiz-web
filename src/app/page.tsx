"use client";
import axios from "../../node_modules/axios/index";
import Link from "../../node_modules/next/link";
import Navbar from "../components/Navbar/Navbar";

async function getData() {
  const res = await axios.get(
    "https://opentdb.com/api.php?amount=10&category=18&difficulty=medium"
  );

  return await res.data.results;
}

export default function Home() {
  const handleStart = async () => {
    async function fetchData() {
      const data = await getData();
      localStorage.setItem("data", JSON.stringify(data));
    }
    fetchData();
  };

  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center">
        <div className="">
          <div className="mb-8 mt-16">
            <h3 className="text-4xl font-bold">Hallo,</h3>
            <h2 className="text-xl font-semibold">Selamat datang di Quizzz</h2>
            <p>Please click the button for start the quiz</p>
          </div>
          <div className="flex justify-center">
            <Link
              href="/questions/1"
              className="btn btn-outline btn-secondary flex"
              onClick={handleStart}
            >
              Start
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
