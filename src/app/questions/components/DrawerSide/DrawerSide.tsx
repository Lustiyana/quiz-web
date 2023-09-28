import React from "react";
import Link from "../../../../../node_modules/next/link";

export default function DrawerSide({
  data,
  slug,
  countAnswered,
  arrCurrent,
}: any) {
  console.log(arrCurrent);
  return (
    <div className="drawer-side">
      <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
      <div className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
        <div className="grid grid-cols-5 gap-4">
          {data?.map((item: any, index: any) => (
            <Link
              href={`/questions/${index + 1}`}
              className={`border btn hover:bg-slate-700 hover:text-white p-4 ${
                index + 1 === Number(slug)
                  ? "bg-slate-700 text-white"
                  : arrCurrent.filter(
                      (cur: any) => Number(cur.id) === index + 1
                    ).length > 0
                  ? "border-success"
                  : ""
              }`}
            >
              <div className="max-w-8">{index + 1}</div>
            </Link>
          ))}
        </div>
        <div className="flex justify-between mt-8">
          <div>
            <div>Total Questions:</div>
            <div className="text-center text-6xl font-bold text-warning">
              10
            </div>
          </div>
          <div>
            <div>Answered:</div>
            <div className="text-center text-6xl font-bold text-success">
              {countAnswered}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
