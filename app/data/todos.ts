import fs from "fs/promises";
import path from "path";

type Todo = {
  "task" : string,
  "id": string,
  "dueDate" : string,
  "isCompleted" : boolean
}

export async function getTodos() {
  const filePath = path.join(process.cwd(), "app", "data", "todos.json");
  const rawcontent = await fs.readFile(filePath, { encoding: "utf-8" });
  const data = JSON.parse(rawcontent);
  const todos = data["todos"] ?? [];
  return todos;
}


export async function addTodo(todo:Todo){
  const todos = await getTodos()
  todos.push(todo)
  const data = {"todos" : todos}
  const filePath = path.join(process.cwd(), "app", "data", "todos.json");
  await fs.writeFile(filePath,JSON.stringify(data))
}


export async function changeStatus (id:string){
  const todos = await getTodos()
  for(const todo of todos) {
    if(todo.id === id){
      todo.isCompleted = !todo.isCompleted
    }
  }
  const data = {"todos" : todos}
  const filePath = path.join(process.cwd(), "app", "data", "todos.json");
  await fs.writeFile(filePath,JSON.stringify(data))
}
