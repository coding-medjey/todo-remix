import Layout from "~/components/Layout";
import { getTodos, addTodo, changeStatus, deleteExpiredAndCompleted } from "~/data/todos";
import type { LoaderFunction, ActionFunction } from "@remix-run/node";

export const loader: LoaderFunction = async () => {
  return getTodos();
};

const getTimeStamp : number | null = (dueDate : string | null) => dueDate ? new Date(dueDate + "T00:00:00Z").getTime() : null

export const action: ActionFunction = async ({ request }) => {
  try {
    const body = await request.formData();
    const {_action , ...values} = Object.fromEntries(body)
    console.log(_action,values)
    if(_action === "create"){
      const task = body.get("task")?.trim();
      const date = body.get("date");
      
      if (!task) {
        return { ok: false };
      }
  
      const data = {
        id: crypto.randomUUID(),
        task,
        dueDate: getTimeStamp(date),
        isCompleted: false,
      };
  
      addTodo(data)
  
    }else if(_action === "put"){
      changeStatus(values["id"])
    }else{
      deleteExpiredAndCompleted()
    }
    
    return { ok: true };
    
  } catch (error) {
    console.error('Error processing form:', error);
    return { ok: false };
  }
};

export default function Index() {
  return <Layout />;
}
