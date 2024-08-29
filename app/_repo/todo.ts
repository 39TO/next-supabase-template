// import { db } from '@/db';
// import { todos } from '@/db/schema';
// import { eq } from 'drizzle-orm';

import { create } from 'domain';

const createTodo = async (userId: string, title: string) => {
  // await db.insert(todos).values({
  //   userId,
  //   title: title,
  // });
};

const fetchTodoByUserId = async (userId: string) => {
  // const data = await db.select().from(todos).where(eq(todos.userId, userId));
  // return data;
  return [
    { id: '1', title: 'Todo 1', completed: false, created_at: new Date() },
  ];
};

const completeTodo = async (id: string) => {
  // await db.update(todos).set({ completed: true }).where(eq(todos.id, id));
};

export const repoTodo = {
  createTodo,
  fetchTodoByUserId,
  completeTodo,
};
