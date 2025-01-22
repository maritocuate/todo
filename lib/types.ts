export type Category = {
  id: string;
  name: string;
  color: string;
};

export type Todo = {
  id: string;
  title: string;
  completed: boolean;
  categoryId: string;
  createdAt: Date;
};