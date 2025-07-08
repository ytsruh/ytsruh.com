import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("work-history", "routes/work-history.tsx"),
  route("projects", "routes/projects.tsx"),
  route("blog", "routes/blog.tsx"),
  route("blog/:slug", "routes/blog-single.tsx"),
  route("now", "routes/now.tsx"),
  route("contact", "routes/contact.tsx"),
] satisfies RouteConfig;
