import styles from "./Login.module.css";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.heading}>
          <h3>Welcome back!</h3>
        </div>
        <div className={styles.labelContainer}>
          <label className={styles.label}>EMAIL ADDRESS</label>
          <input placeholder="name@email.com" className={styles.inputField} />
        </div>
        <div className={styles.labelContainer}>
          <label className={styles.label}>PASSWORD</label>
          <input placeholder="Password" className={styles.inputField} />
        </div>
        <div className={styles.checkboxContainer}>
          <div>
            <input type="checkbox" /> <label>Remember me</label>
          </div>
          <p className={styles.forgot}>Forgot password?</p>
        </div>
        <button className={styles.loginBtn}>Login</button>
        <Link to="/signup" className={styles.signupLink}>
          <div className={styles.signup}>
            <p>Don't have an account? Register or Verify</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
