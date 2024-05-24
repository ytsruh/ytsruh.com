import { Hono } from "hono";
import { handle } from "hono/cloudflare-pages";

type Bindings = {
  AI: any;
  API_KEY: string;
};

const app = new Hono<{ Bindings: Bindings }>().basePath("/api");

app.use("*", async (c, next) => {
  let auth = c.req.header("Authorization");
  console.log(auth);
  console.log(c.env.API_KEY);
  if (auth === c.env.API_KEY) {
    await next();
    return;
  }
  return c.text("Unauthorized", 401);
});

app.get("/llama2", async (c) => {
  const question = c.req.query("text");
  if (!question) {
    return c.text("Please provide a text query");
  }

  const systemPrompt = ``;

  const data = await c.env.AI.run("@cf/meta/llama-2-7b-chat-fp16", {
    messages: [
      { role: "system", content: systemPrompt },
      { role: "user", content: question },
    ],
  });
  console.log(data);
  return c.json(data);
});

app.get("/llama3", async (c) => {
  const question = c.req.query("text");
  if (!question) {
    return c.text("Please provide a text query");
  }

  const systemPrompt = ``;

  const data = await c.env.AI.run("@cf/meta/llama-3-8b-instruct", {
    messages: [
      { role: "system", content: systemPrompt },
      { role: "user", content: question },
    ],
  });
  console.log(data);
  return c.json(data);
});

app.onError((err, c) => {
  console.error(err);
  return c.text("An error occurred");
});

export const onRequest = handle(app);
