import fs from "fs";
import path from "path";
import matter from "gray-matter";

const base = path.join(process.cwd(), "content", "home");

export function readHomeFile<T = any>(filename: string): { data: T; content: string } {
  const full = path.join(base, filename);
  const raw = fs.readFileSync(full, "utf8");
  const parsed = matter(raw);
  return { data: parsed.data as T, content: parsed.content };
}
