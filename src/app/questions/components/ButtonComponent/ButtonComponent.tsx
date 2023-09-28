import Modal from "@/components/Modal/Modal";
import React from "react";
import Link from "../../../../../node_modules/next/link";

export default function QuestionsComponent({ slug, data, arrCurrent }: any) {
  return (
    <div className="flex gap-4 mt-8">
      {slug !== "1" ? (
        <Link
          href={`/questions/${Number(slug) - 1}`}
          className="btn btn-outline"
        >
          Prev
        </Link>
      ) : null}
      {slug === data?.length.toString() ? (
        <div>
          <button
            className="btn btn-outline"
            onClick={() => document.getElementById("my_modal_5").showModal()}
          >
            Finish
          </button>
          <Modal data={arrCurrent} />
        </div>
      ) : (
        <Link
          href={`/questions/${Number(slug) + 1}`}
          className="btn btn-outline"
        >
          Next
        </Link>
      )}
    </div>
  );
}
