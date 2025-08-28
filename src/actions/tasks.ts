"use server";

import type { NewTask, Task } from "@/types/tasks";
import { revalidatePath } from "next/cache";

export async function deleteTask(id: string) {
  await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tasks/${id}`, {
    method: "DELETE",
  });
  revalidatePath("/");
}

export async function completeTask(task: Task) {
  await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tasks/${task.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ...task, completed: !task.completed }),
  });
  revalidatePath("/");
}

export async function createTask(task: NewTask) {
  await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tasks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });
  revalidatePath("/");
}

export async function updateTask(id: string, task: NewTask) {
  await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tasks/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });
  revalidatePath("/");
}
