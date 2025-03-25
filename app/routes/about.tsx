import { Link } from "react-router";
import type { Route } from "./+types/home";
import { useEffect, useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [{ title: "About" }, { name: "description", content: "About page" }];
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
    <>
      <h1>About</h1>
			<p>You've been here for {count} seconds.</p>
      <Link to='/'> Home </Link>
    </>
  );
}
