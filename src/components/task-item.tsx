"use client";

import { completeTask, deleteTask } from "@/actions/tasks";
import { COLORS_MAP, type Task } from "@/types/tasks";
import Image from "next/image";
import { useRouter } from "next/navigation";

type Props = {
  task: Task;
};

export function TaskItem({ task }: Props) {
  const router = useRouter();

  async function handleDeleteTask(event: React.MouseEvent, id: string) {
    event.stopPropagation();
    await deleteTask(id);
  }

  async function handleCompleteTask(event: React.MouseEvent, task: Task) {
    event.stopPropagation();
    await completeTask(task);
  }

  function handleItemClick() {
    router.push(`/edit/${task.id}`);
  }

  return (
    <div
      className="flex items-center justify-between gap-2 sm:gap-3 border border-[#333333] rounded-md bg-[#262626] shadow p-3 sm:p-4 cursor-pointer"
      onClick={handleItemClick}
    >
      <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
        <div
          className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center cursor-pointer border-2 flex-shrink-0 ${
            task.completed ? "bg-[#5E60CE] border-[#5E60CE]" : "bg-[#333333]"
          }`}
          style={{
            borderColor: task.completed ? "#5E60CE" : COLORS_MAP[task.color],
          }}
          onClick={(e) => handleCompleteTask(e, task)}
        >
          {task.completed && (
            <Image src="/check.svg" alt="Check" width={10} height={10} className="sm:w-3 sm:h-3" />
          )}
        </div>
        <div
          className={`text-base sm:text-sm truncate ${
            task.completed ? "line-through text-[#808080]" : "text-white"
          }`}
          title={task.title}
        >
          {task.title}
        </div>
      </div>
      <div
        className="cursor-pointer p-2 -m-2 flex-shrink-0"
        onClick={(e) => handleDeleteTask(e, task.id)}
      >
        <Image src="/trash.svg" alt="Trash" width={20} height={20} className="sm:w-6 sm:h-6" />
      </div>
    </div>
  );
}
