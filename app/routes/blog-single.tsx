import type { Route } from "./+types/blog-single";

export function meta({}: Route.MetaArgs) {
  return [{ title: "New React Router App" }, { name: "description", content: "Welcome to React Router!" }];
}

export async function loader({ params }: Route.LoaderArgs) {
  return { slug: params.slug };
}

export default function BlogSingle({ loaderData }: Route.ComponentProps) {
  return (
    <>
      Single Blog Page <p>{loaderData.slug}</p>
    </>
  );
}
