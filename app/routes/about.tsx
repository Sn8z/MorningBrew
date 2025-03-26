import type { Route } from "./+types/home";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import styles from "./about.module.css";

export function meta({}: Route.MetaArgs) {
  return [{ title: "About Robin" }, { name: "description", content: "About page" }];
}

export default function About() {
	const [count, setCount] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCount(count + 1);
		}, 1000);
		return () => clearInterval(interval);
	}, [count]);

  return (
    <div className={styles.about}>
      <h1>About</h1>
			<p>You've been here for {count} seconds.</p>
      <Link to='/'> Home </Link>
    </div>
  );
}
