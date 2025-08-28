"use client";

import { createTask, updateTask } from "@/actions/tasks";
import { COLORS_MAP, Task, type TaskColor } from "@/types/tasks";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "./button";

type Props = {
  task?: Task;
};

export function TaskForm({ task }: Props) {
  const [selectedColor, setSelectedColor] = useState<TaskColor>(
    task?.color || "BLUE"
  );
  const [title, setTitle] = useState(task?.title || "");
  const router = useRouter();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (task) {
      await updateTask(task.id, {
        title,
        color: selectedColor,
      });
    } else {
      await createTask({
        title,
        color: selectedColor,
      });
    }
    router.push("/");
  }

  return (
    <form
      className="flex items-center gap-2 flex-col w-full"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col gap-6 w-full">
        <label htmlFor="task" className="flex flex-col gap-2">
          <span className="text-sm text-[#F2F2F2] font-bold">Title</span>
          <input
            type="text"
            placeholder="Add a new task"
            className="bg-[#262626] text-sm text-[#F2F2F2] font-bold rounded-md p-4 w-full"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </label>

        <div className="flex flex-col gap-2">
          <span className="text-sm text-[#F2F2F2] font-bold">Color</span>
          <div className="flex gap-2 flex-wrap w-full">
            {Object.keys(COLORS_MAP).map((color) => (
              <button
                key={color}
                type="button"
                onClick={() => {
                  setSelectedColor(color as TaskColor);
                }}
                className={`w-[52px] h-[52px] rounded-full transition-all ${
                  selectedColor === color && "border-white scale-110"
                }`}
                style={{ backgroundColor: COLORS_MAP[color as TaskColor] }}
                aria-label={`Select ${color} color`}
              />
            ))}
          </div>
        </div>
        <div className="flex w-full justify-end">
          <Button
            type="submit"
            className="flex items-center justify-center gap-2"
          >
            {task ? "Save" : "Add Task"}
            {task ? (
              <Image src="/check.svg" alt="Check" width={16} height={16} />
            ) : (
              <Image src="/plus.svg" alt="Plus" width={16} height={16} />
            )}
          </Button>
        </div>
      </div>
    </form>
  );
}
