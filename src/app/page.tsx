"use client";
import { useEffect, useState } from "react";
import axios from "../../node_modules/axios/index";
import Link from "../../node_modules/next/link";
import { useRouter } from "../../node_modules/next/navigation";
import Navbar from "../components/Navbar/Navbar";

async function getData() {
  const res = await axios.get(
    "https://opentdb.com/api.php?amount=10&category=18&difficulty=medium"
  );

  return await res.data.results;
}

export default function Home() {
  const isStart = localStorage.getItem("data") ? true : false;
  const router = useRouter();
  const [isBlank, setIsBlank] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      router.push("/login");
      setIsBlank(false);
    }
  }, []);

  const handleStart = async () => {
    setLoading(true);
    async function fetchData() {
      const data = await getData();
      localStorage.removeItem("data");
      localStorage.removeItem("arrQuestions");
      localStorage.setItem("data", JSON.stringify(data));
      localStorage.setItem("hours", "0");
      localStorage.setItem("minutes", "30");
      localStorage.setItem("seconds", "0");
      router.push("/questions/1");
    }
    fetchData();
    // setLoading(false);
  };

  if (isBlank) {
    return (
      <div>
        <Navbar />
        <div className="flex justify-center items-center">
          <div className="">
            <div className="mb-8 mt-16">
              <h3 className="text-4xl font-bold">Hallo,</h3>
              <h2 className="text-xl font-semibold">
                Selamat datang di Quizzz
              </h2>
              <p>Please click the button for start the quiz</p>
            </div>
            <div className="flex justify-between">
              <button
                className="btn btn-outline btn-secondary flex w-32"
                onClick={handleStart}
              >
                {loading ? (
                  <span className="loading loading-spinner"></span>
                ) : (
                  <span>Start</span>
                )}
              </button>
              {isStart ? (
                <Link
                  href="/questions/1"
                  className="btn btn-outline btn-secondary flex w-32"
                >
                  Resume
                </Link>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
  <div></div>;
}
