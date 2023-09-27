import SideAuth from "@/components/SideAuth/SideAuth";
import React from "react";
import styles from "../style.module.css";

export default function Page() {
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
        <form className={styles.form}>
          <div className={styles["form-style"]}>
            <input type="text" placeholder="Email" className={styles.input} />
          </div>
          <div className={styles["form-style"]}>
            <input
              type="password"
              placeholder="Password"
              className={styles.input}
            />
          </div>
          <button className={styles["button-auth"]}>Sign In</button>
        </form>
      </div>
    </div>
  );
}
