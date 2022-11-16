import { useEffect, useState } from "react";
import supabase from "../utils/supabase";

export const useAddTodo = () => {
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    feachTodos()
  }, [])

  const feachTodos = async () => {
    const datas : any = await supabase.from('todos').select('*');
    setTodo(datas.body)
  }

  return {todo, feachTodos};
}