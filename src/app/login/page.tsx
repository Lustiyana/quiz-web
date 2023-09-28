"use client";

import SideAuth from "@/components/SideAuth/SideAuth";
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "../../../node_modules/next/navigation";
import styles from "../style.module.css";
import { v4 as uuidv4 } from "uuid";

export default function Page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const router = useRouter();
  const token = uuidv4();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (email == "user@gmail.com" && password == "abc1234") {
      localStorage.setItem("token", token);
      localStorage.setItem("email", email);

      if (localStorage.getItem("token")) {
        setIsLogin(true);
      }
    }
  };
  useEffect(() => {
    if (isLogin) {
      router.push("/");
    }
  }, [isLogin]);

  return (
    <div className="flex h-screen">
      <SideAuth
        heading1="Hello"
        message="Add your personal info to make connection with us"
        link="/register"
        buttonName="Sign Up"
      />
      <div className={styles["form-container"]}>
        <h2 className={styles["form-title"]}>Sign in</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles["input-style"]}>
            <input
              type="text"
              value={email}
              onChange={(e: any) => setEmail(e.target.value)}
              placeholder="Email"
              className={styles.input}
            />
          </div>
          <div className={styles["input-style"]}>
            <input
              type="password"
              value={password}
              onChange={(e: any) => setPassword(e.target.value)}
              placeholder="Password"
              className={styles.input}
            />
          </div>
          <button type="submit" className={styles["button-auth"]}>
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
