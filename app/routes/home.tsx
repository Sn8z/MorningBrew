import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "MorningBrew" },
    { name: "description", content: "Welcome to MorningBrew!" },
  ];
}

export default function Home() {
  return <Welcome />;
}
