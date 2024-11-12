import fs from "fs/promises";
import path from "path";

export async function getTodos() {
  const filePath = path.join(process.cwd(), "app", "data", "todos.json");
  const rawcontent = await fs.readFile(filePath, { encoding: "utf-8" });
  const data = JSON.parse(rawcontent);
  const todos = data["todos"] ?? [];
  return todos;
}

