import adapter from "@sveltejs/adapter-static";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),

    // hydrate the <div id="root"> element in src/app.html
    target: "#root",

    // Override http methods
    methodOverride: {
      allowed: ["PATCH", "DELETE"],
    },
  },
};

export default config;
