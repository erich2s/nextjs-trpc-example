"use client";
import { trpc } from "@/trpc/client";

export default function TodoList() {
  const utils = trpc.useContext();
  const { data, isLoading, isError } = trpc.todo.getTodos.useQuery();
  const addTodo = trpc.todo.addTodo.useMutation({
    onSuccess: () => {
      utils.todo.getTodos.invalidate();
    },
  });
  const deleteTodo = trpc.todo.deleteTodo.useMutation({
    onSuccess: () => {
      utils.todo.getTodos.invalidate();
    },
    onError: (e) => {
      alert(e);
    },
  });
  return (
    <>
      <button
        className="text-white bg-indigo-500 p-2 w-20 rounded-md"
        onClick={() => {
          addTodo.mutate("item");
        }}
      >
        add
      </button>
      <div>
        {isLoading
          ? "loading..."
          : isError
          ? "error"
          : data.todos.map((todo, i) => (
              <div
                key={todo}
                className="text-white bg-red-500 hover:bg-red-600 cursor-pointer p-2 rounded-md w-fit m-4 select-none"
                onClick={() =>
                  deleteTodo.mutateAsync(i).then(() => console.log("deleted"))
                }
              >
                {todo}
              </div>
            ))}
      </div>
    </>
  );
}
