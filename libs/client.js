import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "blog-tomo",
  apiKey: process.env.API_KEY,
});
