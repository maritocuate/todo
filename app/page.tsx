import { TodoList } from "@/components/todo-list";

export default function Home() {
  return (
    <main className="min-h-screen bg-background py-8">
      <TodoList />
    </main>
  );
}