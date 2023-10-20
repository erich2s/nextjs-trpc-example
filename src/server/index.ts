// Put all router definitions in one file
import { router } from "./init-trpc";

import { userRouter } from "./routers/userRouter";
import { todoRouter } from "./routers/todoRouter";

export const appRouter = router({
  user: userRouter, // put procedures under "user" namespace
  todo: todoRouter, // put procedures under "todo" namespace
});

// You can then access the merged route with
// http://localhost:3000/trpc/<NAMESPACE>.<PROCEDURE>

export type AppRouter = typeof appRouter;
