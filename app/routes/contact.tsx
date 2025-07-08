import type { Route } from "./+types/contact";

export function meta({}: Route.MetaArgs) {
  return [{ title: "New React Router App" }, { name: "description", content: "Welcome to React Router!" }];
}

export default function Contact() {
  return "Contact Page!";
}
