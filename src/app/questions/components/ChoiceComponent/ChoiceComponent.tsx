import React from "react";

export default function ChoiceComponent({
  answers,
  answer,
  question,
  arrCurrent,
  slug,
  setAnswer,
}: any) {
  function numberToAlphabet(number: any) {
    if (number >= 1 && number <= 26) {
      return String.fromCharCode(64 + parseInt(number));
    } else {
      return "Invalid input. Please provide a number between 1 and 26.";
    }
  }

  function handleSelectAnswer(e: any) {
    setAnswer(e);
    const arrQuestions: any = [];
    const tempArr = arrCurrent;
    const objAnswer = tempArr.find((item: any) => item.id === slug);
    if (objAnswer) {
      arrCurrent.splice(arrCurrent.indexOf(objAnswer), 1);
    }

    const answeredQuestion = {
      ...question,
      answer: e,
      id: slug,
    };
    arrQuestions.push(...arrCurrent, answeredQuestion);
    localStorage.setItem("arrQuestions", JSON.stringify(arrQuestions));
  }

  return (
    <div className="flex flex-col justify-center items-center border w-3/4 rounded-md h-3/4 gap-8 p-8">
      <div className="text-center">{question?.question}</div>
      <div className="flex flex-col gap-4">
        {answers?.map((item: any, index: any) => (
          <div className="flex items-center gap-4">
            <button
              className={`border w-12 h-12 flex items-center justify-center rounded-full btn ${
                item === answer ? "bg-primary text-white" : ""
              }`}
              onClick={() => handleSelectAnswer(item)}
            >
              {numberToAlphabet(index + 1)}
            </button>
            <div>{item}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
