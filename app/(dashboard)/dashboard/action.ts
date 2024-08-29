'use server';

import { repoTodo } from '@/app/_repo/todo';
import { createClient } from '@/utils/supabase/server';
import { revalidatePath } from 'next/cache';

export async function actionTodoComplete(todoId: string) {
  await repoTodo.completeTodo(todoId);
  revalidatePath('/dashboard');
}

export async function actionTodoCreate(formData: FormData) {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    return;
  }
  const userId = data.user.id;
  const title = formData.get('title') as string;
  await repoTodo.createTodo(userId, title);
  revalidatePath('/dashboard');
}
