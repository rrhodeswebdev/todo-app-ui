import Image from "next/image";
import type { Task } from "../types/tasks";
import { TaskItem } from "./task-item";

type Props = {
  tasks: Task[] | [];
};

export function TaskList({ tasks }: Props) {
  const completedTasks = tasks.filter((task) => task.completed) || [];
  const pendingTasks = tasks.filter((task) => !task.completed) || [];

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center w-full">
        <div className="flex items-center gap-2 text-sm text-[#4EA8DE] font-bold">
          Tasks{" "}
          <span className="bg-[#333333] text-[#D9D9D9] rounded-full w-[25px] h-[19px] flex items-center justify-center">
            {pendingTasks?.length}
          </span>
        </div>
        <div className="flex items-center gap-2 text-sm text-[#4EA8DE] font-bold">
          Completed{" "}
          <span className="bg-[#333333] text-[#D9D9D9] rounded-full w-auto h-[19px] flex items-center justify-center px-2">
            {completedTasks?.length} of {tasks?.length}
          </span>
        </div>
      </div>
      {tasks.length > 0 ? (
        <div className="flex flex-col gap-4">
          {tasks.map((task) => (
            <TaskItem key={task.id} task={task} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center gap-4 h-[266px]">
          <Image src="/clipboard.svg" alt="Clipboard" width={56} height={56} />
          <p className="text-sm text-gray-500">
            You don&apos;t have any tasks registered yet.
          </p>
          <p className="text-sm text-gray-500">
            Create tasks and organize your to-do items.
          </p>
        </div>
      )}
    </div>
  );
}
