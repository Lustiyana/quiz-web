import React, { useEffect, useState } from "react";
import Link from "../../../node_modules/next/link";
import { useRouter } from "../../../node_modules/next/navigation";

export default function Modal({ data }: any) {
  const router = useRouter();
  const [score, setScore] = useState(0);
  const [isGood, setIsGood] = useState(false);
  console.log(data);
  useEffect(() => {
    data.map((item: any) => {
      console.log(item.answer === item.correct_answer);
      if (item.answer === item.correct_answer) {
        setScore((prev) => prev + 10);
      }
    });
  }, []);
  console.log(score);

  const handleClick = () => {
    localStorage.removeItem("data");
    localStorage.removeItem("arrQuestions");
    router.push("/");
  };
  return (
    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
      <div className="modal-box">
        <div className="flex flex-col gap-8 items-center">
          <h3 className="text-lg">Score</h3>
          <div
            className={`font-bold text-6xl ${
              score > 50 ? "text-success" : "text-error"
            }`}
          >
            {score}
          </div>
        </div>
        <div className="modal-action">
          <button onClick={handleClick} className="btn btn-info">
            Back to Home
          </button>
        </div>
      </div>
    </dialog>
  );
}
