"use client";

import { useState, useRef } from "react";
import { Plus, Check, X, Pencil, Trash2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BadgeCustom } from "@/components/ui/badge-custom";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { initialCategories, initialTodos } from "@/lib/data";
import { Category, Todo } from "@/lib/types";

export function TodoList() {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);
  const [categories] = useState<Category[]>(initialCategories);
  const [newTodo, setNewTodo] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>(
    categories[0].id
  );
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editText, setEditText] = useState("");
  const [filter, setFilter] = useState<string>("all");
  const [removingId, setRemovingId] = useState<string | null>(null);

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      const todo: Todo = {
        id: Date.now().toString(),
        title: newTodo,
        completed: false,
        categoryId: selectedCategory,
        createdAt: new Date(),
      };
      setTodos([...todos, todo]);
      setNewTodo("");
    }
  };

  const handleToggle = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDelete = (id: string) => {
    setRemovingId(id);
    setTimeout(() => {
      setTodos(todos.filter((todo) => todo.id !== id));
      setRemovingId(null);
    }, 300); // Match the animation duration
  };

  const startEdit = (todo: Todo) => {
    setEditingId(todo.id);
    setEditText(todo.title);
  };

  const handleEdit = () => {
    if (editingId && editText.trim()) {
      setTodos(
        todos.map((todo) =>
          todo.id === editingId ? { ...todo, title: editText } : todo
        )
      );
      setEditingId(null);
      setEditText("");
    }
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "all") return true;
    if (filter === "completed") return todo.completed;
    if (filter === "active") return !todo.completed;
    return todo.categoryId === filter;
  });

  return (
    <div className="w-full max-w-3xl mx-auto p-6 space-y-8">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Simple Todo App</h1>
        <p className="text-muted-foreground">
          Keep track of your tasks in a beautiful way
        </p>
      </div>

      <div className="flex gap-2">
        <Input
          placeholder="Add a new todo..."
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleAddTodo()}
          className="flex-1"
        />
        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((category) => (
              <SelectItem key={category.id} value={category.id}>
                <div className="flex items-center gap-2">
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: category.color }}
                  />
                  {category.name}
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Button onClick={handleAddTodo}>
          <Plus className="w-4 h-4" />
        </Button>
      </div>

      <div className="flex gap-2 pb-4">
        <Button
          variant={filter === "all" ? "default" : "outline"}
          onClick={() => setFilter("all")}
        >
          All
        </Button>
        <Button
          variant={filter === "active" ? "default" : "outline"}
          onClick={() => setFilter("active")}
        >
          Active
        </Button>
        <Button
          variant={filter === "completed" ? "default" : "outline"}
          onClick={() => setFilter("completed")}
        >
          Completed
        </Button>
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={filter === category.id ? "default" : "outline"}
            onClick={() => setFilter(category.id)}
          >
            <div
              className="w-2 h-2 rounded-full mr-2"
              style={{ backgroundColor: category.color }}
            />
            {category.name}
          </Button>
        ))}
      </div>

      <div className="space-y-4">
        {filteredTodos.map((todo) => {
          const category = categories.find((c) => c.id === todo.categoryId);
          const isRemoving = removingId === todo.id;
          return (
            <div
              key={todo.id}
              className={cn(
                "flex items-center gap-4 p-4 bg-card rounded-lg border shadow-sm animate-slide-in",
                isRemoving && "animate-slide-out"
              )}
            >
              <Button
                variant="ghost"
                size="icon"
                onClick={() => handleToggle(todo.id)}
                className={cn(
                  "shrink-0",
                  todo.completed && "text-primary bg-primary/10"
                )}
              >
                <Check className="w-4 h-4" />
              </Button>

              {editingId === todo.id ? (
                <div className="flex-1 flex gap-2">
                  <Input
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleEdit()}
                  />
                  <Button onClick={handleEdit}>
                    <Check className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" onClick={() => setEditingId(null)}>
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              ) : (
                <>
                  <div className="flex-1">
                    <p
                      className={cn(
                        "text-sm font-medium",
                        todo.completed && "line-through text-muted-foreground"
                      )}
                    >
                      {todo.title}
                    </p>
                    {category && (
                      <BadgeCustom color={category.color}>
                        {category.name}
                      </BadgeCustom>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => startEdit(todo)}
                    >
                      <Pencil className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleDelete(todo.id)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
