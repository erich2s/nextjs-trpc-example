// Init trpc
import { users } from "@/data";
import { TRPCError, initTRPC } from "@trpc/server";

const t = initTRPC.create();

// Auth middleware example
export const middleware = t.middleware;
export const isAdmin = middleware(async (opts) => {
  const user = users[0];
  if (user.role !== "admin") {
    console.log(`user ${user.name} is not admin`);
    throw new TRPCError({
      code: "UNAUTHORIZED",
      message: `${user.name} is not admin`,
    });
  }
  return opts.next({
    ctx: {
      user,
    },
  });
});

// Procedure definitions
export const publicProcedure = t.procedure;
export const adminProcedure = t.procedure.use(isAdmin);

export const router = t.router;
