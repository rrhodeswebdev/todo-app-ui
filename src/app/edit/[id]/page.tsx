import { TaskForm } from "@/components/task-form";
import Image from "next/image";
import Link from "next/link";

type Props = {
  params: {
    id: string;
  };
};

export default async function EditTaskPage({ params }: Props) {
  const { id } = await params;

  const taskResponse = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/tasks/${id}`
  );

  const { data: task } = await taskResponse.json();

  if (!task) {
    return <div>Task not found</div>;
  }

  return (
    <div className="flex flex-col justify-center px-4 md:px-0 relative w-full max-w-[736px] mx-auto">
      <div className="mt-16">
        <Link href="/">
          <Image
            src="/arrow-left.svg"
            alt="Arrow Left"
            width={24}
            height={24}
          />
        </Link>
      </div>
      <div className="w-full flex justify-center mt-24">
        <TaskForm task={task} />
      </div>
    </div>
  );
}
