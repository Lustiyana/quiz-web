import SideAuth from "@/components/SideAuth/SideAuth";
import React from "react";
import styles from "../style.module.css";

export default function Page() {
  return (
    <div className="flex h-screen">
      <SideAuth
        heading1="Welcome Back!"
        message="To keep connected with us please login with your personal info"
        link="/login"
        buttonName="Sign In"
      />
      <div className={styles["form-container"]}>
        <h2 className={styles["form-title"]}>Sign Up</h2>
        <form className={styles.form}>
          <div className={styles["input-style"]}>
            <input type="text" placeholder="Name" className={styles.input} />
          </div>
          <div className="flex gap-4">
            <div className={styles["input-style"]}>
              <input
                type="text"
                placeholder="Birth of place"
                className={styles.input}
              />
            </div>
            <div className={styles["input-style"]}>
              <input
                type="date"
                name="date"
                className={`text-slate-400 ${styles.input}`}
              ></input>
            </div>
          </div>
          <div className={styles["input-style"]}>
            <input type="text" placeholder="Email" className={styles.input} />
          </div>
          <div className={styles["input-style"]}>
            <input
              type="password"
              placeholder="Password"
              className={styles.input}
            />
          </div>
          <button className={styles["button-auth"]}>Sign Up</button>
        </form>
      </div>
    </div>
  );
}
