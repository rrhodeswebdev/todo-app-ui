import { Button } from "@/components/button";
import { TaskList } from "@/components/task-list";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const tasksData = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tasks`);
  const { data } = await tasksData.json();

  const tasks = data || [];

  return (
    <div className="flex justify-center px-4 md:px-0 relative">
      <div className="absolute -top-[26px] left-4 right-4 md:left-1/2 md:right-auto md:w-[736px] md:-translate-x-1/2">
        <Link href="/new">
          <Button className="flex items-center justify-center gap-2">
            Create Task{" "}
            <Image src="/plus.svg" alt="Plus" width={16} height={16} />
          </Button>
        </Link>
      </div>
      <div className="w-full max-w-[736px] mt-24">
        <TaskList tasks={tasks} />
      </div>
    </div>
  );
}
