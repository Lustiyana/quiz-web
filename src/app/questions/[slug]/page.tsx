"use client";
import { useEffect, useState } from "react";
import axios from "../../../../node_modules/axios/index";
import Link from "../../../../node_modules/next/link";

interface QuizData {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
}

export async function generateStaticParams() {
  const posts = await axios.get(
    "https://opentdb.com/api.php?amount=10&category=18&difficulty=medium"
  );
  return posts.data.results.map((post: any, index: any) => ({
    slug: (index + 1).toString(),
  }));
}

async function getData() {
  const res = await axios.get(
    "https://opentdb.com/api.php?amount=10&category=18&difficulty=medium"
  );
  return await res.data.results;
}
export default function Page({ params }: { params: { slug: string } }) {
  const [data, setData] = useState<QuizData[]>([]);
  const [question, setQuestion] = useState<QuizData>();
  const [answers, setAnswers] = useState([]);
  const [answer, setAnswer] = useState("");

  useEffect(() => {
    async function fetchData() {
      const data = await getData();
      setData(data);
    }
    fetchData();
  }, []);
  function randomSort(arr: any) {
    return arr?.slice().sort(() => Math.random() - 0.5);
  }

  function numberToAlphabet(number: any) {
    if (number >= 1 && number <= 26) {
      return String.fromCharCode(64 + parseInt(number));
    } else {
      return "Invalid input. Please provide a number between 1 and 26.";
    }
  }

  useEffect(() => {
    const question = data[Number(params.slug) - 1];
    setQuestion(question);
    let answers = question?.incorrect_answers;
    answers?.push(question?.correct_answer);
    const randomlyChoice = randomSort(answers);
    setAnswers(randomlyChoice);
  }, [data, params.slug]);
  console.log(data);

  function handleSelectAnswer(e: any) {
    setAnswer(e);
  }

  return (
    <div>
      <div className="navbar bg-base-100 shadow-md flex justify-between">
        <Link href="/" className="btn btn-ghost normal-case text-xl">
          Quizzz
        </Link>
        <div className="border py-2 px-4">
          <div>JJ</div>
          <div>MM</div>
          <div>SS</div>
        </div>
      </div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center h-3/4">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
          <div className="flex flex-col justify-center items-center border w-3/4 rounded-md h-3/4 gap-8 p-8">
            <div className="text-center">{question?.question}</div>
            <div className="flex flex-col gap-4">
              {answers?.map((item, index) => (
                <div className="flex items-center gap-4">
                  <div
                    className={`border w-12 h-12 flex items-center justify-center rounded-full cursor-pointer ${
                      item === answer ? "bg-primary text-white" : ""
                    }`}
                    onClick={() => handleSelectAnswer(item)}
                  >
                    {numberToAlphabet(index + 1)}
                  </div>
                  <div>{item}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex gap-4 mt-8">
            {params.slug !== "1" ? (
              <Link
                href={`/questions/${Number(params.slug) - 1}`}
                className="btn btn-outline"
              >
                Prev
              </Link>
            ) : null}
            <Link
              href={`/questions/${Number(params.slug) + 1}`}
              className="btn btn-outline"
            >
              Next
            </Link>
          </div>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <div className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <div className="grid grid-cols-5 gap-4">
              {data?.map((item, index) => (
                <Link
                  href={`/questions/${index + 1}`}
                  className={`border btn hover:bg-slate-700 hover:text-white ${
                    index + 1 === Number(params.slug)
                      ? "bg-slate-700 text-white p-4"
                      : "p-4"
                  }`}
                >
                  <div className="max-w-8">{index + 1}</div>
                </Link>
              ))}
            </div>
            <div className="flex justify-between mt-8">
              <div>
                <div>Total Soal:</div>
                <div className="text-center text-6xl font-bold text-warning">
                  10
                </div>
              </div>
              <div>
                <div>Jumlah Terjawab:</div>
                <div className="text-center text-6xl font-bold text-success">
                  0
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
