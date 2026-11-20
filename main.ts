import { copyFileSync, mkdirSync, readFileSync } from "node:fs";

const postFile = new URL("./POST.json", import.meta.url);
const post = JSON.parse(readFileSync(postFile, "utf8"));
if (typeof post.url !== "string" ||
    !/^https:\/\/(?:x\.com|twitter\.com)\/(?:[A-Za-z0-9_]+\/status|i\/web\/status)\/\d+(?:[?#].*)?$/.test(post.url)) {
  throw new Error("POST.json must contain a public X post URL.");
}

mkdirSync("/output", { recursive: true });
copyFileSync(postFile, "/output/POST.json");
