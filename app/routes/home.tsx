import type { Route } from "./+types/home";

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
    </>
  );
}
