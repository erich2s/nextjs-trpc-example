import { z } from "zod";
import { adminProcedure, publicProcedure, router } from "./init-trpc";
import { todos } from "@/data";
export const todoRouter = router({
  getTodos: publicProcedure.query(async () => {
    return { todos };
  }),
  addTodo: publicProcedure.input(z.string()).mutation(async (opts) => {
    const { input } = opts;
    todos.push(input + " " + todos.length);
    return { todos };
  }),
  deleteTodo: adminProcedure.input(z.number()).mutation(async (opts) => {
    const { input, ctx } = opts;
    const user = ctx.user;
    console.log(user, "deleted todo:", input);
    todos.splice(input, 1);
    return { todos };
  }),
});
