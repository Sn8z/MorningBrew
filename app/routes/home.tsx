import type { Route } from "./+types/home";
import styles from "./home.module.css";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "MorningBrew" },
    { name: "description", content: "Welcome to MorningBrew!" },
  ];
}

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <input type='checkbox' id='toggle' />
      <label htmlFor='toggle'>Toggle</label>
      <label htmlFor='toggle'>Toggle</label>
      <label htmlFor='toggle'>Toggle</label>
      <label htmlFor='toggle'>Toggle</label>
      <label htmlFor='toggle'>Toggle</label>
      <label htmlFor='toggle'>Toggle</label>
      <div className={styles.box}>
        <div className={styles.item}></div>
        <div className={styles.item}></div>
        <div className={styles.item}></div>
        <div className={styles.item}></div>
        <div className={styles.item}></div>
        <div className={styles.item}></div>
      </div>
      <div className={styles.box}>
        <div className={styles.item}></div>
        <div className={styles.item}></div>
        <div className={styles.item}></div>
      </div>
      <div className={styles.box}>
        <div className={styles.item}></div>
      </div>
    </>
  );
}
