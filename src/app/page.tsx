"use client";
import { useEffect, useState } from "react";

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
    <div>
      <button>Mulai</button>
    </div>
  );
}
