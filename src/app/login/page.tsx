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
  const [disabled, setDisabled] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const token = uuidv4();

  const handleSubmit = (e: any) => {
    setLoading(true);
    e.preventDefault();
    if (email == "user@gmail.com") {
      if (password === "abc1234") {
        localStorage.setItem("token", token);
        localStorage.setItem("email", email);

        if (localStorage.getItem("token")) {
          setIsLogin(true);
        }
      } else {
        setLoading(false);
        setErrorMessage("The password is incorrect");
      }
    } else {
      setShowToast(true);
      setLoading(false);
      setErrorMessage("The email is incorrect");
    }
  };
  useEffect(() => {
    if (isLogin) {
      router.push("/");
    }
  }, [isLogin]);

  useEffect(() => {
    if (email === "" || password === "") {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [email, password]);

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
          <button
            type="submit"
            className={styles["button-auth"]}
            disabled={disabled}
          >
            {loading ? (
              <span className="loading loading-spinner"></span>
            ) : (
              <span>Sign In</span>
            )}
          </button>
        </form>
      </div>
      {showToast ? (
        <div className="toast">
          <div className="alert alert-error">
            <span>{errorMessage}</span>
          </div>
        </div>
      ) : null}
    </div>
  );
}
