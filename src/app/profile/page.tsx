import Link from "next/link";
import styles from "../page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className="space-x-4">
        <h1>Welcome to the profile page.</h1>
        <code> NextJS is fastest!</code>
        <Link href={"/"}>
          <button className="btn btn-primary">Home</button>
        </Link>
      </div>
    </main>
  );
}
