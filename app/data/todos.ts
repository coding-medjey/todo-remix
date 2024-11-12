import { readFile } from "fs/promises";

export async function getData (){
    const rawContent = readFile("./todos.json",{encoding:"utf-8"})
    console.log(rawContent)
    const data = JSON.parse(rawContent)
    console.log(data)
    return data
}