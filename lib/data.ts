import { Category, Todo } from './types';

export const initialCategories: Category[] = [
  { id: '1', name: 'Personal', color: 'hsl(var(--chart-1))' },
  { id: '2', name: 'Work', color: 'hsl(var(--chart-2))' },
  { id: '3', name: 'Shopping', color: 'hsl(var(--chart-3))' },
  { id: '4', name: 'Health', color: 'hsl(var(--chart-4))' },
];

export const initialTodos: Todo[] = [
  {
    id: '1',
    title: 'Complete project presentation',
    completed: false,
    categoryId: '2',
    createdAt: new Date(),
  },
  {
    id: '2',
    title: 'Buy groceries',
    completed: true,
    categoryId: '3',
    createdAt: new Date(),
  },
];