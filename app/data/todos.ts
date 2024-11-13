import fs from "fs/promises";
import path from "path";

type Todo = {
  "task" : string,
  "id": string,
  "dueDate" : number,
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


export async function deleteExpiredAndCompleted (){
  let todos = await getTodos()
  todos.forEach((todo : Todo) => {
    console.log( !(todo.isCompleted || (todo.dueDate ? todo.dueDate < Date.now() : true)))
  });
  todos = todos.filter((todo : Todo)=> !(todo.isCompleted || (todo.dueDate ? todo.dueDate < Date.now() : false)))
  console.log(todos)
  const data = {"todos" : todos}
  const filePath = path.join(process.cwd(), "app", "data", "todos.json");
  await fs.writeFile(filePath,JSON.stringify(data))
}