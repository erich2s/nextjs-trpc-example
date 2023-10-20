import { router, publicProcedure } from "../init-trpc";
import { users } from "@/data";
export const userRouter = router({
  getAllUsers: publicProcedure.query(() => {
    return { users };
  }),
});
