"use client";
import Navbar from "@/components/Navbar/Navbar";
import { useEffect, useState } from "react";
import axios from "../../../../node_modules/axios/index";
import Link from "../../../../node_modules/next/link";
import ChoiceComponent from "../components/ChoiceComponent/ChoiceComponent";
import DrawerSide from "../components/DrawerSide/DrawerSide";
import QuestionsComponent from "../components/ButtonComponent/ButtonComponent";
import { useRouter } from "../../../../node_modules/next/navigation";

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

export default function Page({ params }: { params: { slug: string } }) {
  const router = useRouter();
  const [data, setData] = useState<QuizData[]>([]);
  const [question, setQuestion] = useState<QuizData>();
  const [answers, setAnswers] = useState([]);
  const [answer, setAnswer] = useState("");
  const [countAnswered, setCountAnswered] = useState(0);
  const dataString = localStorage.getItem("arrQuestions");
  let arrCurrent = dataString ? JSON.parse(dataString) : [];

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      router.push("/login");
    }
  }, []);

  function randomSort(arr: any) {
    return arr?.slice().sort(() => Math.random() - 0.5);
  }

  useEffect(() => {
    if (params.slug) {
      const dataString = localStorage.getItem("data");
      const data = dataString ? JSON.parse(dataString) : null;
      setData(data);
      const question = data[Number(params.slug) - 1];
      setQuestion(question);
      let answers = question?.incorrect_answers;
      answers?.push(question?.correct_answer);
      const randomlyChoice = randomSort(answers);
      setAnswers(randomlyChoice);
    }
  }, [params.slug]);

  useEffect(() => {
    const tempArr = arrCurrent;
    const objAnswer = tempArr.find((item: any) => item.id === params.slug);
    setAnswer(objAnswer?.answer);
  }, []);

  useEffect(() => {
    setCountAnswered(arrCurrent.length);
  }, [answer]);

  return (
    <div>
      <Navbar />
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
          <ChoiceComponent
            answers={answers}
            answer={answer}
            question={question}
            arrCurrent={arrCurrent}
            slug={params.slug}
            setAnswer={setAnswer}
          />
          <QuestionsComponent
            slug={params.slug}
            data={data}
            arrCurrent={arrCurrent}
          />
        </div>
        <DrawerSide
          data={data}
          slug={params.slug}
          countAnswered={countAnswered}
          answer={answer}
          arrCurrent={arrCurrent}
        />
      </div>
    </div>
  );
}
