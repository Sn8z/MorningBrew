import { Logo } from "~/Logo/logo";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "MorningBrew" },
    { name: "description", content: "Welcome to MorningBrew!" },
  ];
}

export default function Robin() {
  return (
    <>
      <p>Robin</p>
      <p>Robin</p>
      <Logo />
      <Logo />
      <Logo size={28}/>
      <Logo />
      <Logo />
      <Logo size={64}/>
      <Logo />
      <Logo />
      <Logo size={248}/>
      <Logo />
      <Logo />
      <Logo />
      <Logo />
      <Logo />
    </>
  );
}
