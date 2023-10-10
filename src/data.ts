export const todos: string[] = [];

export type User = { name: string; role: "admin" | "user" };
export const users: User[] = [
  { name: "eric", role: "admin" },
  { name: "amy", role: "user" },
  { name: "bob", role: "user" },
];
