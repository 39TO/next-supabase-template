import { repoTodo } from '@/app/_repo/todo';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { CheckIcon } from 'lucide-react';
import { redirect } from 'next/navigation';
import { CompleteButton } from './_components/CompleteButton';
import { NewTodoButton } from './_components/NewTodoButton';
import { createClient } from '@/utils/supabase/server';

export default async function DashboarDeciderPage() {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect('/login');
  }
  const todo = await repoTodo.fetchTodoByUserId(data.user.id);
  return (
    <div className="space-y-5">
      <NewTodoButton />
      <Table>
        <TableCaption>My TODO</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]"></TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Created_time</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {todo.map((t) => (
            <TableRow key={t.id}>
              <TableCell>
                {t.completed ? (
                  <CheckIcon size="18" />
                ) : (
                  <CompleteButton id={t.id} />
                )}
              </TableCell>
              <TableCell>{t.title}</TableCell>
              <TableCell>{`${t.created_at?.getMonth()}月${t.created_at?.getDay()}日${t.created_at?.getHours()}h`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
