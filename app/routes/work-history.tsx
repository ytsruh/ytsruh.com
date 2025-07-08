import type { Route } from "./+types/work-history";

export function meta({}: Route.MetaArgs) {
  return [{ title: "New React Router App" }, { name: "description", content: "Welcome to React Router!" }];
}

export default function WorkHistory() {
  return "Work History";
}
