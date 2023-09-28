import React from "react";
import { useRouter } from "../../node_modules/next/navigation";

export default function checkIfLogin({ children }: any) {
  const token = localStorage.getItem("token");
  const router = useRouter();
  if (!token) {
    router.push("/login");
  } else {
    children;
  }
}
