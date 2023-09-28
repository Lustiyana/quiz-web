import React from "react";
import Link from "../../../node_modules/next/link";
import { usePathname, useRouter } from "../../../node_modules/next/navigation";
import Timer from "../Timer/Timer";

export default function Navbar() {
  const pathname = usePathname();
  const path = pathname.split("/");
  const router = useRouter();

  const handleLogOut = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };
  return (
    <div className="navbar bg-base-100 shadow-md flex justify-between">
      <Link href="/" className="btn btn-ghost normal-case text-xl">
        Quizzz
      </Link>
      {path[path.length - 1] === "" ? (
        <button onClick={handleLogOut} className="btn">
          Log Out
        </button>
      ) : (
        <Timer />
      )}
    </div>
  );
}
