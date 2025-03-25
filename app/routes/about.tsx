import { Link } from "react-router";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [{ title: "About" }, { name: "description", content: "About page" }];
}

export default function About() {
  return (
    <>
      <h1>About</h1>
      <Link to='/'> Home </Link>
    </>
  );
}
